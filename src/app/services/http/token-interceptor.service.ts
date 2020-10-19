import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }

  // intercept(req, next) {
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: 'Basic ' + btoa('ni-client:ni-client-secret') // temporary auth
  //     }
  //   });

  //   return next.handle(tokenizedReq);
  // }
}
