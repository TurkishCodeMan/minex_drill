"use client";

import dynamic from "next/dynamic";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/custom_swiper.css";

export default function Home() {
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
          className="bg-cover  min-h-screen flex items-center justify-center md:bg-center"
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
                      Profesyonel Çözümler
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  Sorumluluğumuzun bilinciyle yarını bugünden inşa ediyoruz.
                </p>
                <a
                  href="/machines"
                  className="relative inline-block mt-8 px-6 py-3 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-md">Makinalarımız</span>
                  <div className="absolute hover:bg-black rounded-md inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
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
              "linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('/c15.jpeg')",
          }}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-6xl font-thin my-2 text-white z-10 animate-fade-in">
                      Yenilikçi Teknoloji
                    </p>
                  </div>
                </div>
                <p className="text-xl mt-4 text-white relative z-10 animate-fade-in">
                  En son teknoloji ile donatılmış makinelerimizle geleceğe
                  yatırım yapın.
                </p>
                <a
                  href="/about"
                  className="relative inline-block mt-8 px-6 py-3 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-md">Detaylar</span>
                  <div className="absolute hover:bg-black rounded-md inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
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
