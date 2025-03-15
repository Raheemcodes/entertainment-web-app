import { Model, Schema, Types, model, models } from 'mongoose';

export interface IUser {
  _id?: Types.ObjectId;
  email: string;
  password: string;
  bookmark: Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  bookmark: [{ type: Schema.Types.ObjectId, required: true, ref: 'Film' }],
});

const User = (models.User as Model<IUser>) || model<IUser>('User', userSchema);

export default User;
