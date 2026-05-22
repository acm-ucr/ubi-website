"use client";
import MissionCard from "./OurMissionCard";
import { missionCards } from "@/data/missionCards";
import { motion } from "motion/react";

const OurMission = () => {
  return (
    <div className="relative flex w-full justify-center p-5 lg:w-4/5">
      <motion.div
        className="bg-ubi-lightpink h-full w-9/10 rounded-4xl shadow-xl shadow-black/20 lg:w-full"
        viewport={{ once:true, amount:0.1 }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="font-volkhov text-ubi-blue px-6 pt-7 text-center text-[2.4rem] font-bold tracking-wider lg:float-left lg:text-7xl">
            Our Mission
          </p>
          <p className="text-ubi-blue px-6 pt-7 pb-5 text-center text-xl leading-relaxed font-medium lg:pb-0 lg:text-left">
            To create a sustainable and equitable blood supply for all by
            continuously engaging and replenishing a network of young, diverse
            blood donor advocates. We aim to address the issue of the lack of
            nationwide blood donations by mobilizing individuals to become
            consistent donors and long-term advocates within their communities.
          </p>
        </div>

        <div className="-mt-7 flex flex-col items-center justify-around px-6 pb-6 lg:flex-row">
          {missionCards.map((card, index) => (
            <motion.div
              viewport={{ once: true }}
              key={card.text}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <MissionCard
                key={card.text}
                imageSrc={card.image}
                text={card.text}
                imageSize={card.imageSize}
                imageClassName={card.imageClassName ?? ""}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurMission;
