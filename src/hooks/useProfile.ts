import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/solid';

export const useProfile = () => {
  const practicalWorkLogos = [
    // {
    //   style: 'mr-3 h-6 w-6',
    //   src: '/images/html.png',
    //   width: '160',
    //   height: '160',
    //   alt: 'Icon',
    // },
    // {
    //   style: 'mr-3 h-6 w-6',
    //   src: '/images/css.png',
    //   width: '160',
    //   height: '160',
    //   alt: 'Icon',
    // },
    // {
    //   style: 'mr-3 h-6 w-6',
    //   src: '/images/javascript.png',
    //   width: '160',
    //   height: '160',
    //   alt: 'Icon',
    // },
    // {
    //   style: 'mr-3 h-6 w-6',
    //   src: '/images/php.png',
    //   width: '160',
    //   height: '160',
    //   alt: 'Icon',
    // },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/vuejs.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/cakephp.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/laravel.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
  ];

  const hobbyWorkLogos = [
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/react.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/nextjs.svg',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/nuxt.svg',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/typescript.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
  ];

  const portfolioLogos = [
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/nextjs.svg',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/typescript.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/tailwindcss.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/jest.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/prettier.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/eslint.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
    {
      style: 'mr-3 h-6 w-6',
      src: '/images/vscode.png',
      width: '160',
      height: '160',
      alt: 'Icon',
    },
  ];

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

  const feed = [
    {
      id: 1,
      icon: BriefcaseIcon,
      color: 'bg-blue-500',
      title: '株式会社イデア・レコード 入社・現職',
      date: '2021年4月〜',
    },
    {
      id: 2,
      icon: AcademicCapIcon,
      color: 'bg-blue-500',
      title: '地方国立大学 卒業',
      date: '2021年3月',
    },
    {
      id: 3,
      icon: AcademicCapIcon,
      color: 'bg-green-500',
      title: '地方国立大学 入学',
      date: '2017年4月',
    },
  ];

  const categories = [
    {
      id: 1,
      name: 'プロフィール',
    },
    {
      id: 2,
      name: '制作物',
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

  const pageHeadingData = {
    name: 'Hikaru Yoshino',
    avatar: '/images/profilephoto.jpeg',
    backgroundImage: '/images/cat5.jpg',
  };

  return {
    practicalWorkLogos,
    hobbyWorkLogos,
    portfolioLogos,
    attachments,
    feed,
    categories,
    profile,
    pageHeadingData,
  };
};
