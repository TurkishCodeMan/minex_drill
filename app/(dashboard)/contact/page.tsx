'use client';

import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('contact');

  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-8">{t('title')}</h2>
        <div className="max-w-lg mx-auto">
          <form action="https://formsubmit.co/minex@minexdrill.com">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                {t('nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('namePlaceholder')}
                className="border border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                {t('emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                className="border border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                {t('messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t('messagePlaceholder')}
                className="border border-gray-300 p-2 w-full h-32 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t('submitButton')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
