'use client';

import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('about');

  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-8">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('whoWeAreTitle')}</h3>
              {t.raw('whoWeAre').map((text:any, index:any) => (
                <p key={index} className="text-gray-600 mb-6">{text}</p>
              ))}
            </div>
          </div>
          <div>
            <img src="/c12.jpeg" alt="Minex Drill" className="rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('whatWeDoTitle')}</h3>
              {t.raw('whatWeDo').map((text:any, index:any) => (
                <p key={index} className="text-gray-600 mb-6">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
