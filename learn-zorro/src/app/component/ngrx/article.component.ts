import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article, FAVORITE_ARTICLES } from "../../store/article/models";
import { ArticleState } from "../../store/article/state";
import * as articleReducer from "../../store/article/reducer";
import { JavaArticlesAction, AngularArticlesAction, FavoriteArticlesAction } from "../../store/article/actions";

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Observable<Article[]>

  constructor(private store: Store<ArticleState>) {
    this.articles = store.select(articleReducer.getArticles);
  }

  ngOnInit(): void {
  }

  showJavaArticles() {
    this.store.dispatch(JavaArticlesAction());
  }
  showAngularArticles() {
    this.store.dispatch(AngularArticlesAction());
  }
  showFavoriteArticles() {
    this.store.dispatch(FavoriteArticlesAction({ articles: FAVORITE_ARTICLES }));
  }

}
