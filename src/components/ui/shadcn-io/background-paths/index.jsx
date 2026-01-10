'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDownCircle, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/shadcn-io/magnetic-button";
import { MorphingText } from "@/components/ui/morphing-text";
import { WordRotate } from "@/components/ui/word-rotate";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
       
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ title = 'Sanjana Satheesh', subtitle = 'Software Developer' }) {
  const words = title.split(' ');
  const subwords = subtitle.split(' ');

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className=" z-10 container text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className=" md:text-8xl font-bold mb-5 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-7 last:mr-1"
              >
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                      dark:from-white dark:to-white/80 px-1 py-4"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tighter">
            {subwords.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-4 last:mr-0"
              >
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                      dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2> */}
          {/* <h2 className="">
            <MorphingText
              texts={[subtitle, "Software Developer", "Frontend Developer", "Backend Developer", "UI/UX enthusiast"]}
              className="text-s sm:text-xs  
                dark:from-white dark:to-white/80"
            />
          </h2> */}
          <h2 className="text-xl sm:text-l md:text-4xl font-bold mb-4 tracking-tighter">
            <WordRotate
              words={[
                "Software Developer",
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Enthusiast"
              ]}
              duration={1500}
              className="inline-block text-transparent bg-clip-text 
                bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                dark:from-white dark:to-white/80"
            />
          </h2>

<div className="flex justify-center  gap-4 pt-4">
          <a
            href="/portfolio/projects"
            className="
          flex items-center gap-2 
          bg-gradient-to-r from-orange-500 to-yellow-500 
          dark:from-purple-500 dark:to-blue-500 
          text-white px-5 py-2.5 rounded-full font-medium 
          hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-md
        "
          >
            <ArrowDownCircle size={18} />
            View My Work
          </a>

          <a
            href="/portfolio/contact"
          >
            <MagneticButton />
            {/* <Send size={18} /> */}
            
          </a>
        </div>
          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
              dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
              overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
           
          </div>
        </motion.div>
      </div>
    </div>
  );
}
