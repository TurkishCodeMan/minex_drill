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
      <link rel="icon" href="/minex_beyaz_logo.png" />
      
      {/* SEO için ek meta etiketleri */}
      <meta name="author" content="Minex Drill" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook Meta Etiketleri */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.minexdrill.com/" />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('title')} />
      <meta name="twitter:description" content={t('description')} />
      <meta name="twitter:image" content="/og-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.minexdrill.com" />
    </>
  );
}

export default CustomHead;
