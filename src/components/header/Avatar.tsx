import { verifyCookies } from '@/lib/cookies.lib';
import Link from 'next/link';
import { JSX } from 'react';
import classes from './Header.module.scss';
import Image from 'next/image';

export default async function Avatar(): Promise<JSX.Element> {
  const isCookies: boolean = await verifyCookies();

  return isCookies ? (
    <Link className={classes.avatar} href='/logout'>
      <Image
        src='/images/image-avatar.png'
        width={80}
        height={80}
        alt='Avatar'
      />
    </Link>
  ) : (
    <></>
  );
}
