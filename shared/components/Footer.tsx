import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4"><img src='/logo_white.png'/></h2>
                    <p>Minex Drill yurtiçi ve yurtdışı projelerinde deneyimli ve kendisini mesleğine adamış operasyon ekibimizle hizmet vermektedir. Uluslararası standartlarda sondaj hizmetleri sunuyoruz.</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Hızlı Linkler</h2>
                    <ul>
                        <li className="mb-2"><a href="/home" className="hover:underline">Hakkımızda</a></li>
                        <li className="mb-2"><a href="/home" className="hover:underline">Hizmetlerimiz</a></li>
                        <li className="mb-2"><a href="/home" className="hover:underline">Makinalarımız</a></li>
                        <li className="mb-2"><a href="/home" className="hover:underline">İletişim</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">İletişim</h2>
                    <ul>
                        <li className="mb-2">Adres: OSTİM OSB. MAHALLESİ 1125/2. SOKAK NO:10</li>
                        <li className="mb-2">Ostim/Yenimahalle, Ankara - Türkiye</li>
                        <li className="mb-2">Tel: 0312 354 77 71</li>
                        <li className="mb-2">Fax: 0312 354 77 71</li>

                        <li className="mb-2">GSM: 0501 103 06 18</li>
                        <li className="mb-2">Mail: <a href="mailto:minex@minexdrill.com" className="hover:underline">minex@minexdrill.com</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Bizi Arayın</h2>
                    <div className="flex space-x-4">
                        <a href="" className="text-2xl hover:text-red-500"><FaFacebook /></a>
                        <a href="" className="text-2xl hover:text-red-500"><FaTwitter /></a>
                        <a href="" className="text-2xl hover:text-red-500"><FaInstagram /></a>
                        <a href="" className="text-2xl hover:text-red-500"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-center py-4 mt-8">
                <p>&copy; 2024 Minex Drill. Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
}
