import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppRouterModule} from "./app.routes";
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add/add-user.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserHomeComponent} from "./home/user-home.component";
import {DoctorHomeComponent} from "./home/doctor-home.component";
import {BASE_URL_PETS, BASE_URL_DOCTORS, BASE_URL_PETOWNERS, BASE_URL_PETDISEASES, BASE_URL_PETMEDICATIONS, BASE_URL_MEDICATIONS, BASE_URL_DISEASES} from './app.tokens';


const BASE_URL_PETS_FOR_PRODUCTION = "localhost:8080/api/pets";
const BASE_URL_DOCTORS_FOR_PRODUCTION = "localhost:8080/api/doctors";
const BASE_URL_PETOWNERS_FOR_PRODUCTION = "localhost:8080/api/petOwners";
const BASE_URL_PETDISEASES_FOR_PRODUCTION = "localhost:8080/api/petDiseases";
const BASE_URL_PETMEDICATIONS_FOR_PRODUCTION = "localhost:8080/api/petMedications";
const BASE_URL_MEDICATIONS_FOR_PRODUCTION = "localhost:8080/api/medications";
const BASE_URL_DISEASES_FOR_PRODUCTION = "localhost:8080/api/diseases";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    DoctorHomeComponent,
    AddUserComponent,
    AddPetComponent,
    PetInfoComponent,
    ProfileComponent
  ],

  providers: [
    { provide: BASE_URL_PETS, useValue: BASE_URL_PETS_FOR_PRODUCTION},
    { provide: BASE_URL_DOCTORS, useValue: BASE_URL_DOCTORS_FOR_PRODUCTION},
    { provide: BASE_URL_PETOWNERS, useValue: BASE_URL_PETOWNERS_FOR_PRODUCTION},
    { provide: BASE_URL_PETDISEASES, useValue: BASE_URL_PETDISEASES_FOR_PRODUCTION},
    { provide: BASE_URL_PETMEDICATIONS, useValue: BASE_URL_PETMEDICATIONS_FOR_PRODUCTION},
    { provide: BASE_URL_MEDICATIONS, useValue: BASE_URL_MEDICATIONS_FOR_PRODUCTION},
    { provide: BASE_URL_DISEASES, useValue: BASE_URL_DISEASES_FOR_PRODUCTION},
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule {

}
