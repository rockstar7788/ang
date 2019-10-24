import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any;
  id: any;

  constructor(private ActivatedRoute: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {

    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.article = this.servicesService.Otday().filter((item) => {
      return item.id == this.id;
    })[0];
  }

}
