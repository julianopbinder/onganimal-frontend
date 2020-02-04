import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem('auth-token');
        
        if(token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }
    
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log(event)
            }
            }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
            
            }
            })
        );
        }
}