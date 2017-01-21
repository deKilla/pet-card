
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
//import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {PetInfoComponent} from "./pet-info.component";
import {PetService} from "./service/pet.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule//,
    //SharedModule
  ],
  declarations: [
    PetInfoComponent
  ],
  providers: [
    PetService
  ]
})
export class PetInfoModule {

}
