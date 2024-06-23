const QualityPolicy = () => {
    return (
      <div className="bg-white py-16 min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Kalite Politikamız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Kalite Anlayışımız</h3>
                <p className="text-gray-600 mb-6">
                  Minex Drill olarak, müşterilerimize en üst düzey kalitede hizmet sunmayı hedefliyoruz. Bu hedef doğrultusunda, sürekli iyileştirme ve müşteri memnuniyetini ön planda tutuyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Kalite standartlarımızı yükseltmek için ekip olarak çalışıyor, süreçlerimizi sürekli gözden geçiriyor ve yenilikçi yaklaşımlar benimsiyoruz.
                </p>
                <p className="text-gray-600">
                  Müşterilerimizin beklentilerini karşılamak ve aşmak için kalite politikamızı sürekli olarak gözden geçiriyor ve güncelliyoruz.
                </p>
              </div>
            </div>
            <div>
              <img src="/c8.jpeg" alt="Kalite Politikamız" className="rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Kalite Standartlarımız</h3>
                <p className="text-gray-600 mb-6">
                  Minex Drill olarak, uluslararası kalite standartlarına ve yerel yönetmeliklere tam uyum sağlıyoruz. Her projede, kalite kontrol ve güvencesine büyük önem veriyoruz.
                </p>
                <p className="text-gray-600">
                  Tüm çalışanlarımız, kalite standartlarını korumak ve geliştirmek için sürekli eğitim almakta ve bu standartları iş süreçlerimize entegre etmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default QualityPolicy;
  