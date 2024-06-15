import { FooterType } from './Footer';

interface FooterItemProps {
  footerItem: FooterType;
}

const FooterItem: React.FC<FooterItemProps> = ({ footerItem }) => {
  return (
    <div>
      <p className='mb-6 text-lg font-bold'>{footerItem.type}</p>
      <ul className='space-y-3'>
        {footerItem.lists.map((list) => (
          <li key={Math.random().toString(36).substr(2, 9)}>
            <a href={list.link} className='text-gray-600'>
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
