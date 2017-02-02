import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  templateUrl: "./doctor-home.component.html"
})

export class DoctorHomeComponent {

  public id: string;

  constructor(private oauthService: OAuthService) {
  }

  //gets the name of the logged in person
  get givenName(): string {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    return claims.given_name;
  }
}

