import { createAction, props } from '@ngrx/store';
import { Article } from './models';

export const JavaArticlesAction = createAction('Java');

export const AngularArticlesAction = createAction('Angular');

export const FavoriteArticlesAction = createAction('MyArticles', props<{ articles: Article[] }>());

