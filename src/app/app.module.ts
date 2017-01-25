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
import {PetService} from "./services/pet.service";
import {PetOwnerService} from "./services/petOwner.service";
import {DoctorService} from "./services/doctor.service";
import {DiseaseService} from "./services/disease.service";
import {MedicationService} from "./services/medication.service";
import {PetDiseaseService} from "./services/petDisease.service";
import {PetMedicationService} from "./services/petMedication.service";
import {OAuthModule} from "angular-oauth2-oidc";


const BASE_URL_PETS_FOR_PRODUCTION = "http://localhost:8081/api/pets";
const BASE_URL_DOCTORS_FOR_PRODUCTION = "http://localhost:8081/api/doctors";
const BASE_URL_PETOWNERS_FOR_PRODUCTION = "http://localhost:8081/api/petOwners";
const BASE_URL_PETDISEASES_FOR_PRODUCTION = "http://localhost:8081/api/petDiseases";
const BASE_URL_PETMEDICATIONS_FOR_PRODUCTION = "http://localhost:8081/api/petMedications";
const BASE_URL_MEDICATIONS_FOR_PRODUCTION = "http://localhost:8081/api/medications";
const BASE_URL_DISEASES_FOR_PRODUCTION = "http://localhost:8081/api/diseases";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    OAuthModule.forRoot()
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
    PetService,
    PetOwnerService,
    DoctorService,
    DiseaseService,
    MedicationService,
    PetDiseaseService,
    PetMedicationService,
    AppComponent
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule {

}
