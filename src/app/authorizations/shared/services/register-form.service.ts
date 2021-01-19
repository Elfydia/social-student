import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepeatedPasswordValidator } from '../validators/repeated-password.validator';

@Injectable({
  providedIn: 'root'
})

export class RegisterFormService {

  public form : FormGroup;

  constructor(private fb: FormBuilder,
    private repeatedPasswordValidator : RepeatedPasswordValidator) { 
  }

  createRegisterForm():FormGroup
  {
    // const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    //   const pswd = control.get('pswd');
    //   const checkPswd = control.get('checkPswd');
    //   return pswd && checkPswd && pswd.value === checkPswd.value ? { passwordValid: true } : null;
    // };

    this.form = this.fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        pswd: ['', Validators.compose([Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*")])],
        checkPswd: ['', [Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*"), this.repeatedPasswordValidator]],
        username: ['', [Validators.compose([Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*")])]]
      }
    );
    return this.form;
  }

  createLoginForm():FormGroup{
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      pswd: ['', Validators.compose([Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*")])]
    });
    return this.form
  }

  get email() { return this.form.get('email'); }

  get pswd() { return this.form.get('pswd'); }

  get checkPswd() { return this.form.get('checkPswd'); }

  get username() { return this.form.get('username'); }
}
