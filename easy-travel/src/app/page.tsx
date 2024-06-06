import Banner from '@/components/banner/Banner';
import Guides from '@/components/guide/Guides';
import Places from '@/components/place/Places';
import Reviews from '@/components/review/Reviews';

import Services from '@/components/service/Services';

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Guides />
      <Places />
      <Reviews />
    </main>
  );
};

export default Home;
