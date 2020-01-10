import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetMovieListService } from 'src/app/services/get-movie-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Output() OutputData = new EventEmitter;

  movieList = [];

  constructor(private getMovieListService: GetMovieListService) {

   }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {

    this.getMovieListService.getMovieList().subscribe(
      (response: any) => {
        this.movieList = response;
      },
      error => {
        Swal.fire('Oops...', 'Something went wrong!');
      });
  }


  playVideo(data) {
    this.OutputData.emit(data);
  }

}
