import Badge from '@/components/Badge';
import NextImage from '@/components/NextImage';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// 時間の表記を整形する
const alignDate = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  return year + '/' + month + '/' + day;
};

export default function PostList({ posts }) {
  return (
    <div className='w-full divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0'>
      {posts.map((post, postIdx) => (
        <div
          key={post.id}
          className={classNames(
            postIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            postIdx === 1 ? 'sm:rounded-tr-lg' : '',
            postIdx === posts.length - 2 ? 'sm:rounded-bl-lg' : '',
            postIdx === posts.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div className='flex'>
            <NextImage
              className='mr-4 flex-shrink-0 self-center'
              src={`${post.img.url}`}
              width='80'
              height='80'
              alt='Icon'
            />
            <div>
              <Badge arg={post.categories[0]} />
              <h4 className='text-lg font-bold'>
                <span className='absolute inset-0' aria-hidden='true' />
                <a href={`/${post.id}`} className='focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  {post.title}
                </a>
              </h4>
              <div>{post.minRead}min read</div>
              <div>
                投稿:{alignDate(post.publishedAt)}更新:
                {alignDate(post.revisedAt)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
