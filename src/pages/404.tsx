import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />
      <Header />
      <main>
        <div className='min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
          <div className='mx-auto max-w-max'>
            <main className='sm:flex'>
              <p className='text-4xl font-extrabold text-teal-500 sm:text-5xl'>
                404
              </p>
              <div className='sm:ml-6'>
                <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                  <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                    Page not found
                  </h1>
                  <p className='mt-1 text-base text-gray-500'>
                    お探しのページは見つかりませんでした。
                  </p>
                </div>
                <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                  <UnstyledLink
                    href='/'
                    className='inline-flex items-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    ホームに戻る
                  </UnstyledLink>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
