import {Component, Input} from '@angular/core';
import {Cast} from "../../models/Cast/cast";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  @Input() actor!: Cast;

  onImageError(event: any) {
    event.target.src = 'src/assets/images/default-image.svg';
  }
}
