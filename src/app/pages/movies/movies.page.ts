import { MovieService } from "./../../services/movie.service";
import { Component, OnInit } from '@angular/core';
import { SearchResponse } from "src/app/interfaces/interfaces";
import { ModalController } from "@ionic/angular";
import { MovieDetailsPage } from "../movie-details/movie-details.page";
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  textSearch = '';
  ideas: string[] = ['spiderman', 'Batman', 'Avengers'];
  movies: SearchResponse[] = [];
  isLoading: boolean = false;
  constructor(private movieService: MovieService,
    private modalCOntroller: ModalController,) { 
    
  }
  search(event){
    this.isLoading = true;
    const text = event.detail.value;
    console.log(text);
    if (text) {
      this.movieService.search(text).subscribe((res)=>{
        this.isLoading = false;
        this.movies = res.results;
        console.log(this.ideas);
      })
    }else {
      this.isLoading = false;
    }
  }
  selectIdea(idea: string){
    this.textSearch = idea
  }
  async showDetail(id: string){
    const modal = await this.modalCOntroller.create({
      component: MovieDetailsPage,
      componentProps:{
        id
      }
    });
    modal.present();
  }

  ngOnInit() {
  }

}
