"use client";

import { useTranslations } from 'next-intl';

const QualityPolicy = () => {
  const t = useTranslations('qualityPolicy');

  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-8">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="flex flex-col justify-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('qualityUnderstanding')}</h3>
              {t.raw('qualityUnderstandingText').map((text: string, index: number) => (
                <p key={index} className="text-gray-600 mb-6">{text}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start float-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('qualityStandards')}</h3>
              {t.raw('qualityStandardsText').map((text: string, index: number) => (
                <p key={index} className="text-gray-600 mb-6">{text}</p>
              ))}
            </div>
          </div>
          <div>
            <img src="/c8.jpeg" alt={t('title')} className="rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start float-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('qualityStandards')}</h3>
              {t.raw('qualityStandardsText').map((text: string, index: number) => (
                <p key={index} className="text-gray-600 mb-6">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy;
