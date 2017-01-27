
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_MEDICATIONS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Medication} from "../entities/medication";
import {OAuthService} from "angular-oauth2-oidc";


@Injectable()
export class MedicationService {

  medications: Array<Medication> = [];

  constructor(
    @Inject(BASE_URL_MEDICATIONS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  public findById(id: string): void {

    this.medications = [];
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
        (medication) => {this.medications.push(medication);}
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
      .map(resp => resp.json()["_embedded"]["medications"])
      .subscribe(
        (medications) => {
          this.medications = medications;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
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
      .map(resp => resp.json()["_embedded"]["medications"])
      .subscribe(
        (medications) => {
          this.medications = medications;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
