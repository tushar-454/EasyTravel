'use client';
import { useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import Container from '../shared/Container';
import LoginSignup from './LoginSignup';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='border-b-2'>
      <Container>
        <div className='relative flex items-center justify-between'>
          <Logo />
          <div className='hidden lg:block'>
            <Menu col={false} hfull={false} />
          </div>
          <div className='hidden lg:block'>
            <LoginSignup />
          </div>
          {/* toggle button  */}
          <div className='block lg:hidden'>
            {isMenuOpen ? (
              <RxCross2
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-5xl text-black'
              />
            ) : (
              <HiMiniBars3
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-5xl text-black'
              />
            )}
          </div>
          {/* mobile menu */}
          <div
            className={`fixed top-0 block h-full border-r-2 bg-gray-100 p-6 transition-all lg:hidden ${isMenuOpen ? 'left-0' : '-left-80'}`}
          >
            <Menu col={true} hfull={true} setIsMenuOpen={setIsMenuOpen} />
            <LoginSignup setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
