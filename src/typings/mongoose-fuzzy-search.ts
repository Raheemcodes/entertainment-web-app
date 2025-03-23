declare module 'mongoose-fuzzy-searching' {
  import { Document, Query, Model, Schema } from 'mongoose';

  export interface MongooseFuzzyOptions<T> {
    fields: (T extends Object ? keyof T : string)[];
  }

  export interface MongooseFuzzyModel<T extends Document, QueryHelpers = {}>
    extends Model<T, QueryHelpers> {
    fuzzySearch(
      search: String,
      callBack?: (err: any, data: Model<T, QueryHelpers>[]) => void
    ): Query<T[], T, QueryHelpers>;
  }

  function fuzzyPlugin<T>(
    schema: Schema<T>,
    options: MongooseFuzzyOptions<T>
  ): void;

  export default fuzzyPlugin;
}
