
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_DOCTORS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Doctor} from "../entities/doctor";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class DoctorService {

  //to store selected data temporary
  //for drop down doctors
  allDoctors: Array<Doctor> = [];
  //for one doctor
  doctor: Doctor;

  constructor(
    @Inject(BASE_URL_DOCTORS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a doctor by id
  public findById(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets doctor from db and stores the object
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (doctor) => {this.doctor = doctor;},
        (err) => {console.log("no doctor found");}
      )
  }

  //selects a doctor who cares for a pet
  public findByPet(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    //gets doctor from db and stores the object
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (doctor) => {this.doctor = doctor;},
        (err) => {console.log("no doctor found by pet");}
      );
  }

  //selects all doctors (for drop down)
  public findAll(): void {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets all doctors from db and stores them
    this
      .http
      .get(url, headers)
      .map(resp => resp.json()["_embedded"]["doctors"])
      .subscribe(
        (doctors) => {
          this.allDoctors = doctors;
        },
        (err) => {
          console.error("no doctors found");
        }
      );
  }


  //selects doctor by firstname (in use because of predefined OAuth user)
  public findByFirstName(firstName: string): Observable<Doctor> {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByFirstName";

    let search = new URLSearchParams();
    search.set('firstName', firstName);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets a doctor by its firstname and returns it as observable
    return this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json());
  }


  //saves doctors parameter changes
  public save(doctor:Doctor): void {

    //url to object that has do be changed
    let url = this.baseUrl + '/' + doctor.id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    //puts doctor parameter changes to db
    this
      .http
      .put(url, doctor, {headers})
      .map(resp => resp.json())
      .subscribe(
        (doctor) => {
          console.log("updated doctor");
        },
        (err) => {
          console.error("couldn't update doctor");
        }
      );
  }
}
