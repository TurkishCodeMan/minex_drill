'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTransition } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (locale: string) => {
    Cookies.set('NEXT_LOCALE', locale);
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <div className="flex space-x-2 items-center">
      <button
        onClick={() => changeLanguage("tr")}
        className="bg-red-800 text-white px-3 py-1 rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-300 font-semibold text-sm"
      >
        {"TR"}
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="bg-red-800 text-white px-3 py-1 rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-300 font-semibold text-sm"
      >
        {"EN"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
