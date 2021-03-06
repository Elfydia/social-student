import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

import { environment } from 'src/environments/environment';
import { tap, catchError, finalize } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'any'
})

export class AuthorizationsHttpService {

  constructor(private http: HttpClient, 
    private userService: UserService) { 
  }

  register(form : FormGroup) :Observable<User>{
    return this.http.post<User>(environment.api.register,
      {
        username: form.get("username").value,
        email: form.get("email").value,
        password: form.get("pswd").value
      }
    ).pipe(
      tap(
        () => {console.log("OK")}
      )
    )
  }

  login(form: FormGroup)  :Observable<User>{
    
    return this.http.post<User>(environment.api.login,
      {
        email: form.get("email").value,
        password: form.get("pswd").value
      })
      .pipe(
        tap(
          (user :User) =>{
            this.userService.set(user);
          }
        )
      )
  }
}
