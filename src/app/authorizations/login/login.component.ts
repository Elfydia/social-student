import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      pswd: ['', Validators.compose([Validators.required, Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*")])]
    });
    
  }

  get email() { return this.loginForm.get('email'); }

  get pswd() { return this.loginForm.get('pswd'); }
  
  onSubmit(formData: any) {
    console.log(formData);
  }

 
}
