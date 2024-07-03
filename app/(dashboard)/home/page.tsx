'use client';

import { useTranslations } from 'next-intl';
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/custom_swiper.css";

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        navigation
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 12000, disableOnInteraction: true }}
        className="relative z-10"
      >
        <SwiperSlide
          className="bg-cover  min-h-screen flex items-center justify-center md:bg-bottom"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/a6.jpeg')",
          }}
        >
          <div className=''>            <img src="/logo_blue.png" alt="Bars" className="w-32 h-auto absolute right-0 top-1/2 mr-20 -rotate-12" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-bold my-2 text-white z-10 animate-fade-in">
                      {t('professionalSolutions')}
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in mb-40">
                  {t('buildingFuture')}
                </p>
               
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-cover min-h-screen flex items-center justify-center md:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/c15.jpeg')",
          }}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-bold my-2 text-white z-10 animate-fade-in">
                      {t('innovativeTechnology')}
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  {t('investFuture')}
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-contain min-h-screen flex items-center justify-center md:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/d10.jpg')",
          }}
        >
       
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-bold my-2 text-white z-10 animate-fade-in">
                      {t('qualityService')}
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  {t('qualityServiceDesc')}
                </p>
             
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>

        {/* <SwiperSlide
          className="bg-cover min-h-screen flex items-center justify-center md:bg-bottom"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('/a7.jpeg')",
          }}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-thin my-2 text-white z-10 animate-fade-in">
                      {t('solutionFocus')}
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  {t('solutionFocusDesc')}
                </p>
                <a
                  href="/about"
                  className="relative inline-block mt-8 px-6 py-3 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-md">{t('details')}</span>
                  <div className="absolute hover:bg-black rounded-md inset-0 bg-red-800 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide> */}

        <SwiperSlide
          className="bg-cover min-h-screen flex items-center justify-center md:bg-bottom"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/d8.JPG')",
          }}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-bold my-2 text-white z-10 animate-fade-in">
                      Cevherin Peşinde
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  {t('solutionFocusDesc')}
                </p>
              
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-contain min-h-screen flex items-center justify-center md:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/d7.jpeg')",
          }}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-bold my-2 text-white z-10 animate-fade-in">
                      {t('solutionFocus')}
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  {t('solutionFocusDesc')}
                </p>
              
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
