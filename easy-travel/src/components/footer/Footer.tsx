export type FooterType = {
  type: string;
  lists: {
    name: string;
    link: string;
  }[];
};

import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../header/Logo';
import Container from '../shared/Container';
import FooterItem from './FooterItem';

const footerArr: FooterType[] = [
  {
    type: 'About Us',
    lists: [
      {
        name: 'Support Center',
        link: '#',
      },
      {
        name: 'Customer Support',
        link: '#',
      },
      {
        name: 'About Us',
        link: '#',
      },
      {
        name: 'CopyRight',
        link: '#',
      },
      {
        name: 'Popular Campaign',
        link: '#',
      },
    ],
  },
  {
    type: 'Our Information',
    lists: [
      {
        name: 'Return Policy',
        link: '#',
      },
      {
        name: 'Privacy Policy',
        link: '#',
      },
      {
        name: 'Terms & Conditions',
        link: '#',
      },
      {
        name: 'Site Map',
        link: '#',
      },
      {
        name: 'Store Hours',
        link: '#',
      },
    ],
  },
  {
    type: 'Policy',
    lists: [
      {
        name: 'Application security',
        link: '#',
      },
      {
        name: 'Software principles',
        link: '#',
      },
      {
        name: 'Unwanted software policy',
        link: '#',
      },
      {
        name: 'Responsible supply chain',
        link: '#',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#faf8f6]'>
      <Container>
        <div className='mt-20 grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-start justify-center'>
            <Logo />
            <ul className='flex items-center gap-6'>
              <li>
                <a href='#'>
                  <FaInstagram className='text-2xl' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaLinkedin className='text-2xl' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaTwitter className='text-2xl' />
                </a>
              </li>
            </ul>
          </div>
          {footerArr.map((footerItem) => (
            <FooterItem key={Math.random()} footerItem={footerItem} />
          ))}
        </div>
      </Container>
      <p className='border-t py-5 text-center'>
        All Rights reserved &copy; 2024 | Easy Travel
      </p>
    </footer>
  );
};

export default Footer;
