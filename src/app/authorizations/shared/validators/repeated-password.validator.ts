import { Directive, Injectable } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn:'root'
})
@Directive({
  selector: '[appRepeatedPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RepeatedPasswordValidator}]
})
export class RepeatedPasswordValidator implements Validator {

  private subscription: Subscription;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.dirty){
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
      return null;
    }
    if (!this.subscription) {
      this.subscription = control.root.get('pswd')
      .valueChanges.subscribe( () => control.updateValueAndValidity())
    }
    
    return control.root.get('pswd').value !== control.value ? {repeatedPassword : true} : null;
  };

}
