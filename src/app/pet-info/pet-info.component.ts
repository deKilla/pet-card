import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {PetOwnerService} from "../services/petOwner.service";
import {PetDiseaseService} from "../services/petDisease.service";
import {PetDisease} from "../entities/petDisease";
import {PetOwner} from "../entities/petOwner";

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

  public id: string;
  public route: any;
  public routeId: string;

  constructor(private petService:PetService, private ownerService:PetOwnerService, private petDiseaseService:PetDiseaseService,
              private router:Router, private activeRoute: ActivatedRoute) {

    this.route = this.activeRoute.params.subscribe(params =>{ this.id = params["id"]});
    this.routeId = this.route._subscriptions[0].subject._value.id;

    if(this.routeId){
      this.id = this.routeId
      this.search();
    }

  }

  public get pet(): Pet{
    return this.petService.pet;
  }

  public get petDiseases(): Array<PetDisease>{
    return this.petDiseaseService.petDiseases;
  }

  public get myOwner(): PetOwner{
    return this.ownerService.myOwner;
  }

  search (): void{
    this.petService.findById(this.id);
    this.ownerService.findByPet(this.id);


    //PetDiseases and Diseases
    this.petDiseaseService.findByPet(this.id);

  }

  delete (): void{
    this.petService.delete(this.pet.id.toString());
    this.router.navigate(["home"]);
  }
}

