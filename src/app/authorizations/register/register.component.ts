
import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationsHttpService } from '../shared/services/authorizations-http.service';
import { RegisterFormService } from '../shared/services/register-form.service';


class PackageBag {
  package: string = null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup
  public msgError: string;
  
  constructor(
    private authHttpService: AuthorizationsHttpService,
    private routerService: Router,
    private registerFormService: RegisterFormService
    ) {
       
     }

  ngOnInit() :void {
    this.registerForm = this.registerFormService.createRegisterForm();
  }

  register() :void {
    this.authHttpService.register(this.registerForm)
    .subscribe(
      ()=> 
        this.routerService.navigate(["/auth", "login"])
    )
  }
  
}
