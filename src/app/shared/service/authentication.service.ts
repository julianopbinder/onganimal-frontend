import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login.model';

@Injectable()
export class AuthenticationService {
    
    constructor(private http: HttpClient) { }

    auhtenticate(login: Login) {
        return this.http.post(`${environment.apiUrl}/authenticate`, login);
    }
    
}