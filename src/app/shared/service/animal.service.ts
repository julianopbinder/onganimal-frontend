import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pageable } from '../model/pageable.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AnimalService {
    
    constructor(private http: HttpClient) { }

    findAll(pageable: Pageable) {
        return this.http.get(`${environment.apiUrl}/api/animals?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort}`);
      }
    
}