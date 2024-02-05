import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {CarouselComponent} from "../../componenets/carousel/carousel.component";
import {SearchService} from "../search/service/serach.service";
import {MoviesService} from "./service/movies.service";


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [MoviesService,],

})
export class HomeModule { }
