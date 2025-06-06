import { JSX } from 'react';
import './icons.scss';

const Logo = (): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='26'
      viewBox='0 0 32 26'
      fill='none'
    >
      <path
        d='M25.6 0L28.8 6.4H24L20.8 0H17.6L20.8 6.4H16L12.8 0H9.6L12.8 6.4H8L4.8 0H3.2C1.432 0 0.016 1.432 0.016 3.2L0 22.4C0 24.168 1.432 25.6 3.2 25.6H28.8C30.568 25.6 32 24.168 32 22.4V0H25.6Z'
        fill='#FC4747'
      />
    </svg>
  );
};

export default Logo;
