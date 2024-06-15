'use client';
import React from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, error, ...rest }) => {
  return (
    <div className='grid w-full gap-2'>
      <label htmlFor={id}> {label} </label>
      <textarea
        {...rest}
        id={id}
        name={id}
        className={`w-full rounded-md border p-2 outline-none ${error && 'border-red-500 bg-red-50'}`}
      ></textarea>
      <small className='text-red-500'> {error} </small>
    </div>
  );
};

export default TextArea;
