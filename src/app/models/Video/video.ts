import { MovieApi } from "../movie.api";
import {SafeResourceUrl} from "@angular/platform-browser";

export class VideoDto {
  id: string = '';
  iso_3166_1: string = '';
  iso_639_1: string = '';
  key: string = '';
  name: string = '';
  official: boolean = false;
  published_at: string = '';
  site: string = '';
  size: number = 0;
  type: string = '';
  url: SafeResourceUrl | null = null;

  constructor(
    id: string = '',
    iso_3166_1: string = '',
    iso_639_1: string = '',
    key: string = '',
    name: string = '',
    official: boolean = false,
    published_at: string = '',
    site: string = '',
    size: number = 0,
    type: string = '',
    url: string | null = null
  ) {
    this.id = id;
    this.iso_3166_1 = iso_3166_1;
    this.iso_639_1 = iso_639_1;
    this.key = key;
    this.name = name;
    this.official = official;
    this.published_at = published_at;
    this.site = site;
    this.size = size;
    this.type = type;
    this.url = url;
  }

}
