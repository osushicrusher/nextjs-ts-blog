/* This example requires Tailwind CSS v2.0+ */
import NextImage from '@/components/NextImage';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

export default function Example() {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {people.map((person) => (
        <li
          key={person.email}
          className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
        >
          <div className='flex flex-1 flex-col p-8'>
            <NextImage
              className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
              src={person.imageUrl}
              alt=''
              width={80}
              height={80}
            />
            <h3 className='mt-6 text-sm font-medium text-gray-900'>
              {person.name}
            </h3>
            <dl className='mt-1 flex flex-grow flex-col justify-between'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-sm text-gray-500'>{person.title}</dd>
              <dt className='sr-only'>Role</dt>
              <dd className='mt-3'>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'>
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
