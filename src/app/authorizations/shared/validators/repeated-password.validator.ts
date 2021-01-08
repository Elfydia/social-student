import { Directive, Injectable } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn:'root'
})
@Directive({
  selector: '[appRepeatedPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RepeatedPasswordValidator}]
})
export class RepeatedPasswordValidator implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.dirty){
      return null;
    }
    console.log("validate RepeatedPasswordValidator")
    return {repeatedPassword : true};
  };

}
