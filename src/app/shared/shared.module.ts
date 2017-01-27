
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
