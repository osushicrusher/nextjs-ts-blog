/**
 * @description API仕様
 * microCMS | APIリファレンス |
 * 現状、Postのimg, categoryの指定は必須にしている
 * https://document.microcms.io/content-api/get-list-contents
 */

interface MicroCMSResponseType {
  contents: Post[];
}

interface Post {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  img: {
    url: string;
    height: number;
    width: number;
  };
  categories: Category[];
  minRead: number;
}

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}
