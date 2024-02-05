import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {PersonComponent} from "../../componenets/person/person.component";
import {CastListComponent} from "../../componenets/cast-list/cast-list.component";
import {SharedModule} from "../shared/shared.module";
import {DetailsService} from "./services/details.service";


@NgModule({
  declarations: [
    MovieDetailsComponent,
    PersonComponent,
    CastListComponent,

  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ],
  providers: [DetailsService,],
})
export class DetailsModule { }
