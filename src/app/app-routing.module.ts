import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/films/detail/detail.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'films', component: FilmsComponent, children: [
    {path: 'detail/:title/:_id', component: DetailComponent},
    {path: '', pathMatch: 'full', component: FilmListComponent}
  ]},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
