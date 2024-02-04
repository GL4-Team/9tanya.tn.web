import {Component, OnInit} from '@angular/core';
import {MovieApiService} from "../../service/movie-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieDetailResponse} from "../../models/Movie-Detail/movie-detail-response";
import {VideoDto} from "../../models/Video/video";
import {MovieApi} from "../../models/movie.api";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {AppMovieDialogComponent} from "../../componenets/app-movie-dialog/app-movie-dialog.component";
import {Cast} from "../../models/Cast/cast";
import {Movie} from "../../models/Movie/movie";
import {tap} from "rxjs";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  autoplay = '?rel=0;&autoplay=1&mute=0';

  constructor(private service:MovieApiService,
              private activatedRoute:ActivatedRoute,
              private sanitizer: DomSanitizer,
              private dialog: MatDialog
  ) {
  }


  movie: MovieDetailResponse = new MovieDetailResponse();
  video: VideoDto = new VideoDto();
  similarMovies: Movie[] | null = null;

  cast: Cast[] = []

  ngOnInit() {
    let getParamId=this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
    this.getSimilarMovies(getParamId)
  }

  openDialogMovie(video: VideoDto): void {
    const videoUrl = MovieApi.BASE_URL + video.key + this.autoplay;
    const sanitizedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);

    this.dialog.open(AppMovieDialogComponent, {
      height: '600px',
      width: '900px',
      data: { videoUrl: sanitizedUrl }
    });
  }





  getMovie(id: any) {
    this.service.getMovieDetails(id).pipe(
      tap(result => console.log(result, 'getmoviedetails#'))
    ).subscribe({
      next: (result) => {
        this.movie = result;
      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
      }
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).pipe(
      tap(result => console.log(result, 'getmovieVideo#'))
    ).subscribe({
      next: (result) => {
        result.results.forEach((element: any) => {
          if (element.type == "Trailer") {
            this.video = element.key;
          }
        });
      },
      error: (error) => {
        console.error('Error fetching movie video:', error);
      }
    });
  }



  getMovieCast(id: any) {
    this.service.getMovieCast(id).pipe(
      tap(result => console.log(result, 'movieCast#'))
    ).subscribe({
      next: (result) => {
        this.cast = result.cast;
      },
      error: (error) => {
        console.error('Error fetching movie cast:', error);
      }
    });
  }


  private getSimilarMovies(id: any) {
    this.service.getSimilarMovies(id).pipe(
      tap(result => console.log(result, 'similar#'))
    ).subscribe({
      next: (result) => {
        this.similarMovies = result.results;
      },
      error: (error) => {
        console.error('Error fetching similar movies:', error);
      }
    });
  }


}
