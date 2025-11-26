"use client";

import GradientButton from "../GradientButton";
import { Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Count from "./Count";
import { useState, useEffect, useRef } from "react";
import FloatingHearts from "./FloadingHeart";{/* new added*/}
import Confetti from "./Confetti";{/* new added*/}

export default function IntroScreen({ onNext }) {
  const [isBirthday, setIsBirthday] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bubbles, setBubbles] = useState([]);
  const [showForYouBtn, setShowForYouBtn] = useState(false);
  const birthdayDate = new Date("november 01, 2025"); // Change this date accordingly
  const audioRef = useRef(null);

  // For testing
  // const birthdayDate = new Date("2025-04-23T22:03:00+05:30")

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);
  // }, []);

  // const startCelebration = () => {
  //   setShowForYouBtn(false);
  //   console.log(setIsBirthday(true));
  //   // Play the song
  //   if (audioRef.current) {
  //     audioRef.current.volume = 0.8;
  //     audioRef.current.play().catch((e) => {
  //       console.log("Autoplay prevented, user interaction needed", e);
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const generated = Array.from({ length: 20 }).map(() => ({
  //     left: `${Math.random() * 100}%`,
  //     top: `${Math.random() * 100}%`,
  //     color: [
  //       "bg-pink-300",
  //       "bg-purple-300",
  //       "bg-yellow-300",
  //       "bg-violet-300",
  //       "bg-rose-300",
  //     ][Math.floor(Math.random() * 3)],
  //     size: 16 + Math.floor(Math.random() * 8),
  //     duration: 3 + Math.random() * 2,
  //     delay: Math.random() * 5,
  //   }));
  //   setBubbles(generated);
  // }, []);

   useEffect(() => {  {/* new added*/}
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // volume 0–1
      audioRef.current.play().catch(() => {
        console.log("User interaction needed to play audio");
      });
    }
  }, []);{/* new added*/}
  
  return (
    <div className="py-10 md:py-14 text-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/gifs/intro.gif"
          alt="Cute birthday animation topper"
          className="w-[140px] md:w-[180px]  object-cover"
        />
<Confetti /> {/* new added*/}
        <FloatingHearts />{/* new added*/}
        {/* You can change the background song if you want */}
        <audio ref={audioRef} src="/images/birthday.mp3" preload="auto" loop />

        <div>
          <h1
            className="text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
            }}>
            <AnimatePresence mode="wait">
              {/* {isBirthday ? (
                <BirthdayCelebration key="celebration" />
              ) : ( */}
              <Count
                key="countdown"
                targetDate={birthdayDate}
                onCountdownEnd={() => setShowForYouBtn(true)}
              />
              {/* )} */}
            </AnimatePresence>
            {/* A Cutiepie was born today, 18 years ago! */}
          </h1>
          <p className="mt-4 text-xl text-pink-200">
            Yes, it’s YOU! A little surprise awaits...
          </p>
        </div>
        <div className="mt-8">
          <GradientButton
            onClick={() => {
              const today = new Date();

              if (today.getMonth() === birthdayDate.getMonth()) {
                // if (today.toDateString() === birthdayDate.toDateString()) {
                onNext?.();
                console.log(today.toDateString());
                console.log(birthdayDate.toDateString());
              } else {
                alert("Wait for your day duffer! ❤️");
                console.log(today.toDateString());

                console.log(birthdayDate.toDateString());
              }
            }}>
            <Gift size={20} />
            Start the surprise
          </GradientButton>

          {/* <div className="mt-8">
          <GradientButton
            onClick={() => {
              onNext?.();
            }}>
            <Gift size={20} />
            Start the surprise
          </GradientButton> */}
        </div>
      </div>
    </div>
  );
}
