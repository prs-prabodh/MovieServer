import { Component, OnInit } from '@angular/core';
import { MovieSelectorService } from '../movie-selector.service';
import { MovieFetcherService } from '../movie-fetcher.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private movieFetcher: MovieFetcherService ,private movieSelector: MovieSelectorService) { }

  private movieName: string;
  private year: number;
  private language: string;
  private imdb_score: number;
  private genre: string;
  private duration: string;
  private director_name: string;
  private actor_1_name: string;
  private actor_2_name: string;
  private actor_3_name: string;

  
  ngOnInit() {
    this.movieName = this.movieSelector.movie['name'];
    this.year = this.movieSelector.movie['year'];
    this.language = this.movieSelector.movie['language'];
    this.imdb_score = this.movieSelector.movie['imdb_score'];
    this.genre = this.movieSelector.movie['genre'];
    this.duration = this.movieSelector.movie['duration'];
    this.director_name = this.movieSelector.movie['director_name'];
    this.actor_1_name = this.movieSelector.movie['actor_1_name'];
    this.actor_2_name = this.movieSelector.movie['actor_2_name'];
    this.actor_2_name = this.movieSelector.movie['actor_2_name'];
    
    // console.log(this.movieName);
    // console.log(JSON.parse(this.movieSelectedRaw));
    // console.log(JSON.parse(data)[0]['fields'])
  }

}
