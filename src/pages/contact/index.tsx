import Header from '@/components/layout/Header';
import NextImage from '@/components/NextImage';

export default function Contact() {
  return (
    <div className='relative bg-white'>
      <Header />
      <div className='lg:absolute lg:inset-0'>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <NextImage
            className='h-56 w-full object-cover lg:absolute lg:h-full'
            src='/images/cat4.jpg'
            alt=''
          />
        </div>
      </div>
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
            >
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  お名前
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700'
                >
                  会社名
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='company'
                    id='company'
                    autoComplete='organization'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700'
                  >
                    電話番号
                  </label>
                  <span
                    id='phone-description'
                    className='text-sm text-gray-500'
                  >
                    任意
                  </span>
                </div>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    aria-describedby='phone-description'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='how-can-we-help'
                    className='block text-sm font-medium text-gray-700'
                  >
                    お問い合わせ内容
                  </label>
                  <span
                    id='how-can-we-help-description'
                    className='text-sm text-gray-500'
                  >
                    500文字以内
                  </span>
                </div>
                <div className='mt-1'>
                  <textarea
                    id='how-can-we-help'
                    name='how-can-we-help'
                    aria-describedby='how-can-we-help-description'
                    rows={4}
                    className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    defaultValue=''
                  />
                </div>
              </div>
              <div className='text-right sm:col-span-2'>
                <button
                  type='submit'
                  className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
