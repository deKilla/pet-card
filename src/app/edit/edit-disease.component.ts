import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Disease} from "../entities/disease";
import {DiseaseService} from "../services/disease.service";
import {PetService} from "../services/pet.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";
import {PetInfoComponent} from "../pet-info/pet-info.component";

@Component({
  selector: 'edit-disease',
  templateUrl: "./edit-disease.component.html"
})
export class EditDiseaseComponent {

  public diseaseStart: string;
  public diseaseEnd: string;
  public diseaseId: string;
  public petId: string;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              private router:Router) {


    console.log(this.diseaseId);
    this.petDiseaseService.findById2(this.diseaseId)
      .subscribe(
      (petDisease) => {petDisease = this.petDisease;}
    );



    /*
    this.petDiseaseService.findByPetId(this.petId)

      .subscribe(
        (petDisease) => {
          this.diseaseId = petDisease.diseaseId;
          this.diseaseStart = petDisease.diseaseStart;
          this.diseaseEnd = petDisease.diseaseEnd;
          this.petDisease = petDisease;
        });

     */

  }


  public get petDisease(): PetDisease{
    return this.petDiseaseService.petDisease;
  }

}
