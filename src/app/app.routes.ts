import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";
import {DoctorHomeComponent} from "./home/doctor-home.component";
import {AppComponent} from "./app.component";

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
    path: 'doctorHome',
    component: DoctorHomeComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'addPet',
    component: AddPetComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'petInfo',
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
