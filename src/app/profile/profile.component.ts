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

  public firstName: string;
  public lastName: string;
  public email: string;
  public address: string;
  public phone: string;
  public officeHours: string;
  private doctorId: number;
  private doctor: Doctor;


  constructor(private doctorService: DoctorService, private oauthService: OAuthService, private router:Router) {

    let claims = this.oauthService.getIdentityClaims();
    let doctorsName = claims.given_name;

    this.doctorService.findByFirstName(doctorsName)
      .subscribe(
        (doctor) => {
          this.firstName = doctor.firstName;
          this.lastName = doctor.lastName;
          this.address = doctor.address;
          this.email = doctor.email;
          this.phone = doctor.phone;
          this.officeHours = doctor.officeHours;
          this.doctorId = doctor.id;
          this.doctor = doctor;
        });
  }

  save (): void {
    this.doctor.id = this.doctorId;
    this.doctor.firstName = this.firstName;
    this.doctor.lastName = this.lastName;
    this.doctor.address = this.address;
    this.doctor.email = this.email;
    this.doctor.phone = this.phone;
    this.doctor.officeHours = this.officeHours;
    this.doctorService.save(this.doctor);
  }

}
