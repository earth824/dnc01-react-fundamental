import type { ComponentProps } from 'react';
import { cn } from '../utils/cn';

type InputProps = ComponentProps<'input'>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={cn(
        'outline-none w-full border border-gray-400 rounded-md h-9 px-3 focus:ring-4 focus:ring-gray-200',
        className
      )}
      {...props}
    />
  );
}
