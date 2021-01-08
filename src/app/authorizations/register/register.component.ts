import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RepeatedPasswordValidator } from '../shared/validators/repeated-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private repeatedPasswordValidator : RepeatedPasswordValidator
    ) { }

  ngOnInit() {

    // const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    //   const pswd = control.get('pswd');
    //   const checkPswd = control.get('checkPswd');
    //   return pswd && checkPswd && pswd.value === checkPswd.value ? { passwordValid: true } : null;
    // };

    this.registerForm = this.fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        pswd: ['', Validators.compose([Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*")])],
        checkPswd: ['', [Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*"), this.repeatedPasswordValidator]],
        username: ['', []]
      }
      //{ validators: passwordValidator }
    );
    //console.log(passwordValidator);
  }

  get email() { return this.registerForm.get('email'); }

  get pswd() { return this.registerForm.get('pswd'); }

  get checkPswd() { return this.registerForm.get('checkPswd'); }

  get username() { return this.registerForm.get('username'); }
    
  onSubmit(formData: any) {
    console.log(formData);
  }

  verif(pass){
    console.log(pass);
  }
  
}
