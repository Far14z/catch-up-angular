import {Component, Input} from '@angular/core';
import {Article} from '../../model/article.entity';
import {MatSnackBar} from '@angular/material/snack-bar';
import {async} from 'rxjs';


@Component({
  selector: 'app-article-item',
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input() article!: Article;

  constructor(private snackBar: MatSnackBar) {}

  async sharedArticle() {
    const articleSharedInfo =  {
      title: this.article.title,
      url: this.article.url
    };

    // TODO: IMPLEMENT THE SHARE FUNCTIONALITY
  }

}
