import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Router} from "@angular/router";
import {PetOwnerService} from "../services/petOwner.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";
import {PetOwner} from "../entities/petOwner";
import {DiseaseService} from "../services/disease.service";
import {Disease} from "../entities/disease";
import {PetMedicationService} from "../services/petMedication.service";
import {MedicationService} from "../services/medication.service";
import {Medication} from "../entities/medication";
import {PetMedication} from "../entities/petMedication";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../entities/doctor";
import {ZipPipe} from "../shared/pipes/zip.pipe";
import * as jsPDF from 'jspdf'

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

  //field from html - petId
  public id: string;

  constructor(private router:Router, private petService:PetService, private ownerService:PetOwnerService,
              private doctorService:DoctorService, private diseasesService:DiseaseService, private petDiseaseService:PetDiseaseService,
              private medicationService:MedicationService, private petMedicationService:PetMedicationService) {
  }

  public get pet(): Pet{
    return this.petService.pet;
  }

  public get doctor(): Doctor{
    return this.doctorService.doctor;
  }

  public get petMedications(): Array<PetMedication>{
    return this.petMedicationService.petMedications;
  }

  public get petOwner(): PetOwner{
    return this.ownerService.petOwner;
  }

  public get diseases(): Array<Disease>{
    return this.diseasesService.diseases;
  }

  public get petDiseases(): Array<PetDisease>{
    return this.petDiseaseService.petDiseases;
  }

  public get medications(): Array<Medication>{
    return this.medicationService.medications;
  }

  //uses petId to search for all pet information
  search (): void{
    //selects the pet, its owner and its doctor
    this.petService.findById(this.id);
    this.ownerService.findByPet(this.id);
    this.doctorService.findByPet(this.id);

    //PetDiseases and Diseases
    this.petDiseaseService.findByPet(this.id);
    this.diseasesService.findByPet(this.id);

    //PetMedications and Medications
    this.petMedicationService.findByPet(this.id);
    this.medicationService.findByPet(this.id);

  }

  //deletes a pet by its id
  delete (): void{
    this.petService.delete(this.pet.id.toString());

    //resets all saved objects depending on deleted pet
    //Pet, Owner, PetDiseases, Disease, PetMedication, Medication, Doctor
    this.petService.pet = null;
    this.ownerService.petOwner = null;
    this.doctorService.doctor = null;

    this.petDiseaseService.petDiseases = [];
    this.petMedicationService.petMedications = [];
    this.medicationService.medications = [];
    this.diseasesService.diseases = [];

    this.router.navigate(["home"]);
  }

  // takes an input String and if it is too long inserts line-breaks
  separateString(input:String):String {
    if(input.length < 80) {
      return input;
    } else {
      return "\n" + input.match(/.{1,80}/g).join("\n");
    }
  }

  //to generate a pdf report for pet information
  pdf():void{

    let doc = new jsPDF();
    doc.setFontSize(12);

    let date = new Date();
    let dateString = date.toDateString();
    let timestamp = Date.now();

    let pet = this.petService.pet;
    let petOwner = this.ownerService.petOwner;
    let doctor = this.doctorService.doctor;

    // use of a pipe in ts
    let diseases = new ZipPipe().transform(this.diseasesService.diseases,this.petDiseaseService.petDiseases);
    let medications = new ZipPipe().transform(this.medicationService.medications,this.petMedicationService.petMedications);

    let diseaseStrings = [];
    let medicationStrings = [];

    for(let disease of diseases){
      let description = this.separateString(disease.description);
      diseaseStrings.push(`NAME: ${disease.name}
DESCRIPTION: ${description}
BEGIN: ${disease.diseaseStart}     END: ${disease.diseaseEnd}\n\n`);
    }

    for(let medication of medications){
      let description = this.separateString(medication.description);
      medicationStrings.push(`NAME: ${medication.name}
DESCRIPTION: ${description}
DOSE: ${medication.dose}
BEGIN: ${medication.issueDate}     End: ${medication.endDate}\n\n`);
    }

    //text coords in doc.text are first from the left border and then from the top
    doc.setFontSize(10);
    doc.text(dateString,170,20);

    doc.setFontSize(20);
    let title = `Report for ${pet.name}`;
    doc.text(title,20,20);

    doc.setFontSize(15);
    doc.text("Pet", 20, 35);
    doc.setFontSize(12);
    let petBlock = `ID: ${pet.id}
NAME: ${pet.name}
TYPE: ${pet.type}
WEIGHT:  ${pet.weight}
BIRTHDATE:  ${pet.birth_date}`;
    doc.text(petBlock,20,45);

    doc.setFontSize(15);
    doc.text("Owner", 20, 80);
    doc.setFontSize(12);
    let ownerBlock = `NAME: ${petOwner.firstName} ${petOwner.lastName}
ADDRESS: ${petOwner.address}
PHONE: ${petOwner.phone}
E-MAIL: ${petOwner.email}`;
    doc.text(ownerBlock,20,90);

    doc.setFontSize(15);
    doc.text("Doctor", 20, 120);
    doc.setFontSize(12);
    let doctorBlock = `NAME:  Dr. ${doctor.firstName} ${doctor.lastName}
E-MAIL: ${doctor.email}
PHONE: ${doctor.phone}
ADDRESS: ${doctor.address}
OFFICE HOURS: ${doctor.officeHours}`;
    doc.text(doctorBlock,20,130);

    let page = 1;
    doc.text(page.toString(),190,277);
    doc.addPage();
    page++;
    doc.setPage(page);
    doc.text(page.toString(),190,277);

    doc.setFontSize(15);
    doc.text("Diseases", 20, 20);
    doc.setFontSize(12);
    if(diseaseStrings.length < 8) {
      doc.text(`${diseaseStrings.join("")}`, 20, 35);
    } else {
      for (let i = 0; i < diseaseStrings.length; i++) {
        if (i%8 == 0) {
          doc.text(`${diseaseStrings.slice(i,i+8).join("")}`,20,35);
        } else if (i%8 == 1) {
          doc.addPage();
          page++;
          doc.setPage(page);
          doc.text(page.toString(),190,277);
          i+=6;
        }
      }
    }

    doc.addPage();
    page++;
    doc.setPage(page);
    doc.text(page.toString(),190,277);

    doc.setFontSize(15);
    doc.text("Medications", 20, 20);
    doc.setFontSize(12);
    if(medicationStrings.length < 8) {
      doc.text(`${medicationStrings.join("")}`, 20, 35);
    } else {
      for (let i = 0; i < medicationStrings.length; i++) {
        if (i%8 == 0) {
          doc.text(`${medicationStrings.slice(i,i+8).join("")}`,20,35);
        } else if (i%8 == 1) {
          doc.addPage();
          page++;
          doc.setPage(page);
          doc.text(page.toString(),190,277);
          i+=6;
        }
      }
    }

    doc.save("Report_Pet" + pet.id + "_" + timestamp + ".pdf");
  }

}

