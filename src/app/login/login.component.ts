
import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {

  constructor(private oauthService: OAuthService, private router: Router) {

  }

  //login to OAtuhService
  login(): void {
    this.oauthService.initImplicitFlow();
  }

  //logout from OAuthService
  logout(): void {
    this.oauthService.logOut();
  }

  redirect(location): void {
    this.router.navigate([location]);
  }

  get givenName(): string {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    this.redirect("home");
    return claims.given_name;
  }

}
