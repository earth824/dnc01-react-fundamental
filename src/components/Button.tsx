import type { ComponentProps } from 'react';
import { cn } from '../utils/cn';

type ButtonProps = ComponentProps<'button'>;
// { onClick: () => { console.log('click')}, id: 'abcd' }
export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn('bg-gray-200 px-4 py-2 h-9 rounded-md text-sm', className)}
      {...props}
      // onClick: () => { console.log('click')}
      // id: 'abcd'
    >
      {children}
    </button>
  );
}

// px-4 py-2 h-9 rounded-md text-sm bg-blue-500 text-white px-8
// tailwind-merge: twMerge('px-4 px-8 h-9') ==> 'px-8 h-9'
// twMerge(
//   clsx('text-white px-4 py-2 h-9 rounded-md text-sm', className, {
//     'text-red-500': isError
//   })
// ); // px-4 py-2 h-9 rounded-md text-sm text-red-500
// clsx: clsx('px-4 py-2 h-9 rounded-md text-sm', 'bg-blue-500 text-white px-8', 'text-lg py-0')
// assume we have isError: boolean
// clsx: clsx('px-4 py-2 h-9 rounded-md text-sm', isError && 'text-red-500', { 'text-red-500': isError })

// type ButtonProps = {
//   children: ReactNode;
//   color: 'blue' | 'red' | 'gray';
// };

// const baseClassName = 'px-4 py-2 h-9 rounded-md text-sm';

// const additionalClassName = {
//   blue: 'bg-blue-500 text-white',
//   red: 'bg-red-500 text-white',
//   gray: 'bg-gray-200'
// };

// export default function Button({ children, color }: ButtonProps) {
//   return (
//     // color: 'blue' ==> additionalClassName['blue'] ==> 'bg-blue-500 text-white'
//     // 'px-4 py-2 h-9 rounded-md text-sm bg-blue-500 text-white'
//     <button className={`${baseClassName} ${additionalClassName[color]}`}>
//       {children}
//     </button>
//   );
// }
