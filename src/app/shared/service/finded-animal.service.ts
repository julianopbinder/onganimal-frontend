import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FindedAnimal } from '../model/find-animal.model';

@Injectable()
export class FindedAnimalService {
    
    constructor(private http: HttpClient) { }

    report(findedAnimal: FindedAnimal, animalID: number) {
        return this.http.put(`${environment.apiUrl}/api/finded-animals/animal/${animalID}`, findedAnimal);
      }
    
    getAll(animalId: number) {
      
      return this.http.get(`${environment.apiUrl}/api/finded-animals/animal/${animalId}`);
    }
    
}