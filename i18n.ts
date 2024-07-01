import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const locale = cookies().get('NEXT_LOCALE')?.value || 'tr';

  return {
    locale,
    messages: (await import(`./app/messages/${locale}.json`)).default
  };
});
