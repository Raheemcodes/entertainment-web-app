import { model, models, Schema } from 'mongoose';

export interface Ikey {
  _id: string;
  user_id: string;
}

const KeySchema = new Schema<Ikey>(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: { type: String, required: true },
  } as const,
  { _id: false }
);

const Key = models.Key || model('Key', KeySchema);
export default Key;
