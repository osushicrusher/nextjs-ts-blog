import classNames from '@/utils/classNames';

type Feed = {
  id: number;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
  title: string;
  date: string;
};

type Props = {
  feeds: Feed[];
};

export default function Feeds({ feeds }: Props) {
  return (
    <div className='mt-6 flow-root'>
      <ul role='list' className='-mb-8'>
        {feeds.map((item, itemIdx) => (
          <li key={item.id}>
            <div className='relative pb-8'>
              {itemIdx !== feeds.length - 1 ? (
                <span
                  className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={classNames(
                      item.color,
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'
                    )}
                  >
                    <item.icon
                      className='h-5 w-5 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                  <div>
                    <p className='text-sm text-gray-500'>
                      <a href='#' className='font-medium text-gray-900'>
                        {item.title}
                      </a>
                    </p>
                  </div>
                  <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
