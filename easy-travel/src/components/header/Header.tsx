import Container from '../shared/Container';
import LoginSignup from './LoginSignup';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <Container>
        <div className='flex items-center justify-between'>
          <Logo />
          <Menu />
          <LoginSignup />
        </div>
      </Container>
    </header>
  );
};

export default Header;
