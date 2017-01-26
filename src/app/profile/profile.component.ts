import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../entities/doctor";

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
  private doctorId: string;


  constructor(private doctorService: DoctorService, private oauthService: OAuthService) {

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
          this.doctorId = doctor.id.toString();
        });
  }

/*
  public get doctors(): Array<Doctor>{
    return this.doctorService.doctors;
  }

  public get myDoctor(): Doctor{
    return this.doctorService.myDoctor;
  }
  */

/*

  firstName: string;
  showDetails: string;

  constructor(private doctorService: DoctorService, private oauthService: OAuthService) {

    let claims = this.oauthService.getIdentityClaims();

    doctorService.doctors[0].params.subscribe(
      p => {
        this.firstName = p['firstName'];
        this.showDetails = p['showDetails'];
        this.load(this.firstName);
      }
    )
  }

  doctor: Doctor;
  message: string;

  load(id: string): void {
    this
      .doctorService
      .findByFirstName(claims.given_name)
      .subscribe(
        doctor => {
          this.doctor = doctor;
          this.message = "";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )
  }

*/

}
