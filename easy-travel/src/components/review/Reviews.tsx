export type ReviewType = {
  star: number;
  experience: string;
  image: string;
  name: string;
  date: string;
};

import Container from '../shared/Container';
import Title from '../shared/Title';
import ReviewItem from './ReviewItem';

const reviewArr: ReviewType[] = [
  {
    star: 3,
    experience:
      '“The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!”',
    image:
      'https://i0.wp.com/travelradar.aero/wp-content/uploads/2021/08/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg',
    name: 'John Doe',
    date: 'Jan 2021',
  },
  {
    star: 4,
    experience:
      '“The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!”',
    image:
      'https://i0.wp.com/travelradar.aero/wp-content/uploads/2021/08/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg',
    name: 'John Doe',
    date: 'Jan 2021',
  },
  {
    star: 2,
    experience:
      '“The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!”',
    image:
      'https://i0.wp.com/travelradar.aero/wp-content/uploads/2021/08/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg',
    name: 'John Doe',
    date: 'Jan 2021',
  },
  {
    star: 2,
    experience:
      '“The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!”',
    image:
      'https://i0.wp.com/travelradar.aero/wp-content/uploads/2021/08/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg',
    name: 'John Doe',
    date: 'Jan 2021',
  },
  {
    star: 2,
    experience:
      '“The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!” “The greatest experience of my life!”',
    image:
      'https://i0.wp.com/travelradar.aero/wp-content/uploads/2021/08/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg',
    name: 'John Doe',
    date: 'Jan 2021',
  },
];

const Reviews = () => {
  return (
    <section>
      <Container>
        <div className='mt-20'>
          <Title type='center'>
            Review of Travelers <br /> Using Our Services
          </Title>
          <div className='my-10 flex flex-wrap gap-10'>
            {reviewArr.map((review) => (
              <ReviewItem key={Math.random()} review={review} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
