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

  public dose: string;
  public issueDate: string;
  public endDate: string;
  public medicationId: string;
  public petId: string;

  constructor(private petMedicationService:PetMedicationService, private petService:PetService, private medicationService:MedicationService,
              private router:Router) {
    this.medicationService.findAll();
  }

  public get medications(): Array<Medication>{
    return this.medicationService.medications;
  }

  add(): void{
    this.petId = this.petService.pet.id.toString();
    this.petMedicationService.add(this.dose, this.issueDate, this.endDate, this.petId, this.medicationId);
    this.router.navigate(["petInfo"]);
  }
}
