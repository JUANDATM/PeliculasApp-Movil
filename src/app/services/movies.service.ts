import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getFeature(){
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-03-13&api_key=149686482f06d811a4d245f24cbd6147&language=es&include_image_language=es`);
  }
}
