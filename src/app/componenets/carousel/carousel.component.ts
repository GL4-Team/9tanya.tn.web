import { Component } from '@angular/core';
import {MovieApiService} from "../../service/movie-api.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CarouselComponent {
  constructor(private service:MovieApiService) {}
  current = 0;
  bannerResult:any=[]


  ngOnInit(): void {
    this.bannerData();
    this.sliderTimer();
  }

  bannerData(){

    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult=result.results;
    });
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.bannerResult.length;
    }, 5000);
  }


}
