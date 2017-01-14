import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AddPetComponent} from "./add/addPet.component";
import {AddUserComponent} from "./add/addUser.component";
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
    path: 'addPet',
    component: AddPetComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
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
