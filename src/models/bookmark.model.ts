import { IFilm } from './film.model';

export interface BookmarkState {
  added: boolean;
  error: string;
  redirect?: string;
}

export default interface IBookmark {
  movies: IFilm[];
  series: IFilm[];
}
