import banner from '@/assets/banner.jpg';
import Image from 'next/image';
import Container from '../shared/Container';
import SearchDestination from './SearchDestination';

const Banner = () => {
  return (
    <section>
      <Container>
        <div className='my-10 flex flex-col items-center justify-between gap-10 md:flex-row'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-5xl font-bold leading-[4rem]'>
              Find Your <br /> Local Travel Guide
            </h1>
            <p className='my-8 w-full text-lg md:w-auto xl:w-[40rem]'>
              Planning a trip? want som one to guide the journey with? your
              travel companion is just a click away
            </p>
            <SearchDestination />
            <p className='my-8 font-semibold'>
              <span className='text-lg font-bold'>1050+</span> people like you
              have used it.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <Image
              src={banner}
              width={320}
              height={320}
              alt='header image'
              loading='lazy'
              placeholder='blur'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
