import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './article-preview-list/article-preview-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const appRoutes = [
  { path: '', component: ArticlePreviewComponent },
  { path: 'test',      component: ArticlePreviewListComponent },
  { path: 'test/:id',  component: ArticleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
