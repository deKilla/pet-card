import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AsyncPetValidator} from "./validators/async-pet.validator";
import {ZipPipe} from "./pipes/zip.pipe";
import {CompareDatesValidator} from "./validators/compareDates.validator";


@NgModule ({
  imports: [
    CommonModule
  ],
  declarations: [
    AsyncPetValidator,
    CompareDatesValidator,
    ZipPipe

  ],
  exports: [
    AsyncPetValidator,
    CompareDatesValidator,
    ZipPipe
  ]
})

export class SharedModule {}
