import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';

import { Lucia, TimeSpan } from 'lucia';
import mongoose from 'mongoose';
import { cookies } from 'next/headers';

// Define the adapter
const adapter = new MongodbAdapter(
  mongoose.connection.collection('sessions'),
  mongoose.connection.collection('users')
);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: true,
    attributes: {
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    },
  },
  sessionExpiresIn: new TimeSpan(1, 'w'),
});

export const createAuthSession = async (userId: string): Promise<void> => {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
};
