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
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage("tr")}
        className="text-red-800 hover:text-yellow-500"
      >
        {"TR"}
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="text-red-800 hover:text-yellow-500"
      >
        {"EN"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
