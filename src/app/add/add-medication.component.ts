import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Medication} from "../entities/medication";
import {MedicationService} from "../services/medication.service";
import {PetService} from "../services/pet.service";
import {PetMedicationService} from "../services/petMedication.service";
import {PetInfoComponent} from "../pet-info/pet-info.component";

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

  constructor(private petMedicationService:PetMedicationService, private petService:PetService, private medicationService:MedicationService,
              private router:Router, private petInfoComponent:PetInfoComponent) {
    //preselects all medications for drop down
    this.medicationService.findAll();
  }

  public get allMedications(): Array<Medication>{
    return this.medicationService.allMedications;
  }

  //adds a new petMedication
  add(): void{
    this.petId = this.petService.pet.id.toString();
    this.petMedicationService.add(this.dose, this.issueDate, this.endDate, this.petId, this.medicationId);

    /* app module und constructor
    this.petInfoComponent.constructor;
    this.petInfoComponent.search();
    */
  }

  // simply redirects to the location given by the attribute, if no attribute is provided, the router
  // will forward to "home"
  goTo(location:String):void {
    this.router.navigate([location], this.petId);
  }
}
