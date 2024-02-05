import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../models/Movie/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieApiService: MoviesService
  ) {}

  bannerResult: Movie[] | null = null;
  trendingMovieResult: Movie[] | null = null;
  upcomingMovieResult: Movie[] | null = null;
  nowPlayingMovieResult: Movie[] | null = null;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.bannerResult = data['bannerData']?.results || [];
      this.trendingMovieResult = data['trendingData']?.results || [];
      this.upcomingMovieResult = data['upcomingData']?.results || [];
      this.nowPlayingMovieResult = data['nowPlayingData']?.results || [];
    });
  }
}
