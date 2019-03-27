import { Component, OnInit } from '@angular/core';
import { MovieSelectorService } from '../../../../shared/services/movie-selector/movie-selector.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private movieSelector: MovieSelectorService) { }

  private movieName: string;
  private year: number;
  private language: string;
  private imdb_score: number;
  private genre: string;
  private duration: string;
  private director_name: string;
  private budget: string;
  private actors: string[];
  // private actor_2_name: string;
  // private actor_3_name: string;

  ngOnInit() {
    this.movieName = this.movieSelector.movie['name'];
    this.year = this.movieSelector.movie['year'];
    this.language = this.movieSelector.movie['language'];
    this.imdb_score = this.movieSelector.movie['imdb_score'];
    this.genre = this.movieSelector.movie['genre'];
    this.duration = this.movieSelector.movie['duration'];
    this.director_name = this.movieSelector.movie['director_name'];
    this.actors = this.movieSelector.movie['actors'];
    // this.actor_2_name = this.movieSelector.movie['actor_2_name'];
    // this.actor_3_name = this.movieSelector.movie['actor_3_name'];
    this.budget = this.movieSelector.movie['budget'];
  }

}
