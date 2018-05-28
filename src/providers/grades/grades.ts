import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
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
  private url_update_residence = "http://blokcijferapp-am1c.nl/update_residence.php";

  constructor(public http: HttpClient) {
    console.log('Hello GradesProvider Provider');
  }

  public getGrades() {
    return this.http.get(this.url, {responseType: "json"});    
  }

  public updateResidence(residence) {
    console.log("Dit is de ingevoerde woonplaats weergegeven door de provider: " + residence);
    let params = new HttpParams();
    params = params.set('residence', residence );
    
    this.http.post(this.url_update_residence,
                   params).subscribe(data  => {});


  }
}
