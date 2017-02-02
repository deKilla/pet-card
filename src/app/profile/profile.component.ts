import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../entities/doctor";
import {Router} from "@angular/router";

@Component({
  selector: 'profile',
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {

  //all form fields
  public firstName: string;
  public lastName: string;
  public email: string;
  public address: string;
  public phone: string;
  public officeHours: string;

  //for use of storing a doctor object and a doctor id not used in html
  private doctor: Doctor;


  constructor(private doctorService: DoctorService, private oauthService: OAuthService, private router:Router) {

    //selects de logged in doctors name
    let claims = this.oauthService.getIdentityClaims();
    let doctorsName = claims.given_name;

    //selects a doctor via its logged in name
    this.doctorService.findByFirstName(doctorsName)
      .subscribe(
        (doctor) => {
          //extra fields used, because of unknown problem (edit-pet.component is able to directly use the object)
          // same problem as with edit-disease
          this.firstName = doctor.firstName;
          this.lastName = doctor.lastName;
          this.address = doctor.address;
          this.email = doctor.email;
          this.phone = doctor.phone;
          this.officeHours = doctor.officeHours;
          this.doctor = doctor;
        });
  }

  //do save changes in doctors profile
  save (): void {
    //needed to store  changes into object (because of unknown problem; same as edit-disease)
    this.doctor.firstName = this.firstName;
    this.doctor.lastName = this.lastName;
    this.doctor.address = this.address;
    this.doctor.email = this.email;
    this.doctor.phone = this.phone;
    this.doctor.officeHours = this.officeHours;

    this.doctorService.save(this.doctor);
  }

  goTo(location:String):void {
    this.router.navigate([location]);
  }

}
