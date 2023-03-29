import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilmsComponent } from './components/films/films.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProssimeUsciteComponent } from './components/prossime-uscite/prossime-uscite.component';
import { BenvenutoComponent } from './components/benvenuto/benvenuto.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsCardComponent } from './shared/films-card/films-card.component';
import { DetailComponent } from './components/films/detail/detail.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FilmsComponent,
    FooterComponent,
    ProssimeUsciteComponent,
    BenvenutoComponent,
    HomeComponent,
    FilmsCardComponent,
    DetailComponent,
    FilmListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
