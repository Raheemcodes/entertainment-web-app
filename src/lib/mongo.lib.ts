import mongoose from 'mongoose';
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB } = process.env;

export const connectDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.u4041.mongodb.net/${MONGO_DB}`
    );

    console.log('Connected to the database');
  } catch (error) {
    throw new Error('Error connecting to the database');
  }
};

export const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    throw new Error('Error disconnecting from the database');
  }
};
