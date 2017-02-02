import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {PetOwner} from "../entities/petOwner";
import {Doctor} from "../entities/doctor";
import {DoctorService} from "../services/doctor.service";
import {PetOwnerService} from "../services/petOwner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-pet',
  templateUrl: "./add-pet.component.html"
})
export class AddPetComponent {

  //fields from html
  public name: string;
  public type: string;
  public weight: number;
  public birthdate: string;
  public ownerId: string;
  public doctorId: string;

  constructor(private petService:PetService, private doctorService:DoctorService, private petOwnerService:PetOwnerService,
              private router:Router) {

    //preselects all doctors and all owners for drop down
    this.doctorService.findAll();
    this.petOwnerService.findAll();
  }

  public get allDoctors(): Array<Doctor>{
    return this.doctorService.allDoctors;
  }

  public get allPetOwners(): Array<PetOwner>{
    return this.petOwnerService.allPetOwners;
  }

  //adds a new pet
  add(): void{
    this.petService.add(this.name, this.type, this.weight, this.birthdate, this.ownerId, this.doctorId);
  }

  // simply redirects to the location given by the attribute, if no attribute is provided, the router
  // will forward to "home"
  goTo(location:String):void {
    this.router.navigate([location]);
  }
}
