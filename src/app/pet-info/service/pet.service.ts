import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import {Pet} from "../../entities/pet";


@Injectable()
export class PetService {

  pets: Array<Pet> = [];

  constructor(@Inject(BASE_URL) private baseUrl: string, private http: Http) {}

  public showResp(id: string) {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url+"/findById",{headers,search})
      //.map(resp => resp.json())
      .subscribe(resp => console.log(resp));
  }

  public findById(id: string): Observable<Pet> {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url+"/findById",{headers,search})
      .map(resp => resp.json());
  }

  public save(pet: Pet): Observable<Pet> {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .post(url, pet, { headers })
      .map(resp => resp.json());
  }

  public find(name: string) {

    let url = this.baseUrl + "";

    let search = new URLSearchParams();
    search.set('name', name);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json())
      .subscribe(
        (pets) => {
          this.pets = pets;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

  }

}
