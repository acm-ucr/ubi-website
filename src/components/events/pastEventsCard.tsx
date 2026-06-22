"use client";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface EventCardProps {
  image: StaticImageData;
  title: string;
  description: ReactNode;
}

const EventCard = ({ image, title, description }: EventCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-1 cursor-pointer flex-col items-center">
      <div className="flex w-full justify-center" style={{ perspective: 1000 }}>
        <motion.div
          onClick={() => setFlipped((p) => !p)}
          animate={{ rotateY: flipped ? 180 : 0 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex w-full flex-col items-center"
        >
          <div
            className="flex w-full flex-col items-center"
            style={{ backfaceVisibility: "hidden", zIndex: flipped ? 1 : 2 }}
          >
            <Image className="w-5/7" src={image} alt={title} />
            <div className="text-ubi-blue bg-ubi-pink w-5/7 overflow-visible rounded-br-4xl rounded-bl-4xl p-8 py-10 text-center text-5xl font-semibold shadow-xl">
              <p>{title}</p>
            </div>
          </div>
          <div
            className="absolute inset-0 flex w-full flex-col items-center justify-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              zIndex: flipped ? 2 : 1,
            }}
          >
            <div className="text-ubi-blue h-full w-5/7 rounded-4xl bg-[#FFCDC5] p-16 py-20 text-left text-xl font-medium shadow-xl">
              <p className="text-5xl font-bold">About Event</p>
              <div className="">{description}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventCard;