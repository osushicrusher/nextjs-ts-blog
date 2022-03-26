import NextImage from '@/components/NextImage';

export default function Profile() {
  return (
    <>
      <div className='max-w-3xl md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl'>
        <div className='flex items-center space-x-5'>
          <div className='flex-shrink-0'>
            <div className='relative'>
              <NextImage
                className='h-16 w-16 rounded-full'
                src='images/profilephoto.jpeg'
                width='200'
                height='200'
                alt='Icon'
              />
              <span
                className='absolute inset-0 rounded-full shadow-inner'
                aria-hidden='true'
              />
            </div>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-gray-900'>Hikaru Yoshino</h1>
            <p className='text-sm font-medium text-gray-500'>
              Front End Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
