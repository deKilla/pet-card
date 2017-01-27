
import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {

  constructor(private oauthService: OAuthService, private router: Router) {
    if(this.oauthService.getIdentityClaims()){
      this.router.navigate(["home"]);
    }
  }

  login(): void {
    this.oauthService.initImplicitFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

}
