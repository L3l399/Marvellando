import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService){}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe({
      next: (response) => {
        this.films = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
