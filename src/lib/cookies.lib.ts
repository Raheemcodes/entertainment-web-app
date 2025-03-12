import { cookies } from 'next/headers';

export const verifyCookies = async () => {
  const cookiesStore = await cookies();
  const sessionCookie = cookiesStore.get('auth_session');

  return !!sessionCookie;
};
