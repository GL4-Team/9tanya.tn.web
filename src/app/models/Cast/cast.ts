export class Cast {
  constructor(adult: boolean, cast_id: number, character: string, credit_id: string, gender: number, id: number, known_for_department: string, name: string, order: number, original_name: string, popularity: number, profile_path: string) {
    this.adult = adult;
    this.cast_id = cast_id;
    this.character = character;
    this.credit_id = credit_id;
    this.gender = gender;
    this.id = id;
    this.known_for_department = known_for_department;
    this.name = name;
    this.order = order;
    this.original_name = original_name;
    this.popularity = popularity;
    this.profile_path = profile_path;
  }
  adult: boolean = false;
  cast_id: number = 0;
  character: string = '';
  credit_id: string = '';
  gender: number = 0;
  id: number = 0;
  known_for_department: string = '';
  name: string = '';
  order: number = 0;
  original_name: string = '';
  popularity: number = 0;
  profile_path: string = '';
}
