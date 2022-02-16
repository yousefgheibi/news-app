import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params =  new HttpParams().set('apiKey',apiKey);

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http : HttpClient) { }

  getData(url: string){
    return this.http.get(`${apiUrl}/${url}`, {params}).pipe(
      tap(value =>{
        console.log(value);
      })
    )
  }
}
