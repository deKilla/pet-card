import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
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

  //fields from html
  public diseaseStart: string;
  public diseaseEnd: string;
  //for storing queryParams and petDisease object
  private disease: PetDisease;
  private diseaseId: string;

  constructor(private petDiseaseService:PetDiseaseService, private petService:PetService, private diseaseService:DiseaseService,
              route: ActivatedRoute, private router: Router, private petInfoComponent:PetInfoComponent) {

    //reads and stores diseaseId from url param
    route.queryParams.subscribe(
      (queryParam: any) => {this.diseaseId = queryParam['diseaseId'];}
    );

    //selects petDisease by id
    this.petDiseaseService.findById(this.diseaseId)
      .subscribe(
        (petDisease) => {
          this.disease = petDisease;
          this.diseaseStart = petDisease.diseaseStart;
          this.diseaseEnd = petDisease.diseaseEnd;
        }
      )
  }

  //saves changes from petDisease
  save(): void{
    this.disease.diseaseEnd = this.diseaseEnd;
    this.disease.diseaseStart = this.diseaseStart;

    //gets promise, so that the new entry is added to the db befor redirecting and reloading the pet info
    let promise = this.petDiseaseService.save(this.disease).toPromise();
    promise.then(() => {
      this.router.navigate(['petInfo', {id:this.petService.pet.id.toString()}]);
    });
  }
}
