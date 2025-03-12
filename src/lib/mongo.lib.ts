import mongoose from 'mongoose';
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB } = process.env;

export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.u4041.mongodb.net/${MONGO_DB}`;

export const connectDatabase = async () => {
  try {
    if (![1, 2].includes(mongoose.connection.readyState)) {
      await mongoose.connect(MONGO_URI);

      console.log('Connected to the database');
    }
  } catch (error) {
    throw new Error('Error connecting to the database');
  }
};

export const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from the database');
  } catch (error) {
    throw new Error('Error disconnecting from the database');
  }
};
