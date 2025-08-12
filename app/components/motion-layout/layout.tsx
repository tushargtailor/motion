"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import React from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};

export const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="py-10 bg-gray-100 min-h-screen relative ">
      {current && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[500px] m-auto fixed inset-0 z-20 bg-white w-72 rounded-2xl border border-neutral-200 p-4  overflow-hidden "
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-2xl"
          />

          <div className="flex flex-col justify-between items-start ">
            <div className="flex py-4 items-start justify-between w-full gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="h-48 overflow-auto pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)] "
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 cursor-pointer rounded-lg flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          The old lighthouse stood alone on the cliff, its white paint peeling
          under years of salt and wind. Waves crashed below, sending mist into
          the air like ghostly breath. At night, its beam swept across the sea,
          a steady heartbeat in the darkness. <br /> <br />
          Fishermen swore they saw shadows moving in its light, figures walking
          where no one should be. Some said it was the spirits of lost
          sailors,still searching for shore. Others claimed it was just the sea
          playing still searching for shore. Others claimed it was just the sea
          playing tricks. Yet every dawn, the lighthouse remained — silent,
          steadfast, and watching.
        </p>
      );
    },
  },
  {
    description: "Lana Del Rey",
    title: "YoYo Honey Singh",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          The old lighthouse stood alone on the cliff, its white paint peeling
          under years of salt and wind. Waves crashed below, sending mist into
          the air like ghostly breath. At night, its beam swept across the sea,
          a steady heartbeat in the darkness. <br /> <br />
          Fishermen swore they saw shadows moving in its light, figures walking
          where no one should be. Some said it was the spirits of lost sailors,
          still searching for shore. Others claimed it was just the sea playing
          tricks. Yet every dawn, the lighthouse remained — silent, steadfast,
          and watching.
        </p>
      );
    },
  },
  {
    description: "Lana Del Rey",
    title: "Jack",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          The old lighthouse stood alone on the cliff, its white paint peeling
          under years of salt and wind. Waves crashed below, sending mist into
          the air like ghostly breath. At night, its beam swept across the sea,
          a steady heartbeat in the darkness. <br /> <br />
          Fishermen swore they saw shadows moving in its light, figures walking
          where no one should be. Some said it was the spirits of lost sailors,
          still searching for shore. Others claimed it was just the sea playing
          tricks. Yet every dawn, the lighthouse remained — silent, steadfast,
          and watching.
        </p>
      );
    },
  },
  {
    description: "Lana Del Rey",
    title: "Noxz",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          The old lighthouse stood alone on the cliff, its white paint peeling
          under years of salt and wind. Waves crashed below, sending mist into
          the air like ghostly breath. At night, its beam swept across the sea,
          a steady heartbeat in the darkness. <br /> <br />
          Fishermen swore they saw shadows moving in its light, figures walking
          where no one should be. Some said it was the spirits of lost sailors,
          still searching for shore. Others claimed it was just the sea playing
          tricks. Yet every dawn, the lighthouse remained — silent, steadfast,
          and watching.
        </p>
      );
    },
  },
  {
    description: "Lana Del Rey",
    title: "Noxzy",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          The old lighthouse stood alone on the cliff, its white paint peeling
          under years of salt and wind. Waves crashed below, sending mist into
          the air like ghostly breath. At night, its beam swept across the sea,
          a steady heartbeat in the darkness. <br /> <br />
          Fishermen swore they saw shadows moving in its light, figures walking
          where no one should be. Some said it was the spirits of lost sailors,
          still searching for shore. Others claimed it was just the sea playing
          tricks. Yet every dawn, the lighthouse remained — silent, steadfast,
          and watching.
        </p>
      );
    },
  },
];
