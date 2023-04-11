import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../mocks/films.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiBaseUrl = '/api/films';

  constructor(private http: HttpClient) { }

  getFilms():Observable<Film[]>{
    // return of(FILMS);
    return this.http.get<Film[]>(`${this.apiBaseUrl}/`);
  }

  getFilm(id: string):Observable<Film>{
    // const film = FILMS.find(f => f._id === id);
    // return of (film);
    return this.http.get<Film>(`${this.apiBaseUrl}/${id}`);
  }

  insertFilm(film: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, film)
  }
}
