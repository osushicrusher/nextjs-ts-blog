import NextImage from '@/components/NextImage';

type Props = {
  text: string;
};

export default function BadgeWithIcon({ text }: Props) {
  return (
    <>
      <span className='inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800'>
        <NextImage
          className='relative mr-2 h-5 w-5 rounded-full'
          src='/svg/bmc-logo.svg'
          alt=''
          layout='fill'
          objectFit='cover'
        />
        {text}
      </span>
    </>
  );
}
