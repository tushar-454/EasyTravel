import Image from 'next/image';
import { placeType } from './Places';

interface PlaceProps {
  place: placeType;
}

const Place: React.FC<PlaceProps> = ({ place }) => {
  const { image, name } = place;
  return (
    <div className='relative rounded-lg'>
      <Image
        src={image}
        width={500}
        height={500}
        alt={`${name} place image`}
        loading='lazy'
        className='h-72 w-full rounded-lg object-cover'
      />
      <div className='absolute left-0 top-0 grid h-full w-full place-items-center rounded-lg bg-[#00000090]'>
        <p className='text-2xl font-bold text-white'>{name}</p>
      </div>
    </div>
  );
};

export default Place;
