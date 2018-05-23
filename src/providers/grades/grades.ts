import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GradesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GradesProvider {
  // private url: string = '../assets/data.json';
  private url: string = 'http://blokcijferapp-am1c.nl/data.php';

  constructor(public http: HttpClient) {
    console.log('Hello GradesProvider Provider');
  }

  public getGrades() {
    return this.http.get(this.url, {responseType: "json"});    
  }

}
