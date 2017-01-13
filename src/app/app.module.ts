import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppRouterModule} from "./app.routes";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

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
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
