/*
import { Component } from '@angular/core';

@Component({
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {
}
*/





import { Component } from '@angular/core';
import {PetService} from "./service/pet.service";
import {Pet} from "../entities/pet";

@Component({
  selector: "pet-info",
  templateUrl: "./pet-info.component.html"
})
export class PetInfoComponent {


  public id: string;

  constructor(private petService: PetService) {
  }

  public get pets(): Array<Pet> {
    return this.petService.pets;
  }

  search():void {
    this.petService.findById(this.id);
  }


}


