import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Disease} from "../entities/disease";
import {DiseaseService} from "../services/disease.service";
import {PetService} from "../services/pet.service";
import {PetDiseaseService} from "../services/petDisease.service";

@Component({
  selector: 'add-disease',
  templateUrl: "./add-disease.component.html"
})
export class AddDiseaseComponent {

  public diseaseStart: string;
  public diseaseEnd: string;
  public diseaseId: string;
  public petId: string;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              private router:Router) {
    this.diseaseService.findAll();
  }

  public get diseases(): Array<Disease>{
    return this.diseaseService.diseases;
  }

  add(): void{
    this.petId = this.petService.pet.id.toString();
    this.petDiseaseService.add(this.diseaseStart, this.diseaseEnd, this.petId, this.diseaseId);
    this.router.navigate(["petInfo"]);
  }
}
