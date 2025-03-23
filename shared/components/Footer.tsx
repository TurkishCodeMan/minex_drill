'use client';

import { useTranslations } from 'next-intl';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaFax, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-black text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4"><img src='/logo_white.png' width={180} alt="Minex Drill Logo"/></h2>
                    <p>{t('description')}</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">{t('quickLinks')}</h2>
                    <ul>
                        <li className="mb-2"><a href="/home" className="hover:underline">{t('aboutUs')}</a></li>
                        <li className="mb-2"><a href="/home" className="hover:underline">{t('services')}</a></li>
                        <li className="mb-2"><a href="/home" className="hover:underline">{t('machines')}</a></li>
                        <li className="mb-2"><a href="/home" className="hover:underline">{t('contact')}</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">{t('contactInfo')}</h2>
                    <ul>
                        <li className="mb-2"><FaMapMarkerAlt className="inline-block mr-2"/> {t('address')}</li>
                        <li className="mb-2">{t('cityCountry')}</li>
                        <li className="mb-2"><FaPhone className="inline-block mr-2"/> {t('phone')}</li>
                        <li className="mb-2"><FaFax className="inline-block mr-2"/> {t('fax')}</li>
                        <li className="mb-2"><FaMobileAlt className="inline-block mr-2"/> {t('mobile')}</li>
                        <li className="mb-2"><FaEnvelope className="inline-block mr-2"/> <a href="mailto:minex@minexdrill.com" className="hover:underline">{t('email')}</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">{t('callUs')}</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/minexdrill?mibextid=ZbWKwL" className="text-2xl hover:text-red-500"><FaFacebook /></a>
                        <a href="" className="text-2xl hover:text-red-500"><FaTwitter /></a>
                        <a href="https://www.instagram.com/minexdrill/" className="text-2xl hover:text-red-500"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/minex-drill-53a978234/" className="text-2xl hover:text-red-500"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-center py-4 mt-8">
                <p>{t('allRightsReserved')}</p>
            </div>
        </footer>
    );
}
