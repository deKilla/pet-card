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
  public birthdate: Date;
  public owner: PetOwner;
  public doctor: Doctor;

  constructor(private petService:PetService, private doctorService:DoctorService, private petOwnerService:PetOwnerService) {
  }

  public get doctors(): Array<Doctor>{
    return this.doctorService.doctors;
  }

  public get owners(): Array<PetOwner>{
    return this.petOwnerService.petOwners;
  }

  load():void{
    this.doctorService.findAll();
    this.petOwnerService.findAll();
  }

  add(): void{
    this.petService.add(this.name, this.race, this.weight, this.birthdate, this.owner, this.doctor);
  }
}
