import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {PetRouterModule} from "./pet.routes";
import {SharedModule} from "../shared/shared.module";
import {AddPetComponent} from "./add-pet/add-pet.component";
import {EditPetComponent} from "./edit-pet/edit-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PetRouterModule
  ],

  declarations: [
    AddPetComponent,
    EditPetComponent,
    PetInfoComponent
  ],
  providers: [
  ]
})

export class PetModule{

}
