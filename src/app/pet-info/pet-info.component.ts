import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {PetOwnerService} from "../services/petOwner.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";
import {PetOwner} from "../entities/petOwner";
import {DiseaseService} from "../services/disease.service";
import {Disease} from "../entities/disease";

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

  public id: string;

  constructor(private petService:PetService, private ownerService:PetOwnerService, private petDiseaseService:PetDiseaseService,
              private diseasesService:DiseaseService, private router:Router) {
  }

  public get pet(): Pet{
    return this.petService.pet;
  }

  public get petDiseases(): Array<PetDisease>{
    return this.petDiseaseService.petDiseases;
  }

  public get myOwner(): PetOwner{
    return this.ownerService.myOwner;
  }

  public get diseases(): Array<Disease>{
    return this.diseasesService.diseases;
  }

  search (): void{
    this.petService.findById(this.id);
    this.ownerService.findByPet(this.id);

    //PetDiseases and Diseases
    this.petDiseaseService.findByPet(this.id);
    this.diseasesService.findByPet(this.id);

  }

  delete (): void{
    this.petService.delete(this.pet.id.toString());

    //löschen der gespeicherten Inhalte zum Pet
    //Pet, Owner, PetDiseases, Disease, PetMedication, Medication

    this.router.navigate(["home"]);
  }


}

