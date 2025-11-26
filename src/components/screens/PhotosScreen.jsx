"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Mail } from "lucide-react";
import GradientButton from "../GradientButton";
import FloatingHearts from "./FloadingHeart";{/* new added*/}
import Confetti from "./Confetti";{/* new added*/}

export default function PhotosScreen({ onNext }) {
  const swiperRef = useRef(null);
  const audioRef = useRef(null);

  const photos = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/6.jpeg",
    "/images/16.jpeg",
    "/images/17.jpeg",
    "/images/15.jpeg",
    "/images/14.jpeg",
    "/images/5.jpg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
  ];
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // volume 0–1
      audioRef.current.play().catch(() => {
        console.log("User interaction needed to play audio");
      });
    }
  }, []);

  return (
    <div className="px-4 md:px-6 py-10">
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow">
          Some Sweet Moments
        </motion.h2>
        <p className="text-sm text-rose-100/90 mt-1">(Swipe the cards)</p>
      </div>
<Confetti />{/* new added*/}
        <FloatingHearts />
        {/* new added*/}
      <audio
        ref={audioRef}
        src="/images/tu hai toh mai hoon.mp3"
        preload="auto"
        loop
      />{/* new added*/}
      <div className="relative flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            className="w-[280px] h-[420px] md:w-[340px] md:h-[460px]">
            {photos.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="h-full w-full rounded-2xl">
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="mt-8 flex justify-center">
        <GradientButton onClick={onNext}>
          <Mail size={20} className="mt-0.5" /> Open My Message
        </GradientButton>
      </motion.div>
    </div>
  );
}
