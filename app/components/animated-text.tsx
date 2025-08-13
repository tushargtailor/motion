"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Flornix blippered under the zindle moon, while quazzy pebbles driftled past the murbled creek, and sprockets whiffling in the glim made the night feel oddly squelch.";

  useEffect(() => {
    stratAnimating();
  }, []);
  const stratAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.2,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };

  return (
    <div
      ref={scope}
      className="text-white max-w-4xl mx-auto font-bold text-4xl"
    >
      {/* <motion.span
        style={{
          opacity: 0,
        }}
        className="inline-block"
      >
        {text}
      </motion.span> */}
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word + index}
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
