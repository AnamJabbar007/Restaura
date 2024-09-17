"use client";
import { MISSION } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl ">Our Mission</h2>
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <video
            className="w-full rounded-3xl"
            src="/mission.mp4"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster="/mission.jpeg"
          ></video>
          <motion.div
            className="absolute w-full h-full bg-black/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute max-w-lg tracking-tighter lg:text-3xl "
          >
            {MISSION}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
