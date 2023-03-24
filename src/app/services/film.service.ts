import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../mocks/films.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilm():Observable<Film[]>{
    return of(FILMS);
  }
}
