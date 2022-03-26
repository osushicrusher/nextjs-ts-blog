import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Example() {
  return (
    <div className='flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <UnstyledLink
          href='#'
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Previous
        </UnstyledLink>
        <UnstyledLink
          href='#'
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Next
        </UnstyledLink>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>1</span> to{' '}
            <span className='font-medium'>10</span> of{' '}
            <span className='font-medium'>97</span> results
          </p>
        </div>
        <div>
          <nav
            className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'
          >
            <UnstyledLink
              href='#'
              className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </UnstyledLink>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <UnstyledLink
              href='#'
              aria-current='page'
              className='relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600'
            >
              1
            </UnstyledLink>
            <span className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700'>
              ...
            </span>
            <UnstyledLink
              href='#'
              className='relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex'
            >
              8
            </UnstyledLink>
            <UnstyledLink
              href='#'
              className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </UnstyledLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
