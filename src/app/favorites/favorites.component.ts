import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  articles : any;
  constructor(private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(){
    const val = localStorage.getItem('items');

    if(val !== null){
      this.articles = JSON.parse(val);
    }
  }

  onUnFavorite(article : any){
    const index = this.articles.indexOf(article);
    this.articles.splice(index,1);
    localStorage.setItem('items',JSON.stringify(this.articles));
    this._snackBar.open('Favorite Removed', 'OK',{
      duration:3000
    });
  }

}
