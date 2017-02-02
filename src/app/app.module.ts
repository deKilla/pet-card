import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppRouterModule} from "./app.routes";
import {LoginComponent} from "./login/login.component";
import {AddPetComponent} from "./pet/add-pet/add-pet.component";
import {PetInfoComponent} from "./pet/pet-info/pet-info.component";
import {HomeComponent} from "./home/home.component";
import {BASE_URL_PETS, BASE_URL_DOCTORS, BASE_URL_PETOWNERS, BASE_URL_PETDISEASES, BASE_URL_PETMEDICATIONS, BASE_URL_MEDICATIONS, BASE_URL_DISEASES} from './app.tokens';
import {PetService} from "./services/pet.service";
import {PetOwnerService} from "./services/petOwner.service";
import {DoctorService} from "./services/doctor.service";
import {DiseaseService} from "./services/disease.service";
import {MedicationService} from "./services/medication.service";
import {PetDiseaseService} from "./services/petDisease.service";
import {PetMedicationService} from "./services/petMedication.service";
import {OAuthModule} from "angular-oauth2-oidc";
import {AddMedicationComponent} from "./medication/add-medication/add-medication.component";
import {AddDiseaseComponent} from "./disease/add-disease/add-disease.component";
import {SharedModule} from "./shared/shared.module";
import {EditDiseaseComponent} from "./disease/edit-disease/edit-disease.component";
import {AddOwnerComponent} from "./owner/add-owner/add-owner.component";
import {EditPetComponent} from "./pet/edit-pet/edit-pet.component";
import {EditProfileComponent} from "./profile/edit-profile/edit-profile.component";
import {PetRouterModule} from "./pet/pet.routes";
import {PetModule} from "./pet/pet.module";
import {DiseaseModule} from "./disease/disease.module";


const BASE_URL_PETS_FOR_PRODUCTION = "http://localhost:8081/api/pets";
const BASE_URL_DOCTORS_FOR_PRODUCTION = "http://localhost:8081/api/doctors";
const BASE_URL_PETOWNERS_FOR_PRODUCTION = "http://localhost:8081/api/petOwners";
const BASE_URL_PETDISEASES_FOR_PRODUCTION = "http://localhost:8081/api/petDiseases";
const BASE_URL_PETMEDICATIONS_FOR_PRODUCTION = "http://localhost:8081/api/petMedications";
const BASE_URL_MEDICATIONS_FOR_PRODUCTION = "http://localhost:8081/api/medications";
const BASE_URL_DISEASES_FOR_PRODUCTION = "http://localhost:8081/api/diseases";


@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    PetModule,
    DiseaseModule,
    OAuthModule.forRoot()
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddMedicationComponent,
    AddOwnerComponent,
    EditProfileComponent
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
