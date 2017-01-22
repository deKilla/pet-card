import {Component} from "@angular/core";
import {Pet} from "../entities/pet";
import {Doctor} from "../entities/doctor";
import {PetOwner} from "../entities/petOwner";
import {PetService} from "./service/pet.service";

@Component({
  selector: 'pet-info',
  templateUrl: './pet-info.component.html',
  //styleUrls: ['./pet-info.component.css'],
  providers:[ ]
})

export class PetInfoComponent {

  public id: string;
  public birthDate: string;
  public name: string;
  public type: string;
  public weight: string;
  public doctor: Doctor;
  public petOwner: PetOwner;
  public selectedPet: Pet;

  constructor(private petService: PetService) {
  }

  public get pets(): Array<Pet> {
    return this.petService.pets;
  }

  search(form): void {
    //if(!form.valid && form.dirty == true) { return; }
    this.petService.findById(this.id);
  }

  resplog(form): void {
    this.petService.showResp(this.id);
  }

  select(pet: Pet): void {
    this.selectedPet = pet;
  }

}
