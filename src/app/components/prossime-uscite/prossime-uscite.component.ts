import { Component, Input } from '@angular/core';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-prossime-uscite',
  templateUrl: './prossime-uscite.component.html',
  styleUrls: ['./prossime-uscite.component.scss']
})
export class ProssimeUsciteComponent {
  @Input() films: Film[];
}
