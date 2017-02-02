import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Medication} from "../entities/medication";
import {MedicationService} from "../services/medication.service";
import {PetService} from "../services/pet.service";
import {PetMedicationService} from "../services/petMedication.service";

@Component({
  selector: 'add-medication',
  templateUrl: "./add-medication.component.html"
})
export class AddMedicationComponent {

  //fields from html
  public dose: string;
  public issueDate: string;
  public endDate: string;
  public medicationId: string;
  //to store petId
  private petId: string;

  constructor(private petMedicationService:PetMedicationService, private petService:PetService,
              private medicationService:MedicationService, private router:Router) {
    //preselects all medications for drop down
    this.medicationService.findAll();
  }

  public get allMedications(): Array<Medication>{
    return this.medicationService.allMedications;
  }

  //adds a new petMedication
  add(): void{
    this.petId = this.petService.pet.id.toString();

    //gets promise, so that the new entry is added to the db befor redirecting and reloading the pet info
    let promise = this.petMedicationService.add(this.dose, this.issueDate, this.endDate, this.petId, this.medicationId).toPromise();
    promise.then(() => {
      this.router.navigate(['petInfo', {id:this.petId}]);
    });
  }
}
