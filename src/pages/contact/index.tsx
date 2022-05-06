import ErrorModal from '@/components/form/ErrorModal';
import Form from '@/components/form/Form';
import Header from '@/components/layout/Header';
import NextImage from '@/components/NextImage';

import { useModal } from '@/infrastructure/recoil/useModal';

export default function Contact() {
  const { modalState, modalToggle } = useModal();
  return (
    <div className='relative bg-white'>
      <Header />
      <div className='lg:absolute lg:inset-0'>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <NextImage
            className='relative h-56 w-full object-cover lg:absolute lg:h-full'
            src='/images/cat4.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <Form />
      <ErrorModal isOpen={modalState} setIsOpen={modalToggle} />
    </div>
  );
}
