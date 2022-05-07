import NextImage from '@/components/NextImage';

const contents = [
  {
    id: 1,
    name: '活躍が目覚ましいイデア・レコードの若手エンジニア対談',
    email: 'leslie.alexander@example.com',
    role: '株式会社イデア・レコード',
    imageUrl: '/svg/Wantedly_Mark_LightBG.svg',
    href: 'https://www.wantedly.com/companies/idearecord2/post_articles/395397',
  },
];

export default function HorizontalLinkCard() {
  return (
    <div className='grid grid-cols-1 gap-4'>
      {contents.map((content) => (
        <div
          key={content.id}
          className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:border-gray-400'
        >
          <div className='flex-shrink-0'>
            <NextImage
              className='relative h-10 w-10 rounded-full'
              src={content.imageUrl}
              alt=''
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='min-w-0 flex-1'>
            <a
              href={content.href}
              className='focus:outline-none'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='absolute inset-0' aria-hidden='true' />
              <p className='text-sm font-medium text-gray-900'>
                {content.name}
              </p>
              <p className='truncate text-sm text-gray-500'>{content.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
