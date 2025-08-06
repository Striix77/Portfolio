import { motion } from "motion/react";
import "./Background.css";

function Background() {
  const starCount = 40;
  const stars = Array.from({ length: starCount }, (_, index) => {
    const size = Math.random() * 3 + 1;
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
      {/* Animated background elements */}
      <div className="bg-gradient"></div>
      {/* <div className="bg-pattern"></div> */}
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
