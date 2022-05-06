import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useModal } from '@/infrastructure/recoil/useModal';

type Inputs = {
  firstName: string;
  email: string;
  company: string;
  phone: string;
  inquiry: string;
};

export default function Form() {
  const { modalOpen } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const submitForm: SubmitHandler<Inputs> = () => {
    if (Object.keys(errors).length !== 0) {
      modalOpen();
      return;
    }
  };
  return (
    <div className='relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32'>
      <div className='lg:pr-8'>
        <div className='mx-auto max-w-md sm:max-w-lg lg:mx-0'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            メッセージ
          </h2>
          <p className='mt-4 text-lg text-gray-500 sm:mt-3'>
            お問い合わせは以下のフォームからお願いいたします。
          </p>
          <form
            action='#'
            method='POST'
            className='mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            onSubmit={handleSubmit(submitForm)}
          >
            <div>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'
              >
                お名前
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  id='firstName'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm'
                  {...register('firstName', {
                    required: 'お名前を入力してください',
                  })}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                メールアドレス
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm'
                  {...register('email', {
                    required: 'メールアドレスを入力してください',
                  })}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <div className='flex justify-between'>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700'
                >
                  会社名
                </label>
                <span
                  id='company'
                  className='rounded-xl bg-teal-600 px-2 text-sm text-white'
                >
                  任意
                </span>
              </div>
              <div className='mt-1'>
                <input
                  type='text'
                  id='company'
                  autoComplete='organization'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm'
                  {...register('company')}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <div className='flex justify-between'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'
                >
                  電話番号 (例：00012345678)
                </label>
                <span
                  id='phone'
                  className='rounded-xl bg-teal-600 px-2 text-sm text-white'
                >
                  任意
                </span>
              </div>
              <div className='mt-1'>
                <input
                  type='text'
                  id='phone'
                  autoComplete='tel'
                  aria-describedby='phone'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm'
                  {...register('phone')}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <div className='flex justify-between'>
                <label
                  htmlFor='inquiry'
                  className='block text-sm font-medium text-gray-700'
                >
                  お問い合わせ内容
                </label>
                <span
                  id='inquiry-description'
                  className='text-sm text-gray-500'
                >
                  500文字以内
                </span>
              </div>
              <div className='mt-1'>
                <textarea
                  id='inquiry'
                  aria-describedby='inquiry-description'
                  rows={4}
                  className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm'
                  defaultValue=''
                  {...register('inquiry', {
                    required: 'お問い合わせ内容を入力してください',
                    maxLength: {
                      value: 500,
                      message: '500文字以内で入力してください',
                    },
                  })}
                />
              </div>
            </div>
            <div className='text-right sm:col-span-2'>
              <button
                type='submit'
                className='inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
                onSubmit={handleSubmit(submitForm)}
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
