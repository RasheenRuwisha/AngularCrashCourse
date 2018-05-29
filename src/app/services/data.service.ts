import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
