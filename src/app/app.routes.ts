import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AddUserComponent} from "./add/add-user.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";

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
    component: HomeComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
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
