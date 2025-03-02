import { Schema, model } from 'mongoose';

export interface IFilm {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const filmSchema = new Schema<IFilm>({
  title: { type: String, required: true },
  thumbnail: {
    type: {
      trending: { small: String, large: String },
      regular: {
        type: {
          small: String,
          medium: String,
          large: String,
        },
        required: true,
      },
    },
    required: true,
  },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  isBookmarked: { type: Boolean, required: true },
  isTrending: { type: Boolean, required: true },
});

const FilmModel = model<IFilm>('Film', filmSchema);
export default FilmModel;
