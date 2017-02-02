
import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS} from "@angular/forms";
import {PetService} from "../../services/pet.service";
import {Observable} from "rxjs";

@Directive({
  selector: 'input[asyncId]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => AsyncPetValidator ), multi:true}]
})
export class AsyncPetValidator {

  constructor(private petService:PetService) {

  }

  validate(c: AbstractControl): Promise<any> {

    return new Promise((resolve) => {

      this.petService.findById(c.value, true)
        .subscribe(
          (object) => {return resolve({});},
          (err) => {return resolve({asyncId:true});}
      );
    })
  }
}
