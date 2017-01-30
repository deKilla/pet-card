
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_MEDICATIONS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Medication} from "../entities/medication";
import {OAuthService} from "angular-oauth2-oidc";


@Injectable()
export class MedicationService {

  //to store selected data temporary
  //for medications by pet
  medications: Array<Medication> = [];
  //for drop down medications
  allMedications: Array<Medication> = [];
  //for one medication
  medication: Medication;

  constructor(
    @Inject(BASE_URL_MEDICATIONS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a medication by id
  public findById(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets a medication from db and stores it
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (medication) => {this.medication = medication;}
      )
  }

  //selects a medication by pet
  public findByPet(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets medications by pet from db and stores them
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["medications"])
      .subscribe(
        (medications) => {
          this.medications = medications;
        },
        (err) => {
          console.error("no medications by pet found");
        }
      );
  }


  //selects all medications
  public findAll(): void {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets all medications from db and stores them
    this
      .http
      .get(url, headers)
      .map(resp => resp.json()["_embedded"]["medications"])
      .subscribe(
        (medications) => {
          this.allMedications = medications;
        },
        (err) => {
          console.error("no medications found");
        }
      );
  }
}
