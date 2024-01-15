import { Injectable } from '@angular/core';
import { CharactersService } from './characters.service';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private characterServices: CharactersService) {}

  getLoading(): Observable<boolean> {
    return this.characterServices.getAllCharacters().pipe(
      map(() => false),
      catchError(() => of(false)),
      startWith(true),
      finalize(() => false)
    );
  }
}
