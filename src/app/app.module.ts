import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieApiService} from "./service/movie-api.service";
import { HeaderComponent } from './componenets/header/header.component';
import { CarouselComponent } from './componenets/carousel/carousel.component';
import {PipeModule} from "./pipe/pipe.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MovieItemComponent } from './componenets/movie-item/movie-item.component';
import { MoviesListComponent } from './componenets/movies-list/movies-list.component';
import { MoviesCategoryComponent } from './componenets/movies-category/movies-category.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AppMovieDialogComponent} from "./componenets/app-movie-dialog/app-movie-dialog.component";
import {PersonComponent} from "./componenets/person/person.component";
import {CastListComponent} from "./componenets/cast-list/cast-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    HeaderComponent,
    CarouselComponent,
    MovieItemComponent,
    MoviesListComponent,
    MoviesCategoryComponent,
    AppMovieDialogComponent,
    PersonComponent,
    CastListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
  ],
  providers: [MovieApiService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
