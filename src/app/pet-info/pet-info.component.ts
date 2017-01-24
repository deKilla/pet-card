import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

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

