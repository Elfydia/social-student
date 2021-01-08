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


@NgModule({
  declarations: [
    AuthorizationsComponent,
    EntryComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    RepeatedPasswordValidator
  ],
  imports: [
    CommonModule,
    AuthorizationsRoutingModule,
    SharedModule
  ]
})
export class AuthorizationsModule { }
