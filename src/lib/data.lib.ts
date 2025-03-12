import Film, { IFilm } from '@/models/film.model';
import { connectDatabase } from './mongo.lib';
import { verifyAuth } from './lucia.lib';
import User, { IUser } from '@/models/user.model';

const mutateBookmark = async (films: IFilm[]): Promise<IFilm[]> => {
  const { user: sessionUser } = await verifyAuth();
  const user = await User.findById(sessionUser?.id);

  const ids = user?.bookmark || [];

  if (user) {
    films.map((film) => {
      film.isBookmarked = ids.includes(film._id!);
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
