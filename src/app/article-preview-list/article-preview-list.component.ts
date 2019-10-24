import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services/services.service"

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.css']
})
export class ArticlePreviewListComponent implements OnInit {

  list: any[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {

    this.list = this.servicesService.Otday();
  }

}
