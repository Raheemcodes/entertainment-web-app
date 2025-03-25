import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
import { Cookie, Lucia, TimeSpan } from 'lucia';
import mongoose, { Types } from 'mongoose';
import { cookies } from 'next/headers';
import { connectDatabase } from './mongo.lib';

// Define the adapter
const adapter = new MongodbAdapter(
  mongoose.connection.collection('sessions'),
  mongoose.connection.collection('users')
);

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: true,
    attributes: {
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    },
  },
  sessionExpiresIn: new TimeSpan(1, 'w'),
});

const setCookie = async (sessionCookie: Cookie) => {
  const cookiesStore = await cookies();

  cookiesStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
};

const createSessionCookie = async (sessionId: string): Promise<void> => {
  const sessionCookie: Cookie = lucia.createSessionCookie(sessionId);
  await setCookie(sessionCookie);
};

const createBlankSessionCookie = async (): Promise<void> => {
  const sessionCookie: Cookie = lucia.createBlankSessionCookie();
  await setCookie(sessionCookie);
};

export const createAuthSession = async (
  userId: Types.ObjectId | string
): Promise<void> => {
  await connectDatabase();
  const session = await lucia.createSession(userId as string, {});
  await createSessionCookie(session.id);
};

export const verifyAuth = async () => {
  await connectDatabase();

  const cookiesStore = await cookies();
  const sessionCookie = cookiesStore.get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);

  const { session } = result;

  try {
    if (session && session.fresh) await createAuthSession(session.id);

    if (!session) await createBlankSessionCookie();
  } catch {}

  return result;
};

export const destroySession = async () => {
  const { session } = await verifyAuth();

  if (!session)
    return {
      error: 'Unauthorized!',
    };

  await lucia.invalidateSession(session.id);
  await createBlankSessionCookie();
};
