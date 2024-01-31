import {Cast} from "./cast";
import {Crew} from "./crew";

export class CreditsResponse {
  cast: Cast[] = [];
  crew: Crew[] = [];

  constructor(cast: Cast[], crew: Crew[], id: number) {
    this.cast = cast;
    this.crew = crew;
    this.id = id;
  }

  id: number = 0;
}
