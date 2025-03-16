import Film, { IFilm } from '@/models/film.model';
import User from '@/models/user.model';
import { verifyAuth } from './lucia.lib';
import { connectDatabase } from './mongo.lib';
import { redirect } from 'next/navigation';
import { Types } from 'mongoose';
import IBookmark from '@/models/bookmark.model';

const mutateBookmark = async (films: IFilm[]): Promise<IFilm[]> => {
  const { user: sessionUser } = await verifyAuth();
  const user = await User.findById(sessionUser?.id);

  const ids = user?.bookmark || [];

  if (user) {
    films.map((film) => {
      film.isBookmarked = ids.includes(new Types.ObjectId(film._id));
      return film;
    });
  }

  return films;
};

export const getFilms = async (): Promise<IFilm[]> => {
  await connectDatabase();

  let films: IFilm[] = await Film.find().lean();
  films = await mutateBookmark(films);

  return JSON.parse(JSON.stringify(films));
};

export const getTrendingFilms = async (): Promise<IFilm[]> => {
  await connectDatabase();

  let films: IFilm[] = await Film.find({ isTrending: true }).lean();
  films = await mutateBookmark(films);

  return JSON.parse(JSON.stringify(films));
};

export const getAllMovies = async (): Promise<IFilm[]> => {
  await connectDatabase();

  let films: IFilm[] = await Film.find({
    category: 'Movie',
  }).lean();
  films = await mutateBookmark(films);

  return JSON.parse(JSON.stringify(films));
};

export const getAllSeries = async (): Promise<IFilm[]> => {
  await connectDatabase();

  let films: IFilm[] = await Film.find({
    category: 'TV Series',
  }).lean();
  films = await mutateBookmark(films);

  return JSON.parse(JSON.stringify(films));
};

export const getAllBookmarks = async (): Promise<IBookmark> => {
  const { user: sessionUser } = await verifyAuth();
  if (!sessionUser) redirect('/login');

  const user = await User.findById(sessionUser?.id).populate('bookmark');
  if (!user) redirect('/login');

  let films: IFilm[] = user.bookmark as any as IFilm[];
  films = await mutateBookmark(films);

  const result: IBookmark = { movies: [], series: [] };

  films.forEach((film) => {
    if (film.category == 'Movie') result.movies.push(film);
    else result.series.push(film);
  });

  return JSON.parse(JSON.stringify(result));
};
