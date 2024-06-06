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
}

const Menu: React.FC<MenuProps> = ({ col, hfull }) => {
  return (
    <div>
      <ul
        className={`flex gap-10 ${col ? 'flex-col' : 'flex-row'} ${hfull ? '!h-full' : 'h-auto'}`}
      >
        {menuArr.map((menu, index) => (
          <li key={index}>
            <Link href={menu.path} className='text-lg font-medium'>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
