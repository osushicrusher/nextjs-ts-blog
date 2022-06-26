import { Dispatch, SetStateAction } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type ProfileCategory = {
  id: number;
  name: string;
};

type Props = {
  categories: ProfileCategory[];
  tabIndex: number;
  onChange: Dispatch<SetStateAction<number>>;
};

export default function ProfileCategoryTab({
  categories,
  tabIndex,
  onChange,
}: Props) {
  return (
    <div>
      <div className=''>
        <nav
          className='relative z-0 flex divide-x divide-gray-200 rounded-lg shadow'
          aria-label='Tabs'
        >
          {categories.map((category) => (
            <a
              key={category.id}
              className={classNames(
                tabIndex === category.id
                  ? 'text-teal-500'
                  : 'text-gray-500 hover:text-gray-700',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
              onClick={() => onChange(category.id)}
            >
              <span>{category.name}</span>
              <span
                aria-hidden='true'
                className={classNames(
                  tabIndex === category.id ? 'bg-teal-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
