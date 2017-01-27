
import {Disease} from "../entities/disease";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_DISEASES} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Doctor} from "../entities/doctor";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class DiseaseService {

  diseases: Array<Disease> = [];

  constructor(
    @Inject(BASE_URL_DISEASES) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  public findById(id: string): void {

    this.diseases = [];
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
        (disease) => {this.diseases.push(disease);}
      )
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
      .map(resp => resp.json()["_embedded"]["diseases"])
      .subscribe(
        (diseases) => {
          this.diseases = diseases;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
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
      .map(resp => resp.json()["_embedded"]["diseases"])
      .subscribe(
        (diseases) => {
          this.diseases = diseases;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
