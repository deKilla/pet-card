import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Disease} from "../entities/disease";
import {DiseaseService} from "../services/disease.service";
import {PetService} from "../services/pet.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetInfoComponent} from "../pet-info/pet-info.component";

@Component({
  selector: 'add-disease',
  templateUrl: "./add-disease.component.html"
})
export class AddDiseaseComponent {

  //fields from html
  public diseaseStart: string;
  public diseaseEnd: string;
  public diseaseId: string;
  //to store petId
  private petId: string;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              private router:Router, private petInfoComponent:PetInfoComponent) {
    //preselects all diseases for drop down
    this.diseaseService.findAll();
  }

  public get allDiseases(): Array<Disease>{
    return this.diseaseService.allDiseases;
  }

  //adds a new petDisease
  add(): void{
    this.petId = this.petService.pet.id.toString();
    let promise = this.petDiseaseService.add(this.diseaseStart, this.diseaseEnd, this.petId, this.diseaseId).toPromise();

    promise.then(() => {
      this.router.navigate(['petInfo', {id:this.petId}]);
    });
  }
}
