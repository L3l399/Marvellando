import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { delay, pipe, take } from 'rxjs';
import { Film } from 'src/app/models/film.model';
import { FilmService } from './../../services/film.service';


@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.scss']
})
export class FilmsCardComponent implements OnInit {
  @Input() pag: string;

  films: Film[]
  filmTotali: number;
  page = 1;
  filmPerPagina = 6;


  constructor(
    private filmService: FilmService,
    ){}

    ngOnDestroy(): void {
      console.log('utente uscito dal componente')
    }

    ngOnInit(): void {
      this.prendiFilm();

    }

    prendiFilm(){
      this.filmService.getFilms()
      .pipe(
        take(1)
        )
        .subscribe({
          next: (response) => {
            this.films = response;
            this.filmTotali = response.length;
            if(this.pag){
              this.ultimiFilm();
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }

      ultimiFilm(){
        this.filmService.getFilms().subscribe({
          next: (response) => {
            this.films = response;
            this.films = this.films.sort((a, b) => {
              const dateA = new Date(a.date.split('/').reverse().join('-'));
              const dateB = new Date(b.date.split('/').reverse().join('-'));
              return dateB.getTime() - dateA.getTime();
            }).slice(0, 3);
          },
          error: (error) => {
            console.log(error);
          }
        })
      }

      paginate(event){
        event.page = event.page + 1;
        this.page = event.page;
      }

      // ngOnDestroy(): void {
      //   console.log('utente uscito dal componente')
      // }

      // ngOnInit(): void {
      //   this.prendiRicette();
      // }

      // inviaTitolo(titolo: string){
      //   this.messaggio.emit(titolo);
      // }



    }



    