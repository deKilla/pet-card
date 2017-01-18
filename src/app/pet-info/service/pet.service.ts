
import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Pet} from "../../entities/pet";
import {BASE_URL} from "../../app.tokens";


@Injectable
export class PetService {


  pets: Array<Pet> = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http ) {

  }

  public findById(id: string): Observable<Pet> {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());

  }
}



