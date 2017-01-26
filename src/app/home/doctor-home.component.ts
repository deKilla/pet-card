import {Pet} from "../entities/pet";
import { Component } from '@angular/core';
import {PetService} from "../services/pet.service";
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./doctor-home.component.html"
})

export class DoctorHomeComponent {

  public id: string;

  constructor(private petService:PetService, private oauthService: OAuthService, private router:Router) {
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
    this.router.navigate(["home"]);
    return claims.given_name;
  }
}

