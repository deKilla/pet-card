import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_DOCTORS, BASE_URL_PETOWNERS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class PetService {

  //to store selected data temporary
  //for one pet
  pet: Pet;

  constructor(
    @Inject(BASE_URL_PETS) private baseUrl: string,
    @Inject(BASE_URL_PETOWNERS) private baseUrlOwner: string,
    @Inject(BASE_URL_DOCTORS) private baseUrlDoctor: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a pet by id
  public findById(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets pet from db and stores the object
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (pet) => {this.pet = pet;}
      )
  }

  //adds a new pet
  public add(name: string, race: string, weight: number, birthdate: string, ownerId: string, doctorId: string): void {

    let url = this.baseUrl;
    //urls to doctor and owner of new pet (foreign keys in db)
    let doctor = this.baseUrlDoctor + "/" + doctorId;
    let owner = this.baseUrlOwner + "/" + ownerId;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //adds a new pet with given parameters to the db
    this
      .http
      .post(url, {name, type:race, weight, birthDate:birthdate, petOwner:owner, doctor}, {headers})
      .map(resp => resp.json())
      .subscribe(
        (pet) => {
          console.debug("added new pet")
        },
        (err) => {
          console.error("couldn't add new pet")
        }
      );
  }

  //deletes a pet
  public delete(id: string): void {

    //url to pet to be deleted
    let url = this.baseUrl + "/" + id;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    //deletes pet from db
    this
      .http
      .delete(url, headers)
      .map(resp => resp.json())
      .subscribe(
        (pets) => {
          console.log("deleted pet");
        },
        (err) => {
          console.error("couldn't delete pet");
        }
      );
  }
}
