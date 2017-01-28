import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AsyncPetValidator} from "./validators/async-pet.validator";


@NgModule ({
  imports: [
    CommonModule
  ],
  declarations: [
    AsyncPetValidator

  ],
  exports: [
    AsyncPetValidator
  ]
})

export class SharedModule {}
