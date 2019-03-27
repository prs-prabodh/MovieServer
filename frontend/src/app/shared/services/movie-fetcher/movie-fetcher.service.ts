import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieFetcherService {

  private url: string = 'http://localhost:3000/movies/';
  constructor(private http: HttpClient) { }

  getMovies(phrase): Observable<any>{
    return this.http.get(this.url+phrase);
  }
}
