import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/models/film.model';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faScroll}  from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit  {

  film: Film;
  faClapperboard = faClapperboard;
  faMasksTheater = faMasksTheater;
  faCalendarDay = faCalendarDay;
  faScroll = faScroll;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
    ){}

    ngOnInit(): void {
      this.onGetFilm();
    }

    onGetFilm():void{
      const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));// mi arriva una stringa e la trasformo in numero
      // const id = Number(this.activatedRoute.snapshot.paramMap.get('id')); esempio se ho piú elemnti

      this.filmService.getFilm(id).subscribe({
        next: (res) =>{
          this.film = res;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
