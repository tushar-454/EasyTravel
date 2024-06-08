interface StarProps {
  star: number;
}
import { MdOutlineStarPurple500 } from 'react-icons/md';

const Star: React.FC<StarProps> = ({ star }) => {
  return (
    <div className='relative'>
      <p className='flex'>
        {[...Array(5)].map(() => (
          <MdOutlineStarPurple500
            key={Math.random()}
            style={{ color: '#12121236' }}
            className='text-xl'
          />
        ))}
      </p>
      <p className='absolute left-0 top-0 flex'>
        {[...Array(Math.floor(star))].map(() => (
          <MdOutlineStarPurple500
            key={Math.random()}
            style={{ color: '#fbbf24' }}
            className='text-xl'
          />
        ))}
      </p>
    </div>
  );
};

export default Star;
