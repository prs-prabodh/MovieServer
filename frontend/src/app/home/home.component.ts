import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { MovieFetcherService } from '../movie-fetcher.service';
import { FormControl } from '@angular/forms';
import { MovieSelectorService } from '../movie-selector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private results;
  myControl = new FormControl();
  searchBarVisibility: Boolean = false;
  constructor(private movieFetcher: MovieFetcherService, private movieSelector: MovieSelectorService) { }

  ngOnInit() {
  }

  typed(event): void {
    this.movieFetcher.getMovies(event.target.value).subscribe(
      data => this.results = JSON.parse(data), 
      error => console.log('Error!')
      );
    // console.log(typeof event.target.value);
    console.log(this.results);
  }

  flipSearchBarVisibility(): void{
    this.searchBarVisibility = this.searchBarVisibility ? false : true;
  }
  showDetails(movie){
    this.movieSelector.movie = movie['fields'];
  }
}
