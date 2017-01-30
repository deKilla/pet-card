
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETOWNERS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {PetOwner} from "../entities/petOwner";
import {OAuthService} from "angular-oauth2-oidc";


@Injectable()
export class PetOwnerService {

  //to store selected data temporary
  //for drop down owners
  allPetOwners: Array<PetOwner> = [];
  //for one owner
  petOwner : PetOwner;

  constructor(
    @Inject(BASE_URL_PETOWNERS) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a owner by id
  public findById(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets owner from db and stores the object
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (petOwner) => {this.petOwner = petOwner;},
        (err) => {console.log("no owner found");}
      )
  }

  //selects a owner who owns a pet
  public findByPet(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets owner from db and stores the object
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (owner) => {this.petOwner = owner;},
        (err) => {console.log("no owner by pet found");}
      );
  }


  //selects all doctors (for drop down)
  public findAll(): void {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets all owners from db and stores them
    this
      .http
      .get(url, headers)
      .map(resp => resp.json()["_embedded"]["petOwners"])
      .subscribe(
        (petOwners) => {
          this.allPetOwners = petOwners;
        },
        (err) => {
          console.error("no owners found");
        }
      );
  }
}
