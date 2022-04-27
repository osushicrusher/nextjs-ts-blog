import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Profile from '@/components/Profile';
import Seo from '@/components/Seo';

import { Post } from '@/@types/posts';

export default function PostPage({ post }: Post) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <Header />
        <div className='relative overflow-hidden bg-white py-16'>
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-prose text-lg'>
              <div className='flex justify-between'>
                <Profile />
                <NextImage
                  className='h-16 w-16 rounded-full'
                  src={post.img.url}
                  alt=''
                  width={200}
                  height={200}
                />
              </div>
              <h1 className='mt-14 px-1 py-5'>
                <span className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                  {post.title}
                </span>
              </h1>
              <div
                className='mt-14 px-1 py-5'
                dangerouslySetInnerHTML={{
                  __html: `${post.body}`,
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

// 動的なページを作成(PER_PAGEが5なのでtotalCountが20の場合は4つのページを作成)
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(process.env.MICROCMS_BASE_URL + '/blog', key);
  const posts = await data.json();

  const paths = posts['contents'].map((post: Post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY },
  };
  const res = await fetch(
    process.env.MICROCMS_BASE_URL + '/blog/' + `${params.id}`,
    key
  );
  const post = await res.json();

  return { props: { post } };
};
