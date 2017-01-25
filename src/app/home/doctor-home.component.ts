import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  templateUrl: "./doctor-home.component.html"
})

export class DoctorHomeComponent {

  public id: string;

  constructor(private petService:PetService, private oauthService: OAuthService) {
  }


  public get pets(): Array<Pet>{
    return this.petService.pets;
  }

  search (): void{
    this.petService.findById(this.id);
  }

  get givenName(): string {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    return claims.given_name;
  }
}

