import React from "react";
import about from "../../assets/about.jpeg";
import { ABOUT } from "../../constants";
import { motion } from "framer-motion";

const MotionImg = motion.img;
const MotionDiv = motion.div;

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        About Us
      </h2>
      <div className="flex flex-wrap">
        {/* KÉP animációval */}
        <div className="w-full p-4 lg:w-1/2">
          <MotionImg
            src={about}
            alt="about"
            className="rounded-3xl lg:rotate-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* SZÖVEG animációval */}
        <div className="w-full px-2 lg:w-1/2">
          <MotionDiv
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl tracking-tighter lg:text-6xl">
              {ABOUT.header}
            </h2>
            <div className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3"></div>
            <p className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl">
              {ABOUT.content}
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
