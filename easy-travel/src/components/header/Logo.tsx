import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <Image src={logo} width={100} height={100} alt='Logo' priority={true} />
      </Link>
    </div>
  );
};

export default Logo;
