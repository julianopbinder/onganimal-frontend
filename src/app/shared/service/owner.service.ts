import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Owner } from '../model/owner.model';
import { Animal } from '../model/animal.model';
import { Pageable } from '../model/pageable.model';

@Injectable()
export class OwnerService {
    
    constructor(private http: HttpClient) { }

    register(owner: Owner) {
        return this.http.post(`${environment.apiUrl}/register`, owner);
    }

    getAnimal(animalId: number) {
        return this.http.get(`${environment.apiUrl}/owners/animal/${animalId}`);
    }

    getAnimals(pageable: Pageable) {
        return this.http.get(`${environment.apiUrl}/owners/animals?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort}`);
    }

    saveAnimal(animal: Animal) {
        return this.http.post(`${environment.apiUrl}/owners/animal`, animal);
    }

    updateAnimal(animal: Animal) {
        return this.http.put(`${environment.apiUrl}/owners/animal/${animal.id}`, animal);
    }

    deleteAnimal(animalId: number) {
        return this.http.delete(`${environment.apiUrl}/owners/animal/${animalId}`);
    }
    
}