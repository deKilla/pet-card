
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_PETMEDICATIONS, BASE_URL_MEDICATIONS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {PetMedication} from "../entities/petMedication";
import {OAuthService} from "angular-oauth2-oidc";
import {Observable} from "rxjs";


@Injectable()
export class PetMedicationService {

  //to store selected data temporary
  //for petMedication by pet
  petMedications: Array<PetMedication> = [];

  constructor(
    @Inject(BASE_URL_PETMEDICATIONS) private baseUrl: string,
    @Inject(BASE_URL_PETS) private baseUrlPet: string,
    @Inject(BASE_URL_MEDICATIONS) private baseUrlMedication: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a petMedication by id
  public findById(id: string): Observable<PetMedication> {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets petDisease from db and returns it
    return this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json());
  }

  //selects petMedications by pet
  public findByPet(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets petMedications from db and stores them
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["petMedications"])
      .subscribe(
        (petMedications) => {
          this.petMedications = petMedications;
        },
        (err) => {
          console.error("no petMedications found");
        }
      );
  }

  //adds a new petMedication
  public add(dose: string, issueDate: string, endDate: string, petId: string, medicationId: string): Observable<PetMedication> {

    let url = this.baseUrl;
    //urls to pet and medication of new petMedication (foreign keys in db)
    let pet = this.baseUrlPet + "/" + petId;
    let medication = this.baseUrlMedication + "/" + medicationId;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //adds a new petMedication with given parameters to the db
    return this
      .http
      .post(url, {dose, issueDate, endDate, pet:pet, medication:medication}, {headers})
      .map(resp => resp.json());
  }
}
