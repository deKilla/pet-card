import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Pet} from "../entities/pet";
import {PetOwner} from "../entities/petOwner";
import {Doctor} from "../entities/doctor";
import {DoctorService} from "../services/doctor.service";
import {PetOwnerService} from "../services/petOwner.service";
import {Router} from "@angular/router";
import {PetInfoComponent} from "../pet-info/pet-info.component";

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

  constructor(private petService:PetService, private doctorService:DoctorService, private petOwnerService:PetOwnerService,
              private router:Router) {
    this.doctorService.findAll();
    this.petOwnerService.findAll();
  }

  public get allDoctors(): Array<Doctor>{
    return this.doctorService.allDoctors;
  }

  public get allPetOwners(): Array<PetOwner>{
    return this.petOwnerService.allPetOwners;
  }

  add(): void{
    this.petService.add(this.name, this.race, this.weight, this.birthdate, this.ownerId, this.doctorId);
  }

  goTo(location:String):void {
    this.router.navigate([location]);
  }
}
