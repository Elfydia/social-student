import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { environment } from 'src/environments/environment';
import { AuthorizationsHttpService } from '../shared/services/authorizations-http.service';
import { LoadingService } from '../shared/services/loading.service';
import { RegisterFormService } from '../shared/services/register-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public msgError: string;
  

  constructor(
    private authHttpService: AuthorizationsHttpService,
    private router : Router,
    private registerFormService: RegisterFormService,
    public loadingService: LoadingService
    ) {}

  ngOnInit() {
    this.loginForm = this.registerFormService.createLoginForm();
  }

  
  login() {
    
    this.authHttpService.login(this.loginForm).subscribe(
      () => this.router.navigate(['/contacts', 'dashboard']),
      () => console.log (this.msgError + "login() component")
  
    )
  }

 
}
