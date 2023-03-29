import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: Film[];

  constructor(private filmService: FilmService){}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe({
      next: (response) => {
        this.films = response;
        this.films = this.films.sort((a, b) => {
          const dateA = new Date(a.date.split('/').reverse().join('-'));
          const dateB = new Date(b.date.split('/').reverse().join('-'));
          return dateB.getTime() - dateA.getTime();
        }).slice(0, 4);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
