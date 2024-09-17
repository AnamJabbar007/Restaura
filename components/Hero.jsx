"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src="/hero.mp4"
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="/hero.jpeg"
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex flex-col h-screen justify-end mb-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logo.png"
          alt="restaura"
          className="w-full p-4"
        />
        <p className="p-4 tracking-tighter text-lg text-white">Paris</p>
      </div>
    </section>
  );
};

export default Hero;
