import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { PipeModule } from "../pipe/pipe.module";
import { ToastrModule } from "ngx-toastr";
import { DefaultImgDirective } from "../../directives/default-img.directive";
import {MovieItemComponent} from "../../componenets/movie-item/movie-item.component";
import {MoviesListComponent} from "../../componenets/movies-list/movies-list.component";
import {MoviesCategoryComponent} from "../../componenets/movies-category/movies-category.component";
import {HeaderComponent} from "../../componenets/header/header.component";

@NgModule({
  declarations: [
    MovieItemComponent,
    MoviesListComponent,
    MoviesCategoryComponent,
    DefaultImgDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    CommonModule,
    RouterModule,
    PipeModule,
    MovieItemComponent,
    MoviesListComponent,
    MoviesCategoryComponent,
    DefaultImgDirective,
  ]
})
export class SharedModule { }
