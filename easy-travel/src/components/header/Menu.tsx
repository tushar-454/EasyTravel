import Link from 'next/link';

const menuArr = [
  { name: 'Home', path: '/' },
  { name: 'Guide', path: '/guides' },
  { name: 'Place', path: '/places' },
  { name: 'Emergency Help', path: '/emergency-help' },
  { name: 'Contact', path: '/contact' },
];

interface MenuProps {
  col: boolean;
  hfull: boolean;
  setIsMenuOpen?: Function;
}

const Menu: React.FC<MenuProps> = ({ col, hfull, setIsMenuOpen }) => {
  return (
    <div>
      <ul
        className={`flex gap-10 ${col ? 'flex-col' : 'flex-row'} ${hfull ? '!h-full' : 'h-auto'}`}
      >
        {menuArr.map((menu) => (
          <li key={Math.random().toString(36).substr(2, 9)}>
            <Link
              href={menu.path}
              onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              className='text-lg font-medium'
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
