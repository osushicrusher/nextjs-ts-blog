import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  TruckIcon,
} from '@heroicons/react/solid';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Parser from 'rss-parser';

import HorizontalLinkCard from '@/components/HorizontalLinkCard';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
// import ImageList from '@/components/ImageList'
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import PageHeading from '@/components/PageHeading';
import ProfileCategoryTab from '@/components/ProfileCategoryTab';
// import Profile from '@/components/Profile';
import Seo from '@/components/Seo';

import classNames from '@/utils/classNames';

const attachments = {
  resume: { name: '職務経歴書_吉野光.pdf', href: '/doc/resume.pdf' },
  blog: {
    zenn: {
      name: 'Next.js + TypeScript + tailwindcss + microCMSで作るJamstackなブログ',
      href: 'https://zenn.dev/',
    },
    github: {
      name: 'osushicrusher/nextjs-ts-blog',
      href: 'https://github.com/osushicrusher/nextjs-ts-blog',
    },
  },
  wordle: {
    zenn: {
      name: 'Next.js + TypeScriptでwordleを作る',
      href: 'https://zenn.dev/',
    },
    github: {
      name: 'osushicrusher/nextjs-ts-recoil-wordle',
      href: 'https://github.com/osushicrusher/nextjs-ts-recoil-wordle',
    },
  },
};

const eventTypes = {
  schoolStart: { icon: AcademicCapIcon, bgColorClass: 'bg-blue-500' },
  schoolEnd: { icon: AcademicCapIcon, bgColorClass: 'bg-green-500' },
  work: { icon: BriefcaseIcon, bgColorClass: 'bg-blue-500' },
};
const timeline = [
  {
    id: 1,
    type: eventTypes.work,
    target: '株式会社イデア・レコード 入社・現職',
    date: '2021年4月〜',
    datetime: '2021-04',
  },
  {
    id: 2,
    type: eventTypes.schoolEnd,
    target: '地方国立大学 卒業',
    date: '2021年3月',
    datetime: '2021-03',
  },
  {
    id: 3,
    type: eventTypes.schoolStart,
    target: '地方国立大学 入学',
    date: '2017年4月',
    datetime: '2017-04',
  },
];

const categories = [
  {
    id: 1,
    name: 'プロフィール',
    current: true,
  },
  {
    id: 2,
    name: '制作物',
    current: false,
  },
];

const profile = {
  position: 'Front End Developer',
  email: 'yoshi2no55@gmail.com',
  age: 23,
  hobby: '🐈, ☕️',
  description:
    'フロントエンドの技術に興味があり,日々勉強しています。最近は特にNext.jsとTypeScriptの勉強中です。',
};

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
  return (
    <>
      <Layout>
        <Seo />
        <div className='min-h-full'>
          <Header />
          <div className='mx-auto max-w-3xl'>
            <PageHeading />
            <ProfileCategoryTab
              categories={categories}
              tabIndex={tabIndex}
              onChange={setTabIndex}
            />
          </div>
          <main>
            <div className='mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-5xl lg:grid-flow-col-dense'>
              <div className={tabIndex !== 1 ? 'hidden' : ''}>
                <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
                  {/* Description list*/}
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
                              詳細
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              {profile.description}
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              技術(実務)
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/html.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/css.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/javascript.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/php.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/vuejs.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/cakephp.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/laravel.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                              </div>
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              技術(趣味)
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/react.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/nextjs.svg'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/nuxt.svg'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/typescript.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
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
                          {/* <ImageList /> */}
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
                    <div className='mt-6 flow-root'>
                      <ul role='list' className='-mb-8'>
                        {timeline.map((item, itemIdx) => (
                          <li key={item.id}>
                            <div className='relative pb-8'>
                              {itemIdx !== timeline.length - 1 ? (
                                <span
                                  className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                                  aria-hidden='true'
                                />
                              ) : null}
                              <div className='relative flex space-x-3'>
                                <div>
                                  <span
                                    className={classNames(
                                      item.type.bgColorClass,
                                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'
                                    )}
                                  >
                                    <item.type.icon
                                      className='h-5 w-5 text-white'
                                      aria-hidden='true'
                                    />
                                  </span>
                                </div>
                                <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                                  <div>
                                    <p className='text-sm text-gray-500'>
                                      <a
                                        href='#'
                                        className='font-medium text-gray-900'
                                      >
                                        {item.target}
                                      </a>
                                    </p>
                                  </div>
                                  <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                                    <time dateTime={item.datetime}>
                                      {item.date}
                                    </time>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                              今ご覧になられているこのWebサイトです。使用言語はTypeScript、フレームワークにNext.js、CSSフレームワークにTailwindCSS、テスティングフレームワークにJestを使用しています。
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              使用技術・ツール
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/nextjs.svg'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/typescript.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/tailwindcss.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/jest.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/prettier.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/eslint.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/vscode.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
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
                  {/* <section aria-labelledby='applicant-information-title'>
                    <div className='bg-white shadow sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6'>
                        <h2
                          id='applicant-information-title'
                          className='text-lg font-medium leading-6 text-gray-900'
                        >
                          自作Wordle
                        </h2>
                        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                          Self-made Wordle
                        </p>
                      </div>
                      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              詳細
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              Wordleを1日に何問でも解きたかったので作ってみました。CPUとの対戦では評価関数を作成し、より少ない手数で正解にたどり着くように工夫しました。
                              まだまだ弱いので改善が必要です。。。
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='text-sm font-medium text-gray-500'>
                              使用技術・ツール
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='flex text-2xl'>
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/react.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/typescript.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/tailwindcss.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/prettier.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/eslint.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                                <NextImage
                                  className='mr-3 h-6 w-6'
                                  src='/images/vscode.png'
                                  width='160'
                                  height='160'
                                  alt='Icon'
                                />
                              </div>
                            </dd>
                          </div>
                          <div className='sm:col-span-2'>
                            <dt className='mt-3 text-sm font-medium text-gray-500'>
                              GitHub
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                              <div className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                                <a
                                  href={attachments.wordle.github.href}
                                  className='flex py-3 pl-3 pr-4 text-sm'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    className='h-5 w-5 flex-shrink-0 text-gray-400'
                                  />
                                  <span className='ml-2'>
                                    {attachments.wordle.github.name}
                                  </span>
                                </a>
                              </div>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section> */}
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
