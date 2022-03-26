import { Popover } from '@headlessui/react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

export default function Header() {
  return (
    <Popover className='relative bg-white'>
      <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div>
          <UnstyledLink href='/' className='flex'>
            <span className='sr-only'>Workflow</span>
            <NextImage
              className='h-8 w-auto sm:h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt=''
              width='60'
              height='60'
            />
          </UnstyledLink>
        </div>
      </div>
    </Popover>
  );
}
