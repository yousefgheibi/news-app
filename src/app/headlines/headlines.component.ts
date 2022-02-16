import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  news : any;
  categories = [
    'world',
    'India',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  
  ];
  constructor(private NewsService : NewsService) { }

  ngOnInit(): void {
    this.getCategoryData(this.categories[0]);
  }

  OnGetCategoryData(category : string){
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category : string){
    this.NewsService.getData(`everything?q=${category.toLowerCase()}`).subscribe(
      data => {
        this.news = data;
      }
    );
  }
}
