import { Model, Schema, model, models } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  bookmark: string[];
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  bookmark: { type: [String], required: true, default: [] },
});

const User = (models.User as Model<IUser>) || model<IUser>('User', userSchema);

export default User;
