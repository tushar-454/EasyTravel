import Link from 'next/link';
import Button from '../shared/ui/Button';

const LoginSignup = () => {
  return (
    <div className='mt-10 flex items-center justify-center gap-5 lg:mt-0'>
      <Link href='/login'>
        <Button isFill={false}>Login</Button>
      </Link>
      <Link href='/signup'>
        <Button isFill={true}>Signup</Button>
      </Link>
    </div>
  );
};

export default LoginSignup;
