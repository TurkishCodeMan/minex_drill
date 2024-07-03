'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

const CustomHead = () => {
  const t = useTranslations('head');

  return (
    <>
      <title>{t('title')}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <link rel="icon" href="/logo.png" />
    </>
  );
}

export default CustomHead;
