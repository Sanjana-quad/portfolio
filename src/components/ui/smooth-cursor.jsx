import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring } from "motion/react";

const DefaultCursorSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.5 }}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  const [isMoving, setIsMoving] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, { ...springConfig, damping: 60 });
  const scale = useSpring(1, { ...springConfig, stiffness: 500 });

  useEffect(() => {
    const smoothMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;
      const currentPos = { x: e.clientX, y: e.clientY };

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      if (speed > 0.1) {
        const angle =
          (Math.atan2(velocity.current.y, velocity.current.x) * 180) /
            Math.PI +
          90;

        let diff = angle - previousAngle.current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        accumulatedRotation.current += diff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = angle;

        scale.set(0.95);
        setIsMoving(true);

        setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 150);
      }
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", smoothMouseMove);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", smoothMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale,
        zIndex: 100,
        pointerEvents: "none",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {cursor}
    </motion.div>
  );
}
