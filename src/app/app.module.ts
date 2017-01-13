import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppRouterModule} from "./app.routes";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AddUserComponent} from "./add/add-user.component";
import {AddPetComponent} from "./add/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {ProfileComponent} from "./profile/profile.component";

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
    HomeComponent,
    AddUserComponent,
    AddPetComponent,
    PetInfoComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
