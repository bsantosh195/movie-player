import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-player';

  movie: any = {};
  defaultMovie = '';
  movieSelected = false;

  getMovie(data) {
    this.movieSelected = true;
    this.movie.trailer = data.trailer;
  }
}


