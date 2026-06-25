"use client";
import FutureCard from "@/components/about/FutureProjectsCard";
import { FutureProjects } from "@/data/OurFutureProjects";
import { motion } from "motion/react";

const FutureProject = () => {
  return (
    <div className="w-4/5 flex-col pt-8 pb-15 md:pb-30">
      <motion.div
        className="bg-ubi-red-100 h-min w-full rounded-4xl px-6 pb-13 shadow-xl shadow-black/20 md:h-[37.8vw]"
        viewport={{ once: true, amount: 0.1 }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-ubi-white font-volkhov pt-9 text-center text-[8.5vw] md:pt-10 md:text-[4vw]">
          Future Projects & Collaborations
        </p>
        <div className="flex flex-col justify-center gap-10 pt-8 md:flex-row md:gap-15 lg:pt-15">
          {FutureProjects.map((card, index) => (
            <motion.div
              viewport={{ once: true }}
              key={card.text}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FutureCard
                key={card.text}
                imageSrc={card.image}
                mobileimageSrc={card.mobileImage}
                text={card.text}
                imageClassName={card.imageClassName ?? ""}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FutureProject;
