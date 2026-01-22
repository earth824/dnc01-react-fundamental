import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

// cn('text-red-500', 'text-blue-900', isError && 'text-red-500') ==> 'text-red-900'
