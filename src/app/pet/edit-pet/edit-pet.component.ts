import { Component } from '@angular/core';
import {PetService} from "../../services/pet.service";
import {Pet} from "../../entities/pet";
import {PetOwner} from "../../entities/petOwner";
import {Doctor} from "../../entities/doctor";
import {DoctorService} from "../../services/doctor.service";
import {PetOwnerService} from "../../services/petOwner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-pet',
  templateUrl: "./edit-pet.component.html"
})
export class EditPetComponent {

  //fields from html
  public ownerId: string;
  public doctorId: string;
  public pet: Pet;

  constructor(private petOwnerService:PetOwnerService, private petService:PetService, private doctorService:DoctorService,
              private router: Router) {

    this.pet = this.petService.pet;
    this.ownerId = this.petOwnerService.petOwner.id.toString();
    this.doctorId = this.doctorService.doctor.id.toString();

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

  //saves changes from pet
  save(): void{
    //gets promise, so that the new entry is added to the db befor redirecting and reloading the pet info
    let promise = this.petService.save(this.pet, this.doctorId, this.ownerId).toPromise();
    promise.then(() => {
      this.router.navigate(['petInfo', {id:this.pet.id}]);
    });
  }
}
