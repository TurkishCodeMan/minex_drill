const ISGveCevre = () => {
    return (
      <div className="bg-white py-16 min-h-screen relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8">İş Sağlığı, Güvenliği ve Çevre Politikamız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="pr-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">İş Sağlığı ve Güvenliği</h3>
                <p className="text-gray-600 mb-6">
                  Minex Drill olarak, iş sağlığı ve güvenliği konusunu en üst düzeyde tutmayı taahhüt ediyoruz. Tüm çalışanlarımızın güvenliğini sağlamak için sürekli olarak eğitimler düzenliyor ve iş güvenliği standartlarına tam uyum sağlıyoruz.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Çevre Politikamız</h3>
                <p className="text-gray-600 mb-6">
                  Çevre koruması, Minex Drill in öncelikli hedeflerinden biridir. Faaliyetlerimizi sürdürürken, çevreye zarar vermemek ve doğal kaynakları korumak için gereken tüm önlemleri alıyoruz. Sürdürülebilir çevre politikaları benimseyerek, gelecek nesillere temiz bir çevre bırakmayı amaçlıyoruz.
                </p>
              </div>
            </div>
            <div className="w-full ">
            <img
                src="/a9.png"
                className="rounded-lg mb-4"
                alt="İş Sağlığı, Güvenliği ve Çevre"
              />
                     <img
                src="/a11.png"
                className="rounded-lg mb-4"
                alt="İş Sağlığı, Güvenliği ve Çevre"
              />
              <img
                src="/a12.png"
                className="rounded-lg absolute right-0 top-0  md:w-40 md:h-32 w-24 h-12"
                alt="İş Sağlığı, Güvenliği ve Çevre"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ISGveCevre;
  