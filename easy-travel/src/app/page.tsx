import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Guides from '@/components/guide/Guides';
import Header from '@/components/header/Header';
import Places from '@/components/place/Places';
import Reviews from '@/components/review/Reviews';

import Services from '@/components/service/Services';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Services />
        <Guides />
        <Places />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};

export default Home;
