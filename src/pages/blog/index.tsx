import { InferGetStaticPropsType } from 'next';
import React, { useState } from 'react';

import CategoryTab from '@/components/CategoryTab';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Paginate from '@/components/Paginate';
import PostList from '@/components/PostList';
import Profile from '@/components/Profile';
import Seo from '@/components/Seo';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Posts({
  posts,
  categories,
  totalCount,
  postLen,
}: Props) {
  const [tabIndex, setTabIndex] = useState(categories[0].id);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header />
      <main className='mt-5'>
        <div className='layout flex min-h-screen flex-col items-center justify-center'>
          <div className='min-h-screen'>
            <Profile />
            <div className='mt-12'>
              <CategoryTab
                categories={categories}
                tabIndex={tabIndex}
                onChange={setTabIndex}
              />
              <div className='mt-14'>
                <PostList posts={posts} />
              </div>
              <div className='mt-14'>
                <Paginate totalCount={totalCount} postLen={postLen} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY },
  };

  const fetchers = [
    fetch(process.env.MICROCMS_BASE_URL + '/blog?offset=0&limit=10', key),
    fetch(process.env.MICROCMS_BASE_URL + '/categories', key),
  ];
  const [postsData, categoriesData] = await Promise.all(fetchers);
  const posts = await postsData.json();
  const categories = await categoriesData.json();

  return {
    props: {
      posts: posts.contents,
      categories: categories.contents,
      totalCount: posts.totalCount,
      postLen: posts.contents.length,
    },
  };
};
