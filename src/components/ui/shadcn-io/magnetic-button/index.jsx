import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { cn } from "@/lib/utils";

export const MagneticButton = React.forwardRef(function MagneticButton(
  {
    className,
    particleCount = 12,
    attractRadius = 50,
    children,
    ...props
  },
  ref
) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i]?.x || 0,
      y: particles[i]?.y || 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  return (
    <button
      ref={ref}
      className={cn(
        "min-w-40 relative touch-none",
        "bg-cyan-100 dark:bg-cyan-900",
        "hover:bg-cyan-200 dark:hover:bg-cyan-800",
        "text-brown-600 dark:text-brown-300",
        "border border-cyan-300 dark:border-cyan-700",
        "transition-all duration-300 rounded-md px-4 py-2",
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{
            x: particles[index]?.x || 0,
            y: particles[index]?.y || 0,
          }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full pointer-events-none",
            "bg-cyan-400 dark:bg-cyan-300",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40"
          )}
        />
      ))}

      <span className="relative w-full flex items-center justify-center gap-2">
        {children || (
          <>
            <Magnet
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                isAttracting && "scale-110"
              )}
            />
            {isAttracting ? "~Now Click!~" : "Let's Connect!"}
          </>
        )}
      </span>
    </button>
  );
});
