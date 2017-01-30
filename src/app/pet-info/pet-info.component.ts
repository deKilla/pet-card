import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Router, ActivatedRoute} from "@angular/router";
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
import {map} from "rxjs/operator/map";

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

  public id: string;
  public route: any;
  public routeId: string;

  constructor(private router:Router, private activeRoute: ActivatedRoute,
              private petService:PetService, private ownerService:PetOwnerService, private doctorService:DoctorService,
              private diseasesService:DiseaseService, private petDiseaseService:PetDiseaseService,
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

  search (): void{
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

  delete (): void{
    this.petService.delete(this.pet.id.toString());

    //löschen der gespeicherten Inhalte zum Pet
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

  pdf():void{

    let doc = new jsPDF();
    doc.setFontSize(12);

    let date = new Date();
    let dateString = date.toDateString();
    let timestamp = Date.now();

    let pet = this.petService.pet
    let petOwner = this.ownerService.petOwner
    let doctor = this.doctorService.doctor

    let diseases = new ZipPipe().transform(this.diseasesService.diseases,this.petDiseaseService.petDiseases);
    let medications = new ZipPipe().transform(this.medicationService.medications,this.petMedicationService.petMedications);

    let strDiseases = "";
    let strMedications = "";

    for(let disease of diseases){
      strDiseases += `Name: ${disease.name}
Description: ${disease.description}
Begin: ${disease.diseaseStart}     End: ${disease.diseaseEnd}\n\n`;
    }

    for(let medication of medications){
      strMedications += `Name: ${medication.name}
Description: ${medication.description}
Dose: ${medication.dose}
Begin: ${medication.issueDate}     End: ${medication.endDate}\n\n`;
    }

    //text coords erst von links dann von oben
    doc.setFontSize(10);
    doc.text(dateString,170,20);

    doc.setFontSize(20);
    let title = `Report for ${pet.name}`;
    doc.text(title,20,20);

    doc.setFontSize(15);
    doc.text("Pet", 20, 35);
    doc.setFontSize(12);
    let petBlock = `ID: ${pet.id}
Name: ${pet.name}
Type: ${pet.type}
Weight:  ${pet.weight}
Birthdate:  ${pet.birth_date}`;
    doc.text(petBlock,20,45);

    doc.setFontSize(15);
    doc.text("Owner", 65, 35);
    doc.setFontSize(12);
    let ownerBlock = `Name: ${petOwner.firstName} ${petOwner.lastName}
Address: ${petOwner.address}
Phone: ${petOwner.phone}
E-Mail: ${petOwner.email}`;
    doc.text(ownerBlock,65,45);

    doc.setFontSize(15);
    doc.text("Doctor", 140, 35);
    doc.setFontSize(12);
    let doctorBlock = `Name:  Dr. ${doctor.firstName} ${doctor.lastName}
Email: ${doctor.email}
Phone: ${doctor.phone}
Address: ${doctor.address}
Office hours: ${doctor.officeHours}`;
    doc.text(doctorBlock,140,45);

    doc.addPage();
    doc.setPage(2);

    doc.setFontSize(15);
    doc.text("Diseases", 20, 20);
    doc.setFontSize(12);
    doc.text(`${strDiseases}`,20,35);

    doc.addPage();
    doc.setPage(3);

    doc.setFontSize(15);
    doc.text("Medications", 20, 20);
    doc.setFontSize(12);
    doc.text(`${strMedications}`,20,35);

    doc.save("Report_Pet" + pet.id + "_" + timestamp + ".pdf");
  }

}

