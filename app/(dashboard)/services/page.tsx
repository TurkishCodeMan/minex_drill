import React from 'react';

const servicesData: any[] = [
  {
    title: 'Wireline Yüzey Maden Karotlu Sondajlar',
    description: 'Wireline Yüzey Maden Karotlu Sondajlar, yüzeyde gerçekleştirilen karotlu sondaj hizmetleridir.',
    imageUrl: '/c4.jpeg',
  },
  {
    title: 'Wireline Yer altı Maden Karotlu Sondajlar',
    description: 'Wireline Yer altı Maden Karotlu Sondajlar, yer altında gerçekleştirilen karotlu sondaj hizmetleridir.',
    imageUrl: '/c5.jpeg',
  },
  {
    title: 'Havalı ve Çamurlu Rotary Sondajlar',
    description: 'Havalı ve Çamurlu Rotary Sondajlar, hava ve çamur kullanılarak gerçekleştirilen döner sondaj hizmetleridir.',
    imageUrl: '/c6.jpeg',
  },
  {
    title: 'Konvansiyonel Karotlu Sondajlar',
    description: 'Konvansiyonel Karotlu Sondajlar, geleneksel yöntemlerle gerçekleştirilen karotlu sondaj hizmetleridir.',
    imageUrl: '/c7.jpeg',
  },
  {
    title: 'Ters Sirkülasyon Sondajlar',
    description: 'Ters Sirkülasyon Sondajlar, ters sirkülasyon yöntemi ile gerçekleştirilen sondaj hizmetleridir.',
    imageUrl: '/c8.jpeg',
  },
  {
    title: 'Tenör Kontrolü Amaçlı Hızlı Sondajlar',
    description: 'Tenör Kontrolü Amaçlı Hızlı Sondajlar, hızlı bir şekilde tenör kontrolü yapılması için gerçekleştirilen sondaj hizmetleridir.',
    imageUrl: '/c9.jpeg',
  },
  {
    title: 'Jeoteknik Sondaj Hizmetlerimiz',
    description: 'Jeoteknik Sondaj Hizmetlerimiz, jeoteknik amaçlarla gerçekleştirilen sondaj hizmetleridir.',
    imageUrl: '/c11.jpeg',
  },
];

const Services = () => {
  return (
    <main className="min-h-screen p-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Sondaj Hizmetlerimiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={service.imageUrl}
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
