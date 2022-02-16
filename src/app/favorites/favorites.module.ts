import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { MaterialModule } from '../material.module';

const routes : Routes = [
  {
    path : '',
    component : FavoritesComponent
  }
]

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class FavoritesModule { }
