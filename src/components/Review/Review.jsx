import React from "react";
import { REVIEW } from "../../constants";
import xaviour from "../../assets/xaviour.jpeg";
import customer1 from "../../assets/customer1.jpeg";
import customer2 from "../../assets/customer2.jpeg";
import customer3 from "../../assets/customer3.jpeg";
import customer4 from "../../assets/customer4.jpeg";
import { motion } from "framer-motion";

const MotionP = motion.p;
const MotionImg = motion.img;
const MotionDiv = motion.div;

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
      <div className="flex flex-col">
        
        <MotionP
          className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3.5rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {REVIEW.content}
        </MotionP>

        <MotionDiv
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MotionImg
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEW.name}
            className="rounded-full border"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </MotionDiv>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <MotionImg
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
