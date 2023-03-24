import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService){}

  ngOnInit(): void {
    this.filmService.getFilm().subscribe({
      next: (response) => {
        this.films = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
