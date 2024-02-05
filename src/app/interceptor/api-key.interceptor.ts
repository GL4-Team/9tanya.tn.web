import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { MovieApi } from '../models/movie.api';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiKeyReq = req.clone({
      params: req.params.set('api_key', MovieApi.API_KEY)
    });

    return next.handle(apiKeyReq);
  }
}
