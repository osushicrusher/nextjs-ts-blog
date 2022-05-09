import { EmojiHappyIcon, MailIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import Action from '@/components/Action';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
// import ImageList from '@/components/ImageList';
import Layout from '@/components/layout/Layout';
import Modal from '@/components/Modal';
import PageHeading from '@/components/PageHeading';
import Seo from '@/components/Seo';

export default function Home() {
  const actions = [
    {
      title: 'Profile',
      href: '/profile',
      icon: EmojiHappyIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      description: '僕の情報はこちらです',
      active: true,
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: MailIcon,
      iconForeground: 'text-amber-700',
      iconBackground: 'bg-amber-50',
      description: 'ご連絡はこちらからお願いいたします',
      active: true,
    },
    // {
    //   title: 'Blogs',
    //   href: '#',
    //   icon: BookOpenIcon,
    //   iconForeground: 'text-teal-700',
    //   iconBackground: 'bg-teal-50',
    //   description: '技術や自身のことに関してまとめたものです(準備中)',
    //   active: false,
    // },
    // {
    //   title: 'Icons',
    //   href: '#',
    //   icon: LightningBoltIcon,
    //   iconForeground: 'text-purple-700',
    //   iconBackground: 'bg-purple-50',
    //   description: '趣味で作っているアイコンやイラスト・ロゴなど(準備中)',
    //   active: false,
    // },
  ];
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Layout>
      <Seo />
      <Header />
      <main className='mt-5'>
        <div className='layout flex min-h-screen flex-col items-center justify-center'>
          <div className='min-h-screen'>
            <PageHeading />
            <div className='mt-14'>
              <Action actions={actions} isOpen={open} setIsOpen={setOpen} />
            </div>
          </div>
          <Footer />
        </div>
        <Modal isOpen={open} setIsOpen={setOpen} />
      </main>
    </Layout>
  );
}
