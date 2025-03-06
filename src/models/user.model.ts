import { Schema, model, models } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  resetToken?: string;
  resetTokenExpiration?: Date;
  bookmark: string[];
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiration: Date,
  bookmark: { type: [String], required: true, default: [] },
});

const User = models.User || model<IUser>('User', userSchema);
export default User;
