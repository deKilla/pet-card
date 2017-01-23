
import {Pet} from "../entities/pet";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {

  pets: Array<Pet> = [];

  constructor(
    @Inject(BASE_URL_PETS) private baseUrl: string,
    private http: Http,
  ) {
  }

  public findById(id: string): void {

    this.pets = [];
    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["pets"])
      .subscribe(
        (petOjects) => {
          for (let p of petOjects) {
            if(p.id.toString() == id) {
              this.pets.push(p);
            }
          }
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }

  public add(name: string, race: string, weight: number, birthdate: Date): void {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let dummyPet = {
      "name" : name,
      "type" : race,
      "weight" : weight,
      "birt_hdate" : birthdate
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
}
