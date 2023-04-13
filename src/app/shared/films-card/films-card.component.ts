import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { delay, pipe, take } from 'rxjs';
import { Film } from 'src/app/models/film.model';
import { FilmService } from './../../services/film.service';
import { UserService } from 'src/app/services/user.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.scss']
})
export class FilmsCardComponent implements OnInit {
  @Input() pag: string;

  faTrash = faTrash;
  films: Film[]
  filmTotali: number;
  page = 1;
  filmPerPagina = 6;
  ruolo: any;
  ricercato: any;

  loading = true;


  constructor(
    private filmService: FilmService,
    private userService: UserService,
    private router: Router,
    ){}

    ngOnDestroy(): void {
      console.log('utente uscito dal componente')
    }

    ngOnInit(): void {
      this.prendiFilm();
      if(JSON.parse(localStorage.getItem('user')) != null) {
        this.userService.userRole.subscribe({
          next: (res) => {
            this.ruolo = res;
          },
          error: (err) => {
            console.log(err);
          }
        })
      }

    }

    prendiFilm(){
      this.filmService.getFilms()
      .pipe(
        take(1)
        )
        .subscribe({
          next: (response) => {

            if(this.pag != 'ricerca'){
              this.ultimiFilm();
            }else if (this.pag === 'ricerca'){
             this.loading = false;
              this.ricercaFilm();
            }else{
              this.films = response;
              this.filmTotali = response.length;
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
             this.loading = false;

          },
          error: (error) => {
            console.log(error);
          }
        })
      }

      ricercaFilm(){
        this.filmService.testoCercato.subscribe({
          next: (res) => {
            this.ricercato = res;
            if(this.ricercato) {
              this.filmService.findFilms(this.ricercato).subscribe({
                next: (res) => {
                  this
                  this.films = res;
                  console.log(res);
                  this.filmTotali = res.length;
                  this.loading = false;

                },
                error: (err) => {
                  console.log(err);
                }
              })
            }
          },
          error: (err) => {
            console.error(err);
          }
        });
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



