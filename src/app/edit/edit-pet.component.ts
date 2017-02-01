import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DiseaseService} from "../services/disease.service";
import {PetService} from "../services/pet.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";
import {PetInfoComponent} from "../pet-info/pet-info.component";
import {Pet} from "../entities/pet";

@Component({
  selector: 'edit-disease',
  templateUrl: "./edit-disease.component.html"
})
export class EditDiseaseComponent {

  //fields from html
  public name: string;
  public weight: number;
  public ownerId: string;
  public doctorId: string;
  private petId: number;
  private pet: Pet;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              route: ActivatedRoute, private router: Router, private petInfoComponent:PetInfoComponent) {

    this.pet = this.petService.pet;
    this.name = this.pet.name;
    this.weight = this.pet.weight;
  }

  //saves changes from petDisease
  save(): void{

    this.pet.name = this.name;
    this.pet.weight = this.weight;
    this.pet.id = this.petService.pet.id;

    this.petService.save(this.pet, this.doctorId, this.ownerId);
  }
}
