import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";

@Component({
  templateUrl: "./doctor-home.component.html"
})

export class DoctorHomeComponent {

  public id: string;

  constructor(private petService:PetService) {
  }

  public get pets(): Array<Pet>{
    return this.petService.pets;
  }

  search (): void{
    this.petService.findById(this.id);
  }
}

