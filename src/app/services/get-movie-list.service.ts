import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMovieListService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {
  }
  getMovieList() {
    const url = 'https://valuefy-assignment-x.herokuapp.com/api/getVideos';
    return this.http.get(url, {
      headers: this.httpOptions.headers
    });
  }
}
