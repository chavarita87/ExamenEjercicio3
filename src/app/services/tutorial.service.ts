import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/tutorial.model';
import { Services } from 'src/app/models/querys.service.marvel.model';

const baseUrl = 'http://localhost:8080/api/wrapper/';
const baseUrl2 = 'http://localhost:8080/api/getAllQueryService';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${baseUrl}ejercicio1`);
  }

  get(id: any): Observable<Character> {
    return this.http.get<Character>(`${baseUrl}ejercicio2?id=${id}`);
  }

  findByTitle(title: any): Observable<Character[]> {
    return this.http.get<Character[]>(`${baseUrl}ejercicio2?id=${title}`);
  }
  
  findAllServices(): Observable<Character[]> {
    return this.http.get<Services[]>(baseUrl2);
  }
}
