import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorizationsComponent } from './authorizations.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { RepeatedPasswordValidator } from './shared/validators/repeated-password.validator';
import { AuthorizationsErrorsInterceptor } from './shared/interceptors/authorizations-errors.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';





@NgModule({
  declarations: [
    AuthorizationsComponent,
    EntryComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    RepeatedPasswordValidator,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationsRoutingModule
    
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationsErrorsInterceptor, multi: true }
  ]
})
export class AuthorizationsModule { }
