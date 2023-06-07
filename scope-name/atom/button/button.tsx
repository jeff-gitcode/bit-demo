import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: ButtonProps) {
  const classes = twMerge(
    'inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
    className
  );

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
