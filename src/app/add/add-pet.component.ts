import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Pet} from "../entities/pet";

@Component({
  templateUrl: "./add-pet.component.html"
})
export class AddPetComponent {

  public name: string;
  public race: string;
  public weight: number;
  public birthdate: Date;

  constructor(private petService:PetService) {
  }

  add(): void{
    this.petService.add(this.name, this.race, this.weight, this.birthdate);
  }
}
