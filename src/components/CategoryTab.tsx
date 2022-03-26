function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CategoryTab({ categories }) {
  return (
    <div>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id='tabs'
          name='tabs'
          className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
          defaultValue={categories.find((category) => category.current).name}
        >
          {categories.map((category) => (
            <option key={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <nav
          className='relative z-0 flex divide-x divide-gray-200 rounded-lg shadow'
          aria-label='Tabs'
        >
          {categories.map((category, categoryIdx) => (
            <a
              key={category.name}
              href={category.href}
              className={classNames(
                category.current
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                categoryIdx === 0 ? 'rounded-l-lg' : '',
                categoryIdx === categories.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
              aria-current={category.current ? 'page' : undefined}
            >
              <span>{category.name}</span>
              <span
                aria-hidden='true'
                className={classNames(
                  category.current ? 'bg-indigo-500' : 'bg-transparent',
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
