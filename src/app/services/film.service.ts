import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../mocks/films.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  testoCercato = new ReplaySubject;
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

  findFilms(text: string): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/search/${text}`);
  }
}
