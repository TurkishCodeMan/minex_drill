const AboutUs = () => {
    return (
      <div className="bg-white py-16 min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Hakkımızda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Kimiz?</h3>
                <p className="text-gray-600 mb-6">
                  Minex Drill, yurtiçi ve yurtdışı projelerde uzmanlaşmış, deneyimli ve kendini işine adamış bir ekip tarafından yönetilen, uluslararası standartlarda sondaj hizmetleri sunan bir şirkettir.
                </p>
                <p className="text-gray-600 mb-6">
                  Uzman ekibimiz, en son teknoloji ve yenilikçi yöntemleri kullanarak, müşterilerimizin projelerini zamanında ve bütçeye uygun şekilde tamamlamaktadır.
                </p>
                <p className="text-gray-600">
                  Misyonumuz, sektörde lider konumda kalmak ve müşterilerimize en yüksek kalitede hizmet sunmaktır.
                </p>
              </div>
            </div>
            <div>
              <img src="/c12.jpeg" alt="Minex Drill" className="rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Ne Yapıyoruz?</h3>
                <p className="text-gray-600 mb-6">
                  Minex Drill, geniş bir yelpazede sondaj hizmetleri sunmaktadır. Bunlar arasında maden sondajı, jeotermal sondaj, su sondajı bulunmaktadır.
                </p>
                <p className="text-gray-600 mb-6">
                  Projelerimizde, çevresel sürdürülebilirliği ve iş güvenliğini ön planda tutuyoruz. Her projede, yerel ve uluslararası standartlara uygun hareket ediyoruz.
                </p>
                <p className="text-gray-600">
                  Yenilikçi yaklaşımımız ve teknolojik altyapımız ile müşterilerimize en iyi çözümleri sunmayı hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  