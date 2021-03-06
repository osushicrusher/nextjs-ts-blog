// import { Popover } from '@headlessui/react';

// import UnstyledLink from '@/components/links/UnstyledLink';
// import NextImage from '@/components/NextImage';

// export default function Header() {
//   return (
//     <Popover className='relative bg-white'>
//       <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
//         <div>
//           <UnstyledLink href='/' className='flex'>
//             <span className='sr-only'>Workflow</span>
//             <NextImage
//               className='h-8 w-auto sm:h-10'
//               src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//               alt=''
//               width='50'
//               height='50'
//             />
//           </UnstyledLink>
//         </div>
//         <UnstyledLink href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
//           ブログ
//         </UnstyledLink>
//         <UnstyledLink href="/profile" className="text-base font-medium text-gray-500 hover:text-gray-900">
//           プロフィール
//         </UnstyledLink>
//       </div>
//     </Popover>
//   );
// }

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import BadgeWithIcon from '@/components/BadgeWithIcon';
import UnstyledLink from '@/components/links/UnstyledLink';

import classNames from '@/utils/classNames';

export default function Header() {
  return (
    <Popover className='relative bg-white'>
      <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div>
          <UnstyledLink href='/' className='flex'>
            <span className='sr-only'>Workflow</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-teal-500'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
          </UnstyledLink>
        </div>
        <div className='-my-2 -mr-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
          <Popover.Group as='nav' className='flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  ></Popover.Button>
                </>
              )}
            </Popover>
            <UnstyledLink
              href='/profile'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Profile
            </UnstyledLink>
            <UnstyledLink
              href='/contact'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Contact
            </UnstyledLink>
            <UnstyledLink
              href='https://www.buymeacoffee.com/yoshi2no'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BadgeWithIcon text='Buy me a coffee' />
            </UnstyledLink>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-50 origin-top-right transform transition sm:p-2 md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-teal-500'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                  </svg>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-6'>
                {/* <UnstyledLink
                  href='/blog'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  ブログ
                </UnstyledLink> */}
                <UnstyledLink
                  href='/profile'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Profile
                </UnstyledLink>
                <UnstyledLink
                  href='/contact'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Contact
                </UnstyledLink>
                <UnstyledLink
                  href='https://www.buymeacoffee.com/yoshi2no'
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BadgeWithIcon text='Buy me a coffee' />
                </UnstyledLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
