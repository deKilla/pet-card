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

  //fields from html
  public diseaseStart: string;
  public diseaseEnd: string;
  public diseaseId: string;
  //to store petId
  private petId: string;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              private router:Router) {
    //preselects all diseases for drop down
    this.diseaseService.findAll();
  }

  public get allDiseases(): Array<Disease>{
    return this.diseaseService.allDiseases;
  }

  //adds a new petDisease
  add(): void{
    this.petId = this.petService.pet.id.toString();
    this.petDiseaseService.add(this.diseaseStart, this.diseaseEnd, this.petId, this.diseaseId);

    /*
    this.petDiseaseService.findByPet(this.petId);
    this.diseaseService.findByPet(this.petId);
    */
  }

  // simply redirects to the location given by the attribute, if no attribute is provided, the router
  // will forward to "home"
  goTo(location:String):void {
    this.router.navigate([location]);
  }
}
