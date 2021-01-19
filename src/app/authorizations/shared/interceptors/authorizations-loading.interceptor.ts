import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../services/loading.service';

@Injectable()

export class AuthorizationsLoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let action = null;
    
    if(environment.api.login === req.url){
      action ='login';
    }
    else if (environment.api.register === req.url){
      action ='register';
    }
    else{
      return next.handle(req);
    }
    this.loadingService[action] = true;
    console.log(this.loadingService[action] + "interceptor");
    return next.handle(req).pipe(
      finalize(
        () => {this.loadingService[action] = false}
      )
    );
  }
}
