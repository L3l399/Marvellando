import { Component, Input } from '@angular/core';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.scss']
})
export class FilmsCardComponent {
  @Input() films: Film[]
}
