import { Component } from '@angular/core';
import { take } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent {
  filmInserito: any;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('',  Validators.required),
    description: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    cast: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    published: new FormControl(false),
  });

  constructor(
    private filmService: FilmService,
    private modalService: NgbModal,
    private router: Router,
    private http: HttpClient
    ){}

    onSubmit(): void {
      const film = this.form.value;
      this.filmService.insertFilm(film).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res);
          this.filmInserito = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
      // this.router.navigate(['new-recipe'])
    }

    onClose(){
      this.filmInserito = '';
      this.router.navigate(['films'])
    }

    onNewFilm(){
      this.filmInserito = '';
      this.form.patchValue({
        title : '',
        image : '',
        description : '',
        director : '',
        cast: '',
        date : '',
        published : false,
      })
    }

    open(content: any, titolo?: string){
      let title = titolo;
      this.modalService.open(content, {ariaLabelledBy: 'modale nuovo film', size: 'lg', centered: true}).result.then((res) => {
        this.onNewFilm();
      }).catch((res) => {
        this.onClose();
      })
    }

}
