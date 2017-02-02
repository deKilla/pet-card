import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DiseaseService} from "../services/disease.service";
import {PetService} from "../services/pet.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";
import {Pet} from "../entities/pet";

@Component({
  selector: 'edit-disease',
  templateUrl: "./edit-disease.component.html"
})
export class EditDiseaseComponent {

  //fields from html
  public diseaseStart: string;
  public diseaseEnd: string;
  //for storing petDisease object
  private disease: PetDisease;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService,
              route: ActivatedRoute, private router: Router) {

    //reads and stores diseaseId from url param
    let diseaseId;
    route.queryParams.subscribe(
      (queryParam: any) => {diseaseId = queryParam['diseaseId'];}
    );

    //selects petDisease by id
    this.petDiseaseService.findById(diseaseId)
      .subscribe(
        (petDisease) => {
          //extra fields used, because of unknown problem (edit-pet.component is able to directly use the object)
          this.diseaseStart = petDisease.diseaseStart;
          this.diseaseEnd = petDisease.diseaseEnd;
          this.disease = petDisease;
        }
      )
  }

  //saves changes from petDisease
  save(): void{

    //needed to store  changes into object (because of unknown problem)
    this.disease.diseaseEnd = this.diseaseEnd;
    this.disease.diseaseStart = this.diseaseEnd;

    //gets promise, so that the new entry is added to the db befor redirecting and reloading the pet info
    let promise = this.petDiseaseService.save(this.disease).toPromise();
    promise.then(() => {
      this.router.navigate(['petInfo', {id:this.petService.pet.id.toString()}]);
    });
  }
}
