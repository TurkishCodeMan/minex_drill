'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ISGveCevre = () => {
  const t = useTranslations('isgveCevre');

  return (
    <div className="bg-white py-16 min-h-screen relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">{t('title')}</h2>
        
        <div className="space-y-16">
          {/* İş Sağlığı ve Güvenliği Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">{t('healthSafetyTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('healthSafetyText')}
              </p>
            </div>
            <div className="relative mx-auto max-w-[800px] w-full">
              <div className="h-[750px] relative">
                <Image
                  src="/baret.jpeg"
                  fill
                  className="rounded-lg shadow-lg"
                  alt={t('healthSafetyTitle')}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Çevre Politikası Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1 relative mx-auto max-w-[800px] w-full">
              <div className="h-[750px] relative">
                <Image
                  src="/kelebek.jpeg"
                  fill
                  className="rounded-lg shadow-lg"
                  alt={t('environmentTitle')}
                  priority
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">{t('environmentTitle')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('environmentText')}
              </p>
            </div>
          </div>

          {/* Genel ISG Görüntüsü */}
          <div className="mt-12 relative mx-auto max-w-[800px]">
            <div className="h-[900px] relative">
              <Image
                src="/isg.jpeg"
                fill
                className="rounded-lg shadow-lg"
                alt={t('title')}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISGveCevre;
