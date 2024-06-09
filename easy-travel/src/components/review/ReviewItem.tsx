interface ReviewItemProps {
  review: ReviewType;
}

import Star from '@/utils/Star';
import Image from 'next/image';
import { ReviewType } from './Reviews';

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className='flex-grow basis-96 space-y-4 rounded-lg bg-white p-8 shadow-lg'>
      <div className='flex items-center gap-5'>
        <Star star={review.star} />
      </div>
      <p>{review.experience}</p>
      <div className='flex items-center gap-2'>
        <Image
          src={review.image}
          width={100}
          height={100}
          alt={`${review.name} image`}
          className='h-12 w-12 rounded-full object-cover'
        />
        <p className='gap flex flex-col'>
          <span className='font-medium'>{review.name}</span>
          <small>{review.date}</small>
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
