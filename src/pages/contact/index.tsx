import ErrorModal from '@/components/form/ErrorModal';
import Form from '@/components/form/Form';
import Modal from '@/components/form/Modal';
import Header from '@/components/layout/Header';
import NextImage from '@/components/NextImage';

import { Inputs } from '@/@types/form';
import { useErrorModal } from '@/infrastructure/recoil/useErrorModal';
import { useModal } from '@/infrastructure/recoil/useModal';

export default function Contact() {
  const { modalState, modalToggle } = useModal();
  const { errorModalState, errorModalToggle } = useErrorModal();
  const sendMail = async (data: Inputs) => {
    try {
      const res = await fetch('api/sendMail', {
        body: JSON.stringify({ data }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      return await res.json();
    } catch (err) {
      // console.error(err);
    }
  };
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
      <Form onSubmit={sendMail} />
      <ErrorModal isOpen={errorModalState} setIsOpen={errorModalToggle} />
      <Modal isOpen={modalState} setIsOpen={modalToggle} />
    </div>
  );
}
