import React from "react";
import { CUSINES } from "../../constants";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Expertise = () => {
  return (
    <section className="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Expertise
      </h2>
      <MotionDiv
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
            key={index}
            variants={itemVariants}
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            <div className="w-1/3 flex-shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">{cusine.description}</p>
            </div>
          </motion.div>
        ))}
      </MotionDiv>
    </section>
  );
};

export default Expertise;
