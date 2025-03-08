import { model, models, Schema } from 'mongoose';

export interface ISession {
  _id: string;
  user_id: String;
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
  },
  { _id: false }
);

const Session = models.Session || model('Session', sessionSchema);
export default Session;
