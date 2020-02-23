import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from './state';
import { JavaArticlesAction, AngularArticlesAction, FavoriteArticlesAction } from './actions';
import { JAVA_ARTICLES, ANGULAR_ARTICLES } from './models';

export const initialState: ArticleState = { articles: [] };

export const articleReducer = createReducer(initialState,
    on(JavaArticlesAction, state => ({ articles: JAVA_ARTICLES })),
    on(AngularArticlesAction, state => ({ articles: ANGULAR_ARTICLES })),
    on(FavoriteArticlesAction, (state, action) => ({ articles: action.articles })),
);

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState,
    (state: ArticleState) => state.articles
);
