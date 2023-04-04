import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: Film[];
  name: string;
  email: string;

  constructor(
    private filmService: FilmService,
    private userService: UserService,
    private modalService: NgbModal
    ){}

  ngOnInit(): void {
    this.getFilm();
    this.getDatiUtenteModale();
  }

  getFilm(){
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

  getDatiUtenteModale(){
    this.userService.datiUtente.subscribe((res: any) => {
      // localStorage.setItem('name', res.name);
      // localStorage.setItem('email', res.email);
      this.name = res.name;
      this.email = res.email;
    });

    // if(localStorage.getItem('name')){
    //   this.name = localStorage.getItem('name');
    //   this.email = localStorage.getItem('email');
    // }
  }

  closeModal(){
    // localStorage.removeItem('name');
    // localStorage.removeItem('email');
    // localStorage.clear();

    this.name = '';
    this.email = '';
  }

  open(content: any, nome?: string){
    let name = nome;
    this.modalService.open(content, {ariaLabelledBy: 'modale registrazione', size: 'md', centered: true}).result.then((res) => {

      console.log('azione da eseguire' + name);
    }).catch((res) => {
      console.log('nessuna azione da eseguire');
    })
  }
}
