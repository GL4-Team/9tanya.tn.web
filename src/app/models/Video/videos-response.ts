import {VideoDto} from "./video";

export class VideosResponse {
  id: number = 0;
  results: VideoDto[] = [];


  constructor(id: number, results: VideoDto[]) {
    this.id = id;
    this.results = results;
  }
}
