import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {PetOwnerService} from "../services/petOwner.service";

@Component({
  selector: 'pet-info',
  templateUrl: "./pet-info.component.html"
})

export class PetInfoComponent {

  public id: string;

  constructor(private petService:PetService, private ownerService:PetOwnerService, private router:Router) {
  }

  public get pet(): Pet{
    return this.petService.pet;
  }

  search (): void{
    this.petService.findById(this.id);
  }

  delete (): void{
    this.petService.delete(this.pet.id.toString());
    this.router.navigate(["home"]);
  }
}

