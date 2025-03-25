import { Model, model, models, Schema, Document } from 'mongoose';

export interface ISession extends Document {
  _id: string;
  user_id: string;
  expires_at: Date;
}

const sessionSchema = new Schema<ISession>(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: { type: Schema.Types.ObjectId, required: true },
    expires_at: { type: Date, required: true },
  } as const,
  { _id: false }
);

const Session =
  (models.Session as Model<ISession>) || model('Session', sessionSchema);
export default Session;
