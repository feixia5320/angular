import { Article } from './models';

export interface AppState {
	articleState: ArticleState;
}

export interface ArticleState {
	articles: Article[];
}