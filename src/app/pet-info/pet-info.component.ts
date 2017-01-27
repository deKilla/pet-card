import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
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

    this.route = this.activeRoute.params.subscribe(params =>{ this.id = params["id"]});
    this.routeId = this.route._subscriptions[0].subject._value.id;

    if(this.routeId){
      this.id = this.routeId
      this.search();
    }
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


}

