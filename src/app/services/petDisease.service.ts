
import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Doctor} from "../entities/doctor";
import {PetDisease} from "../entities/petDisease";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class PetDiseaseService {

  petDiseases: Array<PetDisease> = [];

  constructor(
    @Inject(BASE_URL_PETS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  public findById(id: string): void {

    this.petDiseases = [];
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
        (petDisease) => {this.petDiseases.push(petDisease);}
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
      .map(resp => resp.json()["_embedded"]["petDiseases"])
      .subscribe(
        (petDiseases) => {
          this.petDiseases = petDiseases;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
