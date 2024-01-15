import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersResponse, Character } from '../models/characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(
      'https://narutodb.xyz/api/akatsuki?page=1&limit=50'
    );
  }

  getCharacterById(id: number | any): Observable<Character> {
    return this.http.get<Character>('https://narutodb.xyz/api/akatsuki/' + id);
  }
}
