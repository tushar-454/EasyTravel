interface TitleProps {
  children: React.ReactNode;
  type: string;
}

const Title: React.FC<TitleProps> = ({ type, children }) => {
  return (
    <>
      {type === 'center' && (
        <div className='text-center text-4xl font-bold leading-[3rem]'>
          {children}
        </div>
      )}
      {type === 'left' && (
        <div className='text-left text-4xl font-bold leading-[3rem]'>
          {children}
        </div>
      )}
    </>
  );
};

export default Title;
