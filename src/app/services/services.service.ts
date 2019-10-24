import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  articles = [
    {
      title: "articl1",
      content: "content",
      image: "https://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
      date: '10.11.2007',
      id: 1
    },
    {
      title: "articl2",
      content: "content2",
      image: "https://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
      date: '10.11.2017',
      id: 2
    },
    {
      title: "articl3",
      content: "content3",
      image: "https://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
      date: '10.11.2027',
      id: 3
    }
  ]

   Otday(){
    return this.articles ;
  }
}
