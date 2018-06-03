import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MenuService {


  // headers = new Headers();
  constructor(private http: HttpClient) {

    // this.headers.append('Content-Type', 'application/json');
  }

  getConfig(): Observable<any> {
    const data = {'language': 1, 'type': 'web' };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin')
    // const options = new RequestOptions({ headers: headers });
    // Object.assign(data, {headers: this.headers}); // data={'language': 1, type: 'web','headres':{'Content-Type', 'application/json'}}
    return this.http.post('http://demo.localao.com/api/product_info_mob', data);
    // .map((res) => { res.json();{
    // });

  }

}
