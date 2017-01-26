import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_DISEASES, BASE_URL_PETDISEASES} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {PetDisease} from "../entities/petDisease";
import {OAuthService} from "angular-oauth2-oidc";
import {Pet} from "../entities/pet";

@Injectable()
export class PetDiseaseService {

  petDiseases: Array<PetDisease> = [];

  constructor(
    @Inject(BASE_URL_PETDISEASES) private baseUrl: string,
    @Inject(BASE_URL_PETS) private baseUrlPets: string,
    @Inject(BASE_URL_DISEASES) private baseUrlDiseases: string,
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

  public add(diseaseStart: string, diseaseEnd: string, petId: string, diseaseId: string): void {

    let url = this.baseUrl;
    let pet = this.baseUrlPets + "/" + petId;
    let disease = this.baseUrlDiseases + "/" + diseaseId;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    this
      .http
      .post(url, {diseaseStart, diseaseEnd, pet, disease}, {headers})
      .map(resp => resp.json())
      .subscribe(
        (petDisease:PetDisease) => {
          console.debug("Ok")
        },
        (err) => {
          console.error("Err")
        }
      );
  }
}
