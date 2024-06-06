import Link from 'next/link';
import Button from '../shared/ui/Button';

const LoginSignup = () => {
  return (
    <div className='flex items-center justify-center gap-5'>
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
