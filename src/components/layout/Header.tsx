import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
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
            {/* <UnstyledLink
              href='/blog'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              ブログ
            </UnstyledLink>
            <UnstyledLink
              href='/profile'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              プロフィール
            </UnstyledLink> */}
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
          className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden'
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
              <div className='grid grid-cols-2 gap-4'>
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
                  プロフィール
                </UnstyledLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
