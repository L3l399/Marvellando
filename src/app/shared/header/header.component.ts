import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faMagnifyingGlass = faMagnifyingGlass;

  user: any;
  ricerca: string = "";

  constructor(
    private router: Router,
    public authService: AuthService,
    private filmService: FilmService,
    ){}

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  risultato() {
    const currentRoute = this.router.url;
    if(currentRoute !== `/films/search/${this.ricerca}`) {
      this.filmService.testoCercato.next(this.ricerca);
      this.router.navigate([`/films/search/${this.ricerca}`]);
      this.ricerca = '';
    } else {
      this.filmService.testoCercato.next(this.ricerca);
      this.router.navigate([`/films/search/${this.ricerca}`]);
      this.ricerca = '';
    }
  }

}
