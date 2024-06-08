import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const SearchDestination = () => {
  return (
    <div>
      <form>
        <div className='flex items-center'>
          <div className='relative flex w-full items-center md:w-auto xl:w-[30rem]'>
            <span className='absolute left-4 top-5 text-2xl text-white'>
              <FaSearch />
            </span>
            <input
              type='text'
              placeholder='Search Destination'
              className='w-full rounded-l border-none bg-primary-600 p-5 pl-14 text-lg text-white outline-none placeholder:text-white'
            />
          </div>
          <button
            type='submit'
            className='rounded-r border-none bg-primary-500 p-5 text-white outline-none'
          >
            <IoIosArrowDown className='text-3xl' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchDestination;
