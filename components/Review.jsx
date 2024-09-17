"use client";
import { REVIEW } from "@/constants";
import { motion } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVarients = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Review = () => {
  return (
    <section className="container mx-auto mt-12 mb-8" id="review">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVarients}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVarients}
          className="mb-10 mx-4 text-3xl font-light tracking-tighter leading-normal lg:mx-40 lg:mt-40 lg:text-[3rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={itemVarients}
          className="flex items-center justify-center gap-6"
        >
          <img
            src="/xaviour.jpeg"
            width={80}
            height={80}
            alt={REVIEW.name}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={itemVarients}
        viewport={{ once: true }}
        className="mt-14 flex items-center justify-center gap-2 md:flex-row"
      >
        {/* Directly use the paths for images in the public folder */}
        {[
          "/customer1.jpeg",
          "/customer2.jpeg",
          "/customer3.jpeg",
          "/customer4.jpeg",
        ].map((customer, index) => (
          <motion.img
            variants={itemVarients}
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
