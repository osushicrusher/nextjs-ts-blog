import {
  faGithub,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
        <div className='mt-8 flex justify-center space-x-6'>
          <a
            href='https://twitter.com/oichiiosushi'
            className='h-8 w-8 text-sky-500 hover:text-sky-600'
          >
            <span className='sr-only'>Twitter</span>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href='https://github.com/osushicrusher'
            className='h-8 w-8 text-gray-800 hover:text-gray-900'
          >
            <span className='sr-only'>Github</span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href='https://medium.com/@osushicrusher'
            className='h-8 w-8 text-gray-800 hover:text-gray-900'
          >
            <span className='sr-only'>Medium</span>
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy;{new Date().getFullYear()} By Hikaru Yoshino, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
