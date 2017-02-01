import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../entities/doctor";
import {Router} from "@angular/router";
import {PetOwnerService} from "../services/petOwner.service";


@Component({
  selector: 'add-owner',
  templateUrl: "./add-owner.component.html"
})
export class AddOwnerComponent {

  //all form fields
  public firstName: string;
  public lastName: string;
  public email: string;
  public address: string;
  public phone: string;

  constructor(private ownerService: PetOwnerService, private oauthService: OAuthService, private router:Router) {
  }

  //adds a new petOwner
  add (): void {
    this.ownerService.add(this.firstName, this.lastName, this.address, this.phone, this.email);
  }

  goTo(location:String):void {
    this.router.navigate([location]);
  }

}
