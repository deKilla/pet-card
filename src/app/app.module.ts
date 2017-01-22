import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppRouterModule} from "./app.routes";
import {PetInfoModule} from "./pet-info/pet-info.module";
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add/add-user.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserHomeComponent} from "./home/user-home.component";
import {DoctorHomeComponent} from "./home/doctor-home.component";
import {BASE_URL} from './app.tokens';


const BASE_URL_FOR_PRODUCTION = "localhost:8081/api/pets";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    PetInfoModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    DoctorHomeComponent,
    AddUserComponent,
    AddPetComponent,
    //PetInfoComponent,
    ProfileComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: BASE_URL_FOR_PRODUCTION}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
