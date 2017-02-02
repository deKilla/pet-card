
import {Disease} from "../entities/disease";
import {Injectable, Inject} from "@angular/core";
import {BASE_URL_DISEASES} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class DiseaseService {

  //to store selected data temporary
  //for drop down diseases
  allDiseases: Array<Disease> = [];
  //for diseases by pet
  diseases: Array<Disease> = [];
  //for one disease
  disease: Disease;

  constructor(
    @Inject(BASE_URL_DISEASES) private baseUrl: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a disease by id
  public findById(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findById";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets disease from db and stores it
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(
        (disease) => {this.disease = disease;},
        (err) => {console.log("no disease found")}
      )
  }


  //selects all diseases (for drop down)
  public findAll(): void {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets all diseases from db and stores it
    this
      .http
      .get(url, headers)
      .map(resp => resp.json()["_embedded"]["diseases"])
      .subscribe(
        (diseases) => {
          this.allDiseases = diseases;
        },
        (err) => {
          console.error("no diseases found");
        }
      );
  }

  //selects all diseases by pet
  public findByPet(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets diseases by pet from db and stores it
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["diseases"])
      .subscribe(
        (diseases) => {
          this.diseases = diseases;
        },
        (err) => {
          console.error("no diseases by pet found");
        }
      );
  }
}
