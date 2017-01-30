import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DiseaseService} from "../services/disease.service";
import {PetService} from "../services/pet.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";

@Component({
  selector: 'edit-disease',
  templateUrl: "./edit-disease.component.html"
})
export class EditDiseaseComponent {

  public diseaseStart: string;
  public diseaseEnd: string;
  private disease: PetDisease;
  private diseaseId: string;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              route: ActivatedRoute) {

    route.queryParams.subscribe(
      (queryParam: any) => {this.diseaseId = queryParam['diseaseId'];}
    );

    this.petDiseaseService.findById(this.diseaseId)
      .subscribe(
        (petDisease) => {
          this.disease = petDisease;
          this.diseaseStart = petDisease.diseaseStart;
          this.diseaseEnd = petDisease.diseaseEnd;
        }
      )
  }

  save(): void{
    this.disease.diseaseEnd = this.diseaseEnd;
    this.disease.diseaseStart = this.diseaseStart;
    this.petDiseaseService.save(this.disease);
  }
}
