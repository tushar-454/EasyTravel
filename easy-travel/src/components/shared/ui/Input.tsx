'use client';
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  isPassField?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  isPassField,
  ...rest
}) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <div className='grid w-full gap-2'>
      <label htmlFor={id}>{label}</label>
      {isPassField ? (
        <div className='relative'>
          <input
            {...rest}
            type={showPass ? 'text' : 'password'}
            id={id}
            name={id}
            className={`w-full rounded-md border p-2 pr-10 outline-none ${error && 'border-red-500 bg-red-50'}`}
          />
          <span>
            {showPass ? (
              <FaEyeSlash
                onClick={() => setShowPass(!showPass)}
                className='absolute right-2 top-2 cursor-pointer text-2xl text-gray-400'
              />
            ) : (
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className='absolute right-2 top-2 cursor-pointer text-2xl text-gray-400'
              />
            )}
          </span>
        </div>
      ) : (
        <input
          {...rest}
          id={id}
          name={id}
          className={`w-full rounded-md border p-2 outline-none ${error && 'border-red-500 bg-red-50'}`}
        />
      )}
      <small className='text-red-500'>{error}</small>
    </div>
  );
};

export default Input;
