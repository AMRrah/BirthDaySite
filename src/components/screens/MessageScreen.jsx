"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight } from "lucide-react";
import FloatingHearts from "./FloadingHeart";{/* new added*/}
import Confetti from "./Confetti";{/* new added*/}

export default function MessageScreen({ onNext }) {
  const [flipped, setFlipped] = useState(false);

  const audioRef = useRef(null);{/* new added*/}
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // volume 0–1
      audioRef.current.play().catch(() => {
        console.log("User interaction needed to play audio");
      });
    }
  }, []);{/* new added*/}


  return (
    <>
      <div className="px-4 md:px-6 py-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight">
          A Special Message
        </motion.h2>
    <Confetti />
        <FloatingHearts />
        {/* new added*/}
                <audio ref={audioRef} src="/images/ehsaas.mp3" preload="auto" loop />{/* new added*/}

        <div className="mx-auto relative w-full max-w-3xl flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center">
            <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
              <h1>
                <b>Happy Birthday💕🍰 Rafiya❤️Anjum 😘</b>
                {/* <b>Happy Birthday💕🍰 Meri Jaan❤️ 😘</b> */}
              </h1>
              Happy Birthday, Meri Jaan! You deserve all the happiness, love,
              and smiles in the world today and always. You have this special
              way of making everything around you brighter, your smile, your
              kindness, and the way you make people feel truly cared for. I hope
              your day is filled with laughter, surprises, and moments that make
              your heart happy. You’re truly one of a kind, and I just want you
              to know how special you are. Keep being the amazing person you
              are, spreading joy wherever you go. Wishing you endless happiness,
              success, and all the sweet things life has to offer. 💗 Keep being
              the amazing person you are, spreading joy wherever you go. Wishing
              you endless happiness, May Allah Protect You From Bad things And
              give You Alot of Blessings Towards Your Whole Life . Once Again
              Happy Birthday Day to YOu MY Sweet heart Your The Best Part of my
              Life .
              <center>
                <b>I Love You ❤️ForEver😘</b>
              </center>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
