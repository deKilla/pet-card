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

  constructor(private oauthService: OAuthService, private router:Router) {
  }

  //gets the name of the logged in person
  get givenName(): string {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    return claims.given_name;
  }
}

