'use client';
interface GuideProps {
  guide: guideType;
}

import Star from '@/utils/Star';
import Image from 'next/image';
import { guideType } from './Guides';

const Guide: React.FC<GuideProps> = ({ guide }) => {
  const { image, name, star, review, desc, location } = guide;
  return (
    <div className='rounded-lg bg-white shadow-lg'>
      <Image
        src={image}
        width={200}
        height={200}
        alt={`${name} local guide image`}
        loading='lazy'
        className='size-64 w-full rounded-t-lg object-cover'
      />
      <div className='space-y-2 p-3 py-5'>
        <p className='text-xl font-bold'>{name}</p>
        <div className='flex items-center gap-5'>
          <Star star={star} />
          <p>({review})</p>
        </div>
        <p>{desc}</p>
        <p className='flex items-center justify-between'>
          <span>{location}</span>
          <span className='cursor-pointer rounded-md border px-3 py-2'>
            Connect
          </span>
        </p>
      </div>
    </div>
  );
};

export default Guide;
