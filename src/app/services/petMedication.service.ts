
import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_PETMEDICATIONS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Doctor} from "../entities/doctor";
import {PetMedication} from "../entities/petMedication";
import {OAuthService} from "angular-oauth2-oidc";


@Injectable()
export class PetMedicationService {

  petMedications: Array<PetMedication> = [];

  constructor(
    @Inject(BASE_URL_PETMEDICATIONS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  public findById(id: string): void {

    this.petMedications = [];
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
        (petMedication) => {this.petMedications.push(petMedication);}
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
      .map(resp => resp.json()["_embedded"]["petMedications"])
      .subscribe(
        (petMedications) => {
          this.petMedications = petMedications;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
