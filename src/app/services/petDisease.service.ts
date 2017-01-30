import {Injectable, Inject} from "@angular/core";
import {BASE_URL_PETS, BASE_URL_DISEASES, BASE_URL_PETDISEASES} from "../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {PetDisease} from "../entities/petDisease";
import {OAuthService} from "angular-oauth2-oidc";
import {Observable} from "rxjs";

@Injectable()
export class PetDiseaseService {

  //to store selected data temporary
  //for petDiseases by pet
  petDiseases: Array<PetDisease> = [];

  constructor(
    @Inject(BASE_URL_PETDISEASES) private baseUrl: string,
    @Inject(BASE_URL_PETS) private baseUrlPets: string,
    @Inject(BASE_URL_DISEASES) private baseUrlDiseases: string,
    private http: Http,
    private oauthService: OAuthService
  ) {
  }

  //selects a petDisease by id
  public findById(id: string): Observable<PetDisease> {
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

  //selects petDiseases by pet
  public findByPet(id: string): void {
    //uses Query from Backend
    let url = this.baseUrl + "/search/findByPet";

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //gets petDiseases from db and stores them
    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json()["_embedded"]["petDiseases"])
      .subscribe(
        (petDiseases) => {
          this.petDiseases = petDiseases;
        },
        (err) => {
          console.error("no petDiseases found");
        }
      );
  }

  //adds a new petDisease
  public add(diseaseStart: string, diseaseEnd: string, petId: string, diseaseId: string): void {

    let url = this.baseUrl;
    //urls to pet and disease of new petDisease (foreign keys in db)
    let pet = this.baseUrlPets + "/" + petId;
    let disease = this.baseUrlDiseases + "/" + diseaseId;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

    //adds a new petDisease with given parameters to the db
    this
      .http
      .post(url, {diseaseStart, diseaseEnd, pet, disease}, {headers})
      .map(resp => resp.json())
      .subscribe(
        (petDisease) => {
          console.debug("added petDisease")
        },
        (err) => {
          console.error("couldn't add petDisease")
        }
      );
  }

  //saves petDisease parameter changes
  public save(petDisease:PetDisease): void {

    //url to object that has do be changed
    let url = this.baseUrl + '/' + petDisease.id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    //puts petDisease parameter changes to db
    this
      .http
      .put(url, petDisease, {headers})
      .map(resp => resp.json())
      .subscribe(
        (petDisease) => {
          console.log("updated petDisease");
        },
        (err) => {
          console.error("couldn't update petDisese");
        }
      );
  }
}
