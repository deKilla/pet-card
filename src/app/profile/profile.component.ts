import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../entities/doctor";

@Component({
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {


  public firstName: string;
  public lastName: string;
  public email: string;
  public address: string;
  public phone: string;
  public officeHours: string;


  constructor(private doctorService: DoctorService, private oauthService: OAuthService) {

    let claims = this.oauthService.getIdentityClaims();

    this.doctorService.findByFirstName(claims.given_name);

    console.log("givenName:",claims.given_name);
    console.log("vorher");
    console.log("Doctor1:",doctorService.doctors); // Fehler bei den Attributen
    console.log("nachher");


/*
    let dummyDoctor = this.doctorService.doctors;

    this.firstName = dummyDoctor.firstName;
    this.lastName = dummyDoctor.lastName;
*/
  }

  public get doctors(): Array<Doctor>{
    return this.doctorService.doctors;
  }

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
