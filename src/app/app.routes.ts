import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";
import {DoctorHomeComponent} from "./home/doctor-home.component";
import {AppComponent} from "./app.component";
import {AddMedicationComponent} from "./add/add-medication.component";
import {AddDiseaseComponent} from "./add/add-disease.component";
import {EditDiseaseComponent} from "./edit/edit-disease.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: DoctorHomeComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'addPet',
    component: AddPetComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'addMedication',
    component: AddMedicationComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'addDisease',
    component: AddDiseaseComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'editDisease',
    component: EditDiseaseComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'editDisease/:pd.id',
    component: EditDiseaseComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'petInfo',
    component: PetInfoComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'petInfo/:id/',
    component: PetInfoComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
