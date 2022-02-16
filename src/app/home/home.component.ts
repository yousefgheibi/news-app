import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Event } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
 
  pageSize : number = 8;
  page : number = 1;
  news : any;
  newsSubscription: any;
  
  constructor(private newsService : NewsService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
   this.newsSubscription = this.newsService.getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${this.page}`).subscribe(data => {
      this.news = data;
    })
  }

  onPageChange(event:any){
    console.log(event);
    this.newsSubscription = this.newsService.getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${event.pageIndex}`).subscribe(data => {
      this.news = data;
    })

  }

  onFavorite(article : any){
      console.log(article);

      let items = [];
      const val = localStorage.getItem('items');

      if(val !== null){
        items = JSON.parse(val);
      }

      items.push(article);
      localStorage.setItem('items',JSON.stringify(items));
      
      this._snackBar.open('Favorite Added', 'OK',{
        duration:3000
      });
  }

  ngOnDestroy(): void {
      this.newsSubscription.unsubscribe();
  }

}
