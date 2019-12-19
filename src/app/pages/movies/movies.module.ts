import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';
import { PipesModule } from "../../pipes/pipes.module";
import { MoviesPage } from './movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule,
    // PipesModule
    // MoviesPage,
  ],
  declarations: [MoviesPage],
  exports:[
    
    MoviesPage
  ]
})
export class MoviesPageModule {}
