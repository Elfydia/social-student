import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthorizationsErrorsInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let action = null;
    
    if(environment.api.login === req.url){
      action ='login';
      return next.handle(req).pipe(
        catchError(
          (error :HttpErrorResponse)=>{
            let msgError: string = "Network Problem";
            if(error.status === 404){
              msgError = error.error.error
            }
            if(error.status === 400){
              msgError = error.error.error
            }
            if(error.status === 500){
              msgError = "unvailable Service"
            }
            throw msgError;
          }
        )
      )
    }
    else if (environment.api.register === req.url){
      action ='register';
      return next.handle(req).pipe(
        catchError(
          (error :HttpErrorResponse)=>{
            let msgError: string = 'Network Problem';
            if(error.status === 409){
              msgError = error.error.error
            }
            if(error.status === 400){
              msgError = error.error.error
            }
            if(error.status === 500){
              msgError = "unvailable Service"
            }
            throw msgError;
          }
        )
      )
    }
    else{
      return next.handle(req);
    }
  }
}
