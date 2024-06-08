export type ServiceType = {
  icon: JSX.Element;
  title: string;
  description: string;
};
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgCreditCard } from 'react-icons/cg';
import { HiOutlineUsers } from 'react-icons/hi2';

import Container from '../shared/Container';
import Title from '../shared/Title';
import Service from './Service';

const servicesArr: ServiceType[] = [
  {
    icon: <HiOutlineUsers />,
    title: 'Guide Care',
    description: 'description',
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: 'Pic from airport',
    description: 'description',
  },
  {
    icon: <CgCreditCard />,
    title: 'Listed Place',
    description: 'description',
  },
];

const Services = () => {
  return (
    <section>
      <Container>
        <div className='mt-24'>
          <Title>Our Services For You</Title>
          <div className='my-20 flex flex-wrap gap-10'>
            {servicesArr.map((service) => (
              <Service key={Math.random()} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
