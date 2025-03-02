import { Schema, model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  resetToken?: string;
  resetTokenExpiration?: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiration: Date,
});

const UserModel = model<IUser>('User', userSchema);
export default UserModel;
