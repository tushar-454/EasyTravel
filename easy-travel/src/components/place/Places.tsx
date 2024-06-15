export type placeType = {
  image: string;
  name: string;
};

import Container from '../shared/Container';
import Title from '../shared/Title';
import Place from './Place';

const placesArr: placeType[] = [
  {
    image:
      'https://sylhettouristplaces.com/wp-content/uploads/2020/02/Bisnakandi-Sylhet.jpg',
    name: 'Sylhet',
  },
  {
    image:
      'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true',
    name: 'Dhaka',
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/previews/023/368/504/large_2x/the-sixty-dome-mosque-in-khulna-bangladesh-selective-focus-free-photo.jpg',
    name: 'Khulna',
  },
  {
    image:
      'https://lp-cms-production.imgix.net/2019-06/4ea15cc5c817234fc2864f46b3fbe992-chittagong-hill-tracts.jpg',
    name: 'Chittagong',
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0c/fb/7f/a5/pancharatna-shiva-mandir.jpg',
    name: 'Rajshahi',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Barishal_University_Campus%2C_Bangladesh.jpg',
    name: 'Barishal',
  },
];

const Places = () => {
  return (
    <section>
      <Container>
        <div className='mt-20'>
          <Title type='center'>Places to Visit</Title>
          <div className='my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {placesArr.map((place) => (
              <Place
                key={Math.random().toString(36).substr(2, 9)}
                place={place}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Places;
