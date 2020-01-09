import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newHeaders = request.headers;
    newHeaders = newHeaders.append('Source', 'Web');
    const customReq = request.clone({headers: newHeaders});
    return next.handle(customReq);
  }
}
