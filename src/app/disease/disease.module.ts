import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {DiseaseRouterModule} from "./disease.routes";
import {SharedModule} from "../shared/shared.module";
import {AddDiseaseComponent} from "./add-disease/add-disease.component";
import {EditDiseaseComponent} from "./edit-disease/edit-disease.component";

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DiseaseRouterModule
  ],

  declarations: [
    AddDiseaseComponent,
    EditDiseaseComponent
  ],
  providers: [
  ]
})

export class DiseaseModule {

}
