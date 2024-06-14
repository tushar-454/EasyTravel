interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  children: React.ReactNode;
}
import React from 'react';

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  error,
  children,
  ...rest
}) => {
  return (
    <div>
      <input
        {...rest}
        type='checkbox'
        id={id}
        name={id}
        className='relative top-px cursor-pointer accent-primary-700'
      />{' '}
      <label htmlFor={id} className='select-none text-sm'>
        {error ? <span className='text-red-500'>{error}</span> : children}
      </label>
    </div>
  );
};

export default Checkbox;
