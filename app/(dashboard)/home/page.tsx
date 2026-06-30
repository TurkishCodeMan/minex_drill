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
import { Play, X } from "lucide-react";

// Daktilo animasyonu için geliştirilmiş özel bileşen
const TypewriterText = ({ text, animationKey, isRight }: { text: string, animationKey: number, isRight?: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Yeni key geldiğinde animasyonu sıfırla
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [animationKey]);

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
    <>
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
              animationKey={activeIndex}
              isRight={isPositionRight}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Açma Butonu (Önizlemeli) */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsVideoOpen(true)}
        className="absolute bottom-8 right-8 z-40 flex flex-col items-center gap-2 group"
      >
        <div className="relative w-40 h-24 md:w-56 md:h-32 rounded-2xl overflow-hidden border-2 border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:border-white transition-all bg-black/50">
          <video 
            src="/ENG-Minex Drilling Tanıtım.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay Oynat İkonu */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all">
             <div className="w-12 h-12 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm text-black shadow-lg">
                <Play size={24} className="ml-1" />
             </div>
          </div>
        </div>
        <span className="font-semibold text-sm md:text-base tracking-wide whitespace-nowrap text-white drop-shadow-md bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-black/60 transition-colors">
          {t("watchVideo")}
        </span>
      </motion.button>
    </section>

    {/* Video Modal */}
    <AnimatePresence>
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        >
          {/* Sağ Üst Kapatma Butonu */}
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white transition-colors z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20 border border-white/20"
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[85vh] aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative bg-black border border-white/10"
          >
            <video 
              src="/ENG-Minex Drilling Tanıtım.mp4" 
              controls 
              autoPlay 
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}
