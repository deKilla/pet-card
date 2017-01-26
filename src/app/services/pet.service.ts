
import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Doctor} from "../entities/doctor";
import {PetOwner} from "../entities/petOwner";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class PetService {

  pets: Array<Pet> = [];

  constructor(
    @Inject(BASE_URL_PETS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  public findById(id: string): void {

    this.pets = [];
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
        (pet) => {this.pets.push(pet);}
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
      .map(resp => resp.json()["_embedded"]["pets"])
      .subscribe(
        (pets) => {
          this.pets = pets;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }


  public add(name: string, race: string, weight: number, birthdate: string, ownerId: string, doctorId: string): void {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    let dummyPet = {
      "name" : name,
      "type" : race,
      "weight" : weight,
      "birth_date" : birthdate,
      "doctor_id" : doctorId,
      "pet_owner_id" : ownerId
    };

    this
      .http
      .post(url, dummyPet, {headers})
      .map(resp => resp.json())
      .subscribe(
        (pet:Pet) => {
          console.debug("Ok")
        },
        (err) => {
          console.error("Err")
        }
    );
  }

  public delete(id: string): void {

    let url = this.baseUrl + "/" + id;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();

    this
      .http
      .delete(url, headers)
      .map(resp => resp.json())
      .subscribe(
        (pets) => {
          console.log("deleted pet " + id);
        },
        (err) => {
          console.error('Fehler beim Deleten', err);
        }
      );
  }
}
