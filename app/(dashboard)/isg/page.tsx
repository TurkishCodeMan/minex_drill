'use client';

import { useTranslations } from 'next-intl';

const ISGveCevre = () => {
  const t = useTranslations('isgveCevre');

  return (
    <div className="bg-white py-16 min-h-screen relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-8">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="pr-8 flex justify-around flex-col">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('healthSafetyTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('healthSafetyText')}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('environmentTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('environmentText')}
              </p>
            </div>
          </div>
          <div className="w-full ">
          <img
              src="/isg.jpeg"
              className="rounded-lg mb-4"
              alt={t('title')}
            />
          
            <img
              src="/a9.png"
              className="rounded-lg mb-4"
              alt={t('title')}
            />
         
            <img
              src="/a11.png"
              className="rounded-lg mb-4"
              alt={t('title')}
            />
            
            

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISGveCevre;
