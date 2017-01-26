import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

  public id: string;

  constructor(private petService:PetService, private router:Router) {
  }

  public get pets(): Array<Pet>{
    return this.petService.pets;
  }

  search (): void{
    this.petService.findById(this.id);
  }

  delete (): void{
    this.petService.delete(this.pets[0].id.toString());
    this.router.navigate(["home"]);
  }
}

