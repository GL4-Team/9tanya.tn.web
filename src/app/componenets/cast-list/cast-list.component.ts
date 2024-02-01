import {Component, Input} from '@angular/core';
import {Cast} from "../../models/Cast/cast";

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrl: './cast-list.component.css'
})
export class CastListComponent {

  slidePosition = 0;
  slideStep = 1400;
  elementWidth=200

  @Input() cast!: Cast[];


  get containerWidth(): number {
    return window.innerWidth;
  }

  get sliderWidth(): number {
    return this.cast.length * this.elementWidth;
  }

  slide(direction: string) {
    if (direction === 'left') {
      this.slidePosition = Math.min(this.slidePosition + this.slideStep, 0);
    } else {
      this.slidePosition = Math.max(this.slidePosition - this.slideStep, -(this.sliderWidth - this.containerWidth));
    }
  }

}
