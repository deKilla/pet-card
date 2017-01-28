import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AsyncPetValidator} from "./validators/async-pet.validator";
import {ZipPipe} from "./pipes/zip.pipe";


@NgModule ({
  imports: [
    CommonModule
  ],
  declarations: [
    AsyncPetValidator,
    ZipPipe

  ],
  exports: [
    AsyncPetValidator,
    ZipPipe
  ]
})

export class SharedModule {}
