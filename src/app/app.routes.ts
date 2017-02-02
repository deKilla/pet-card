import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {AddMedicationComponent} from "./medication/add-medication/add-medication.component";
import {AddDiseaseComponent} from "./disease/add-disease/add-disease.component";
import {EditDiseaseComponent} from "./disease/edit-disease/edit-disease.component";
import {AddOwnerComponent} from "./owner/add-owner/add-owner.component";
import {EditProfileComponent} from "./profile/edit-profile/edit-profile.component";

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
    component: HomeComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'addMedication',
    component: AddMedicationComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'profile',
    component: EditProfileComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'addOwner',
    component: AddOwnerComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
