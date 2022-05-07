/**
 * @description
 * お問い合わせフォーム
 * 会社名・電話番号は任意
 */

export type Inputs = {
  firstName: string;
  email: string;
  company?: string;
  phone?: string;
  inquiry: string;
};
