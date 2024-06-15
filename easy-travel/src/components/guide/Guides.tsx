export type guideType = {
  image: string;
  name: string;
  star: number;
  review: number;
  desc: string;
  location: string;
};

import Container from '../shared/Container';
import Title from '../shared/Title';
import Guide from './Guide';

const guidesArr: guideType[] = [
  {
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20210906/pngtree-young-man-showing-number-one-image_805298.jpg',
    name: 'John Doe',
    star: 2,
    review: 20,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'New York, USA',
  },
  {
    image:
      'https://t3.ftcdn.net/jpg/05/23/82/00/360_F_523820033_WFwvxecXoVR4e0Bjbr1EjUEFgXNTzHF9.jpg',
    name: 'Jane Doe',
    star: 3,
    review: 30,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'California, USA',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-TdYGZZe0F0z2JwqeTcYJtz7bCoRAB0AuXU1I0w9EBGwXx27Mh9yfKik4qrpAyDk7T4&usqp=CAU',
    name: 'John Smith',
    star: 1,
    review: 25,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'Texas, USA',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7S9A5VhR0pTqA7t_z5_JSF_9v29By9hEp5D7Rh7LNGUTymFgAQK_DemSuhqZxEZrcscg&usqp=CAU',
    name: 'Jane Smith',
    star: 5,
    review: 35,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'Florida, USA',
  },
  {
    image:
      'https://t3.ftcdn.net/jpg/05/23/82/00/360_F_523820033_WFwvxecXoVR4e0Bjbr1EjUEFgXNTzHF9.jpg',
    name: 'Jane Doe',
    star: 3,
    review: 30,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'California, USA',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-TdYGZZe0F0z2JwqeTcYJtz7bCoRAB0AuXU1I0w9EBGwXx27Mh9yfKik4qrpAyDk7T4&usqp=CAU',
    name: 'John Smith',
    star: 1,
    review: 25,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'Texas, USA',
  },
];

const Guides = () => {
  return (
    <section>
      <Container>
        <div>
          <Title type='left'>
            Explore Most <br /> Popular Local Guide
          </Title>
          <div className='my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {guidesArr.map((guide, index) => (
              <Guide
                key={Math.random().toString(36).substr(2, 9)}
                guide={guide}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Guides;
