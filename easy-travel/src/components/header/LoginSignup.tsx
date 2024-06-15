interface LoginSignupProps {
  setIsMenuOpen?: Function;
}

import Link from 'next/link';
import Button from '../shared/ui/Button';

const LoginSignup: React.FC<LoginSignupProps> = ({ setIsMenuOpen }) => {
  return (
    <div className='mt-10 flex items-center justify-center gap-5 lg:mt-0'>
      <Link href='/login'>
        <Button
          onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
          isFill={false}
        >
          Login
        </Button>
      </Link>
      <Link href='/signup'>
        <Button
          onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
          isFill={true}
        >
          Signup
        </Button>
      </Link>
    </div>
  );
};

export default LoginSignup;
