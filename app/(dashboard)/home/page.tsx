"use client";

import { useTranslations } from "next-intl";
import { Navigation, Pagination, Autoplay, Keyboard, Scrollbar, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./styles/custom_swiper.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from 'swiper';

// Daktilo animasyonu için geliştirilmiş özel bileşen
const TypewriterText = ({ text, key, isRight }: { text: string, key: number, isRight?: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Yeni key geldiğinde animasyonu sıfırla
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [key]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 35); // Yazma hızını biraz artırdım (50'den 35'e)
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  const alignmentClass = isRight ? "items-end justify-end" : "items-center justify-center";

  return (
    <motion.div 
      className={`min-h-[80px] flex ${alignmentClass} mb-2`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className={`text-white text-base md:text-lg font-serif italic font-semibold ${isRight ? 'text-right' : 'text-center'} max-w-[950px] drop-shadow-lg whitespace-nowrap`}>
        {displayText}
        <motion.span 
          animate={{ opacity: isComplete ? 0 : 1 }}
          transition={{ duration: 0.5, repeat: !isComplete ? Infinity : 0, repeatType: "reverse" }}
        >|</motion.span>
      </p>
    </motion.div>
  );
};

// Slide için gelişmiş içerik komponenti
const SlideContent = ({ index, currentIndex, imageUrl, alt }: { 
  index: number, 
  currentIndex: number, 
  imageUrl: string, 
  alt: string 
}) => {
  // Animasyonun sırası için gecikmeli çalışma
  const isActive = index === currentIndex;
  
  // Son iki slayt için özel class tanımı
  const isSpecialSlide = index === 7 || index === 8; // 8.png ve sertifika.png için
  const objectFitClass = isSpecialSlide ? "object-fill" : "object-cover";
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isActive && (
        <div className="w-full h-full">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            priority
            quality={100}
            className={`${objectFitClass} object-center`}
          />
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("home");
  
  // Her slide için farklı metinler
  const slideTexts = [
    t("slide1"),
    t("slide2"),
    t("slide3"),
    t("slide4"),
    t("slide5"),
    t("slide6"),
    t("slide7"),
    t("slide8"),
    t('slide9')
  ];

  // Slidelardaki görseller
  const slideImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/sertifika.png"
  ];

  // Pozisyon kontrolü - tek sayılarda sol, çift sayılarda sağ
  const isPositionRight = activeIndex % 2 === 1;
  const positionClass = isPositionRight 
    ? "right-6 md:right-8  left-auto text-right" 
    : "left-6 md:left-8 right-auto text-left";

  const pb_margin=isPositionRight?"mb-12":'mb-6'
  return (
    <section className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <div className="w-full h-screen">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay, Scrollbar, A11y, EffectFade]}
          navigation={true}
          effect="fade"
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,  // Kullanıcı etkileşiminde bile otomatik oynatmaya devam et
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true, // Dinamik pagination noktaları
          }}
          className="w-full h-full"
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        >
          {slideImages.map((img, index) => (
            <SwiperSlide key={index} className="relative w-full h-screen">
              <SlideContent 
                index={index} 
                currentIndex={activeIndex} 
                imageUrl={img} 
                alt={t(`slideAlt${index + 1}`)} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Logo - dönüşümlü pozisyonlarla */}
      <AnimatePresence mode="wait">
        {activeIndex !== 7 && activeIndex!=5 && activeIndex !== 8 && (
          <motion.div
            key={`logo-${activeIndex}`}
            initial={{ x: isPositionRight ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isPositionRight ? 50 : -50, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.3 
            }}
            className={`absolute ${positionClass}  z-30 pb-5 ${isPositionRight ? 'pr-12 -bottom-8' : 'pl-12 bottom-0'}`}
          >
            <Image 
              src="/minex_beyaz_logo.png"
              alt={t("logoAlt") || "Minex Drill Logo"}
              width={120} 
              height={70}
              className="object-contain drop-shadow-2xl mb-2 scale-x-75"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Yazı animasyonu - dönüşümlü pozisyonlarla */}
      <AnimatePresence mode="wait">
        {activeIndex !== 7 && (
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`absolute ${positionClass} bottom-0 z-30 p-2 max-w-[800px] ${activeIndex==5?'pb-6':''}`}
          >
            <TypewriterText 
              text={slideTexts[activeIndex]} 
              key={activeIndex}
              isRight={isPositionRight}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
