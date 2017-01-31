
import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS} from "@angular/forms";

@Directive({
  selector: 'input[asyncId]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => AsyncPetValidator ), multi:true}]
})
export class AsyncPetValidator {

  validate(c: AbstractControl): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {

        // Only inputs greater than Zero are allowed
        if (c.value > 0 ) {
          resolve({});
        }
        else {
          resolve({asyncId: true});
        }

      }, 100)
    })

  }

}
