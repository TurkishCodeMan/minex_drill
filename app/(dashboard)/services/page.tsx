'use client';

import { useTranslations } from 'next-intl';

const servicesData = [
  {
    imageUrl: '/a1.jpeg',
  },
  {
    imageUrl: '/a14.png',
  },
  {
    imageUrl: '/a4.jpeg',
  },
  {
    imageUrl: '/c7.jpeg',
  },
  {
    imageUrl: '/d6.jpeg',
  },
  {
    imageUrl: '/c9.jpeg',
  },
  {
    imageUrl: '/a6.jpeg',
  },
  {
    imageUrl: '/a2.JPG',
  },
];

const Services = () => {
  const t = useTranslations('services');
  const servicesList = t.raw('serviceList');

  return (
    <main className="min-h-screen p-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">{t('title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesList.map((service: any, index: any) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={servicesData[index].imageUrl}
                alt={service.title}
                className="mb-4 w-32 h-32 object-cover rounded-full"
              />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
