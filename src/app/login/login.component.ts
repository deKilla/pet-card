
import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {

  constructor(private oauthService: OAuthService) {
  }

  login(): void {
    this.oauthService.initImplicitFlow();
  }

  get givenName(): string {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    return claims.given_name;
  }

}
