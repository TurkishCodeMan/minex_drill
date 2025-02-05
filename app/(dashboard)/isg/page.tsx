'use client';

import { useTranslations } from 'next-intl';

const ISGveCevre = () => {
  const t = useTranslations('isgveCevre');

  return (
    <div className="bg-white py-16 min-h-screen relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">{t('title')}</h2>
        
        <div className="space-y-16">
          {/* Sağlık ve Güvenlik Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="pr-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{t('healthSafetyTitle')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('healthSafetyText')}
              </p>
            </div>
            <div className="w-full">
              <img
                src="/baret.jpeg"
                className="rounded-lg shadow-lg w-full object-cover h-[300px]"
                alt={t('healthSafetyTitle')}
              />
            </div>
          </div>

          {/* Çevre Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/kelebek.jpeg"
                className="rounded-lg shadow-lg w-full object-cover h-[300px]"
                alt={t('environmentTitle')}
              />
            </div>
            <div className="order-1 md:order-2 pl-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{t('environmentTitle')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('environmentText')}
              </p>
            </div>
          </div>

          {/* Genel ISG Görüntüsü */}
          <div className="mt-8">
            <img
              src="/isg.jpeg"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              alt={t('title')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISGveCevre;
