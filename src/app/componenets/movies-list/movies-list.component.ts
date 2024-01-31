import {Component, Input} from '@angular/core';
import {Movie} from "../../models/Movie/movie";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input() movies!: Movie[];
  @Input() category!: string;

  slidePosition = 0;
  slideStep = 1400;
  elementWidth=200

  get containerWidth(): number {
    return window.innerWidth;
  }

  get sliderWidth(): number {
    return this.movies.length * this.elementWidth;
  }

  slide(direction: string) {
    if (direction === 'left') {
      this.slidePosition = Math.min(this.slidePosition + this.slideStep, 0);
    } else {
      this.slidePosition = Math.max(this.slidePosition - this.slideStep, -(this.sliderWidth - this.containerWidth));
    }
  }

}
