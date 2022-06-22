import { Dispatch, SetStateAction } from 'react';

type ActionType = {
  title: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  iconForeground: string;
  iconBackground: string;
  description: string;
  active: boolean;
};

type Props = {
  actions: ActionType[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Action({ actions, isOpen, setIsOpen }: Props) {
  return (
    <div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0'>
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            action.active ? 'bg-white' : 'bg-slate-100',
            'group relative  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-500'
          )}
          onClick={() => (!action.active ? setIsOpen(!isOpen) : false)}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white'
              )}
            >
              <action.icon className='h-6 w-6' aria-hidden='true' />
            </span>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-medium'>
              <a href={action.href} className='focus:outline-none'>
                {/* Extend touch target to entire panel */}
                <span className='absolute inset-0' aria-hidden='true' />
                {action.title}
              </a>
            </h3>
            <p className='mt-2 text-sm text-gray-500'>{action.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
