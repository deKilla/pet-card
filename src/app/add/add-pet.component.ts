import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Pet} from "../entities/pet";
import {PetOwner} from "../entities/petOwner";
import {Doctor} from "../entities/doctor";
import {DoctorService} from "../services/doctor.service";
import {PetOwnerService} from "../services/petOwner.service";

@Component({
  selector: 'add-pet',
  templateUrl: "./add-pet.component.html"
})
export class AddPetComponent {

  public name: string;
  public race: string;
  public weight: number;
  public birthdate: string;
  public ownerId: string;
  public doctorId: string;

  constructor(private petService:PetService, private doctorService:DoctorService, private petOwnerService:PetOwnerService) {
    this.doctorService.findAll();
    this.petOwnerService.findAll();
  }

  public get doctors(): Array<Doctor>{
    return this.doctorService.doctors;
  }

  public get owners(): Array<PetOwner>{
    return this.petOwnerService.petOwners;
  }

  add(): void{
    //console.log(this.birthdate);
    this.petService.add(this.name, this.race, this.weight, this.birthdate, this.ownerId, this.doctorId);
  }
}
