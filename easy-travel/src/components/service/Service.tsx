import { ServiceType } from './Services';

interface ServiceProps {
  service: ServiceType;
}

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className='grid w-full shrink-0 flex-grow basis-auto place-items-center gap-5 rounded-lg bg-[#faf8f6] p-10 py-16 sm:basis-[400px]'>
      <span className='text-5xl text-gray-600'>{service.icon}</span>
      <p className='text-3xl font-medium text-gray-900'>{service.title}</p>
      <p className='text-lg text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima sit
        qui, porro est non vitae repellat quo atque, similique labore, alias
        voluptates accusamus vel temporibus laudantium nihil aliquam
        exercitationem.
      </p>
    </div>
  );
};

export default Service;
