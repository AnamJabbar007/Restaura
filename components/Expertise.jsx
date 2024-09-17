"use client";
import { CUSINES } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 20,
    transition: {
      duration: 0.8,
    },
  },
};

const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Expertise
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVarients}
        className="container mx-auto px-4"
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            variants={itemVarients}
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
          >
            <div className="flex-shrink-0 text-2xl pr-8">{cusine.number}</div>
            <div className="w-1/3 flex-shrink-0">
              <img
                className="h-auto rounded-3xl"
                src={cusine.image}
                alt={cusine.title}
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-red-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
