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
const TypewriterText = ({ text, key }: { text: string, key: number }) => {
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

  return (
    <motion.div 
      className="min-h-[120px] flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white text-2xl md:text-3xl font-serif italic font-semibold text-center max-w-[600px] drop-shadow-lg">
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
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ 
          scale: isActive ? 1 : 1.1,
          opacity: isActive ? 1 : 0.8
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      
      {/* Siyah overlay gradyan efekti */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
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
    t("slide8")
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
    "/8.png"
  ];

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
      
      {/* Logo - geliştirilmiş animasyon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`logo-${activeIndex}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15, 
            delay: 0.3 
          }}
          className="absolute left-8 md:left-12 bottom-48 z-30"
        >
          <Image 
            src="/logo_white.png" 
            alt={t("logoAlt") || "Minex Drill Logo"}
            width={280} 
            height={100}
            className="object-contain drop-shadow-2xl mb-12"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Yazı animasyonu - geliştirilmiş versiyon */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${activeIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute left-8 md:left-12 bottom-20 z-30 p-6 max-w-[700px]"
        >
          <TypewriterText 
            text={slideTexts[activeIndex]} 
            key={activeIndex}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
