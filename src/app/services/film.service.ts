import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../mocks/films.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilms():Observable<Film[]>{
    return of(FILMS);
  }

  getFilm(id:number):Observable<Film>{
    const film = FILMS.find(f => f._id === id);
    return of (film);
  }
}
