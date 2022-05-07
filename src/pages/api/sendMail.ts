import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg: MailDataRequired = {
    to: process.env.SENDGRID_MAIL_TO,
    from: req.body.data.email,
    subject: `${req.body.data.company}${req.body.data.firstName}さんからのお問い合わせ 電話番号：${req.body.data.phone}`,
    text: req.body.data.inquiry,
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    res.status(500).json(err);
  }
}
