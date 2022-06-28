import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TruckIcon } from '@heroicons/react/solid';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Parser from 'rss-parser';

import { useProfile } from '@/hooks/useProfile';

import Feeds from '@/components/Feeds';
import HorizontalLinkCard from '@/components/HorizontalLinkCard';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import LogoList from '@/components/LogoList';
import PageHeading from '@/components/PageHeading';
import ProfileCategoryTab from '@/components/ProfileCategoryTab';
import Seo from '@/components/Seo';

type Content = {
  title: string;
  creator: string;
  link: string;
  imageUrl: string;
};

type Props = {
  contents: Content[];
};

export default function ProfilePage({ contents }: Props) {
  const [tabIndex, setTabIndex] = useState<number>(1);
  const {
    practicalWorkLogos,
    hobbyWorkLogos,
    portfolioLogos,
    attachments,
    feed,
    categories,
    profile,
    pageHeadingData,
  } = useProfile();
  return (
    <>
      <Layout>
        <Seo />
        <div className='mx-auto min-h-full px-6 lg:max-w-5xl'>
          <div className='mx-auto max-w-3xl'>
            <Header />
          </div>
          <div className='mx-auto max-w-3xl'>
            <PageHeading profile={pageHeadingData} />
            <ProfileCategoryTab
              categories={categories}
              tabIndex={tabIndex}
              onChange={setTabIndex}
            />
          </div>
          <main>
            <div className='mx-auto grid max-w-3xl grid-cols-1 gap-6 lg:grid-flow-col-dense'>
              <div className={tabIndex !== 1 ? 'hidden' : ''}>
                <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
                  <section aria-labelledby='applicant-information-title'>
                    <div className='bg-white shadow sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6'>
                        <h2
                          id='applicant-information-title'
                          className='text-lg font-medium leading-6 text-gray-900'
                        >
                          基本情報
                        </h2>
                        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                          Personal details
                        </p>
                      </div>
                      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                          <div className='sm:col-span-1'>
                            <dt className='text-sm font-medium text-gray-500'>
                              ポジション
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              {profile.position}
                            </dd>
                          </div>
                          <div className='sm:col-span-1'>
                            <dt className='text-sm font-medium text-gray-500'>
                              メールアドレス
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              {profile.email}
                            </dd>
                          </div>
                          <div className='sm:col-span-1'>
                            <dt className='text-sm font-medium text-gray-500'>
                              年齢
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              {profile.age}
                            </dd>
                          </div>
                          <div className='sm:col-span-1'>
                            <dt className='text-sm font-medium text-gray-500'>
                              趣味
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              {profile.hobby}
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              技術(実務)
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <LogoList logos={practicalWorkLogos} />
                              </div>
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              技術(趣味)
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <LogoList logos={hobbyWorkLogos} />
                              </div>
                            </dd>
                          </div>
                          {/* <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">添付資料</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                  <li
                                    key={attachments.resume.name}
                                    className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                  >
                                    <div className="w-0 flex-1 flex items-center">
                                      <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                      <span className="ml-2 flex-1 w-0 truncate">{attachments.resume.name}</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                      <a href={attachments.resume.href} download={attachments.resume.name} className="font-medium text-blue-600 hover:text-blue-500">
                                        Download
                                    </a>
                                    </div>
                                  </li>
                              </ul>
                            </dd> */}
                          {/* </div> */}
                        </dl>
                      </div>
                    </div>
                  </section>
                </div>

                <section
                  aria-labelledby='timeline-title'
                  className='mt-12 lg:col-span-1 lg:col-start-3'
                >
                  <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
                    <h2
                      id='timeline-title'
                      className='text-lg font-medium text-gray-900'
                    >
                      略歴
                    </h2>
                    <Feeds feeds={feed} />
                  </div>
                </section>
                <div className='mt-12 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
                  <h2
                    id='article-title'
                    className='text-lg font-medium text-gray-900'
                  >
                    記事
                  </h2>
                  <div className='mt-6'>
                    <HorizontalLinkCard contents={contents} />
                  </div>
                </div>
              </div>
              <div className={tabIndex !== 2 ? 'hidden' : ''}>
                <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
                  {/* Description list*/}
                  <section aria-labelledby='applicant-information-title'>
                    <div className='bg-white shadow sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6'>
                        <h2
                          id='applicant-information-title'
                          className='text-lg font-medium leading-6 text-gray-900'
                        >
                          ポートフォリオ
                        </h2>
                        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                          Portfolio
                        </p>
                      </div>
                      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              詳細
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              使用言語はTypeScript、フレームワークにNext.js、CSSフレームワークにTailwindCSS、テスティングフレームワークにJestを使用しています。
                              Blog記事を表示するページはSSGを採用しています。
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              使用技術・ツール
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <LogoList logos={portfolioLogos} />
                              </div>
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            {/* <dt className='text-sm font-medium text-gray-500'>
                              zenn記事
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                                <a
                                  href={attachments.blog.zenn.href}
                                  className='flex py-3 pl-3 pr-4 text-sm'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <NewspaperIcon
                                    className='h-5 w-5 flex-shrink-0 text-gray-400'
                                    aria-hidden='true'
                                  />
                                  <span className='ml-2'>
                                    {attachments.blog.zenn.name}
                                  </span>
                                </a>
                              </div>
                            </dd> */}
                            <dt className='mt-3 text-sm font-medium text-gray-500'>
                              GitHub
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                                <a
                                  href={attachments.blog.github.href}
                                  className='flex py-3 pl-3 pr-4 text-sm'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    className='h-5 w-5 flex-shrink-0 text-gray-400'
                                  />
                                  <span className='ml-2'>
                                    {attachments.blog.github.name}
                                  </span>
                                </a>
                              </div>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>
                  <div className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    {/* <div className="flex justify-center">
                      <TruckIcon
                        className='h-5 w-5 text-black bg-yellow-400'
                      />
                    </div> */}
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                      <TruckIcon
                        className='h-6 w-6 text-green-600'
                        aria-hidden='true'
                      />
                    </div>
                    <span className='mt-2 block text-sm font-medium text-gray-900'>
                      currently working on a new one...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Layout>
    </>
  );
}

// zennのRSS取得する
export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();

  // zenn記事
  const feedZenn = await parser.parseURL('https://zenn.dev/osushioichii/feed');
  const feedZennFixed = feedZenn.items.map((feed) => {
    return {
      title: feed.title,
      creator: feed.creator,
      link: feed.link,
      imageUrl: '/svg/zenn.svg',
      // isoDate: feed.isoDate
    };
  });

  // Medium
  const feedMedium = await parser.parseURL(
    'https://medium.com/feed/@osushicrusher'
  );
  const feedMediumFixed = feedMedium.items.map((feed) => {
    return {
      title: feed.title,
      creator: feed.creator,
      link: feed.link,
      imageUrl: '/svg/medium.svg',
      // isoDate: feed.isoDate
    };
  });

  // wantedly
  const posts = [
    {
      title: '活躍が目覚ましいイデア・レコードの若手エンジニア対談',
      creator: '株式会社イデア・レコード',
      imageUrl: '/svg/Wantedly_Mark_LightBG.svg',
      link: 'https://www.wantedly.com/companies/idearecord2/post_articles/395397',
      // isoDate: '2021-08-21T05:03:49.000Z'
    },
  ];

  return {
    props: {
      contents: [...posts, ...feedZennFixed, ...feedMediumFixed],
    },
  };
};
