import NextImage from '@/components/NextImage';
type Props = {
  profile: {
    name: string;
    avatar: string;
    backgroundImage: string;
  };
};

export default function PageHeading({ profile }: Props) {
  return (
    <div>
      <div>
        <NextImage
          className='relative h-32 w-full object-cover lg:h-48'
          src={profile.backgroundImage}
          alt=''
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
          <div className='flex'>
            <NextImage
              className='relative h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
              src={profile.avatar}
              alt=''
              layout='fill'
              objectFit='contain'
              isRounded={true}
            />
          </div>
          <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
            <div className='mt-6 min-w-0 flex-1 sm:hidden md:block'>
              <h1 className='truncate text-2xl font-bold text-gray-900'>
                {profile.name}
              </h1>
            </div>
          </div>
        </div>
        <div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
          <h1 className='truncate text-2xl font-bold text-gray-900'>
            {profile.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
