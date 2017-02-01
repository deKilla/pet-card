import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Pet} from "../entities/pet";
import {PetOwner} from "../entities/petOwner";
import {Doctor} from "../entities/doctor";
import {DoctorService} from "../services/doctor.service";
import {PetOwnerService} from "../services/petOwner.service";
import {Router, ActivatedRoute} from "@angular/router";
import {PetInfoComponent} from "../pet-info/pet-info.component";

@Component({
  selector: 'edit-pet',
  templateUrl: "./edit-pet.component.html"
})
export class EditPetComponent {

  //fields from html
  public name: string;
  public weight: number;
  public ownerId: string;
  public doctorId: string;

  private petId: number;
  private type: string;
  private birthdate: string;
  private testPet: Pet;

  constructor(private petOwnerService:PetOwnerService, private petService:PetService, private doctorService:DoctorService,
              private router: Router) {

    this.testPet = this.petService.pet;

    this.name = this.petService.pet.name;
    this.weight = this.petService.pet.weight;
    this.petId = this.petService.pet.id;
    this.type = this.petService.pet.type;
    this.birthdate = this.petService.pet.birthDate;

    this.petOwnerService.findByPet(this.petId.toString());
    this.doctorService.findByPet(this.petId.toString());
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
    this.testPet.name = this.name;
    this.testPet.weight = this.weight;
    this.testPet.id = this.petId;
    this.testPet.birthDate = this.birthdate;
    this.testPet.type = this.type;

    //gets promise, so that the new entry is added to the db befor redirecting and reloading the pet info
    let promise = this.petService.save(this.testPet, this.doctorId, this.ownerId).toPromise();
    promise.then(() => {
      this.router.navigate(['petInfo', {id:this.petId}]);
    });
  }
}
