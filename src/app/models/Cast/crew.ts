export class Crew {
  adult: boolean = false;
  credit_id: string = '';
  department: string = '';
  gender: number = 0;
  id: number = 0;
  job: string = '';
  known_for_department: string = '';
  name: string = '';
  original_name: string = '';
  popularity: number = 0;
  profile_path: any = null;


  constructor(adult: boolean, credit_id: string, department: string, gender: number, id: number, job: string, known_for_department: string, name: string, original_name: string, popularity: number, profile_path: any) {
    this.adult = adult;
    this.credit_id = credit_id;
    this.department = department;
    this.gender = gender;
    this.id = id;
    this.job = job;
    this.known_for_department = known_for_department;
    this.name = name;
    this.original_name = original_name;
    this.popularity = popularity;
    this.profile_path = profile_path;
  }
}
