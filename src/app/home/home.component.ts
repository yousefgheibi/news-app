import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
 
  news : any;
  newsSubscription: any;

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
   this.newsSubscription = this.newsService.getData('top-headlines?country=us').subscribe(data => {
      this.news = data;
    })
  }

  ngOnDestroy(): void {
      this.newsSubscription.unsubscribe();
  }

}
