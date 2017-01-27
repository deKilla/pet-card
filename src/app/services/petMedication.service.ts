
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_PETMEDICATIONS, BASE_URL_MEDICATIONS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {PetMedication} from "../entities/petMedication";
import {OAuthService} from "angular-oauth2-oidc";


@Injectable()
export class PetMedicationService {

  petMedications: Array<PetMedication> = [];

  constructor(
    @Inject(BASE_URL_PETMEDICATIONS) private baseUrl: string,
    @Inject(BASE_URL_PETS) private baseUrlPet: string,
    @Inject(BASE_URL_MEDICATIONS) private baseUrlMedication: string,
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

  public add(dose: string, issueDate: string, endDate: string, petId: string, medicationId: string): void {

    let url = this.baseUrl;
    let pet = this.baseUrlPet + "/" + petId;
    let medication = this.baseUrlMedication + "/" + medicationId;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    this
      .http
      .post(url, {dose, issueDate, endDate, pet:pet, medication:medication}, {headers})
      .map(resp => resp.json())
      .subscribe(
        (petMedication:PetMedication) => {
          console.debug("Ok", petMedication);
        },
        (err) => {
          console.error("Err")
        }
      );
  }
}
