import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./Background.css";

function Background() {
  const [starCount, setStarCount] = useState(40);
  const [starSize, setStarSize] = useState({ min: 1, max: 4 });

  // Adjust star count and size based on screen size
  useEffect(() => {
    const updateStarSettings = () => {
      const width = window.innerWidth;

      if (width < 480) {
        // Mobile - fewer, smaller stars
        setStarCount(20);
        setStarSize({ min: 0.5, max: 2 });
      } else if (width < 768) {
        // Small tablet - medium count
        setStarCount(30);
        setStarSize({ min: 0.8, max: 3 });
      } else if (width < 1024) {
        // Tablet - normal count
        setStarCount(40);
        setStarSize({ min: 1, max: 3.5 });
      } else {
        // Desktop - full count
        setStarCount(50);
        setStarSize({ min: 1, max: 4 });
      }
    };

    updateStarSettings();
    window.addEventListener("resize", updateStarSettings);

    return () => window.removeEventListener("resize", updateStarSettings);
  }, []);

  const stars = Array.from({ length: starCount }, (_, index) => {
    const size = Math.random() * (starSize.max - starSize.min) + starSize.min;
    const top = Math.random() * 100;
    const blurAmount = Math.random();
    const animationDuration = (5 - size) * 6 + 8;
    const animationDelay = Math.random() * animationDuration;

    return (
      <div
        key={index}
        style={{
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          left: "100%",
          top: `${top}vh`,
          background: "rgba(255, 255, 255, 0.77)",
          borderRadius: "50%",
          filter: `blur(${blurAmount}px)`,
          animation: `starMove ${animationDuration}s linear infinite`,
          animationDelay: `${animationDelay}s`,
          willChange: "transform",
        }}
      />
    );
  });

  return (
    <motion.div
      className="site-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gradient"></div>
      <motion.div
        className="bg-particles"
        style={{ position: "relative", width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 7 }}
      >
        {stars}
      </motion.div>
    </motion.div>
  );
}

export default Background;
