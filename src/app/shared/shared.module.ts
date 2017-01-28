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

import {ZipPipe} from "./pipes/zip.pipe";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZipPipe,
  ],
  exports: [
    ZipPipe,
  ]

})
export class SharedModule {

}
