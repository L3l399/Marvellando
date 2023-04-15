import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/films/detail/detail.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { NewFilmComponent } from './components/films/new-film/new-film.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';
import { ResultComponent } from './components/films/result/result.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'films', component: FilmsComponent, children: [
    {path: 'detail/:title/:_id', component: DetailComponent},
    {path: 'new-film', component: NewFilmComponent},
    {path: 'search/:text', component: ResultComponent},
    {path: '', pathMatch: 'full', component: FilmListComponent}
  ]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
