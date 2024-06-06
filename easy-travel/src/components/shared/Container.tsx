interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto w-full px-2 lg:w-11/12 lg:px-0 xl:w-4/5 2xl:w-4/5'>
      {children}
    </div>
  );
};

export default Container;
