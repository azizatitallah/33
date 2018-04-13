import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
export interface IDistances{
  date:any;
  distance:any;
}
@Injectable()
export class DataService {
  result:any;
  constructor(private _http: Http) { }
 getDistances() {
    return this._http.get("/api/distances")
      .map(result => this.result = result.json());
  }

/* public getDistances(){

  return this._http.get("/api/distances")
  .map((res: Response) => res.json());
} */ 



}
