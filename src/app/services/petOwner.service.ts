
import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETOWNERS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {petOwner} from "../entities/petOwner";

@Injectable()
export class PetOwnerService {

  petOwners: Array<petOwner> = [];

  constructor(
    @Inject(BASE_URL_PETOWNERS) private baseUrl: string,
    private http: Http,
  ) {
  }

  public findById(id: string): void {

    this.petOwners = [];
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (petOwner) => {this.petOwners.push(petOwner);}
      )
  }


  public findAll(): void {

    let url = this.baseUrl;

    let search = new URLSearchParams();

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["petOwners"])
      .subscribe(
        (petOwners) => {
          this.petOwners = petOwners;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }
}
