import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_DOCTORS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Doctor} from "../entities/doctor";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class DoctorService {

  doctors: Array<Doctor> = [];
  doctor: Doctor;

  constructor(
    @Inject(BASE_URL_DOCTORS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  public findById(id: string): void {

    this.doctors = [];
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (doctor) => {this.doctors.push(doctor);}
      )
  }

  public findByPet(id: string): void {

    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (doctor) => {this.doctor = doctor;}
      );
  }


  public findAll(): void {

    let url = this.baseUrl;

    let search = new URLSearchParams();

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["doctors"])
      .subscribe(
        (doctors) => {
          this.doctors = doctors;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }


  public findByFirstName(firstName: string): Observable<Doctor> {

    let url = this.baseUrl + "/search/findByFirstName";

    let search = new URLSearchParams();
    search.set('firstName', firstName);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    return this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json());
  }


  public save(doctor:Doctor): void {

    let url = this.baseUrl + '/' + doctor.id;

    let search = new URLSearchParams();

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    this
      .http
      .put(url, doctor, {headers})
      .map(resp => resp.json())
      .subscribe(
        (doctor) => {
          console.log("ok");
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
