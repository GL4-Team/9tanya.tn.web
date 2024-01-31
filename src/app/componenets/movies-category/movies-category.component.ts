import {Component, Input} from '@angular/core';
import {Movie} from "../../models/Movie/movie";

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.css']
})
export class MoviesCategoryComponent {
  @Input() movies!: Movie[];
  @Input() category!: string;
}
