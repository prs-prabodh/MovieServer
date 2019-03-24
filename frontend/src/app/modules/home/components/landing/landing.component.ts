import { Component, OnInit } from '@angular/core';
import { MovieFetcherService } from '../../../../shared/services/movie-fetcher/movie-fetcher.service';
import { MovieSelectorService } from '../../../../shared/services/movie-selector/movie-selector.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private user: UserService, private movieFetcher: MovieFetcherService, private movieSelector: MovieSelectorService) { }

  private results;
  myControl = new FormControl();
  searchBarVisibility: Boolean = false;

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

  flipSearchBarVisibility(): void {
    this.searchBarVisibility = this.searchBarVisibility ? false : true;
  }
  showDetails(movie) {
    this.movieSelector.movie = movie['fields'];
  }
}
