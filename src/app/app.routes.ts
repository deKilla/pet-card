import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";
import {DoctorHomeComponent} from "./home/doctor-home.component";

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
    component: DoctorHomeComponent
  },
  {
    path: 'addPet',
    component: AddPetComponent
  },
  {
    path: 'petInfo',
    component: PetInfoComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

export const AppRouterModule
  = RouterModule.forRoot(APP_ROUTES);
