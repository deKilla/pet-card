
import {Directive, forwardRef, Attribute} from "@angular/core";
import {Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: 'input[validateIsAfter]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => CompareDatesValidator), multi:true}]
})
export class CompareDatesValidator implements Validator {

  constructor(@Attribute('validateIsAfter') private validateIsAfter: string) {

  }
  validate(c:AbstractControl): any {

    let self = c.value;
    let compare = c.root.get(this.validateIsAfter).value;

    if (compare && self < compare) return {validateIsAfter: false};
    return null;
  }
}
