import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Text slides in from left as user scrolls into view
  const textXRaw = useTransform(scrollYProgress, [0, 0.5], [-500, 0], {
    clamp: true,
  });

  const textX = useSpring(textXRaw, { stiffness: 300, damping: 50 });

  // Image scales and rotates slightly
  const imageScaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const imageScale = useSpring(imageScaleRaw, { stiffness: 300, damping: 50 });
  const barScaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const barScale = useSpring(barScaleRaw, { stiffness: 300, damping: 50 });
  // const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Parallax effect - hero moves slower than scroll
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div className="hero" ref={heroRef} style={{ y: heroY }}>
      <motion.div style={{ scale: barScale }} className="hero-bar-top" />
      <motion.div
        className="hero-text"
        style={{
          x: textX,
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
        }}
      >
        <h1> Hi! I'm Erik.</h1>
        <h2>
          Let's reshape the future of development.
          <br />
          Together.
        </h2>
      </motion.div>

      <motion.div
        className="hero-image-card"
        style={{
          scale: imageScale,
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),

          // rotate: imageRotate,
        }}
      >
        <motion.img
          style={{ scale: imageScale }}
          id="hero-image"
          src="src/assets/me.webp"
          alt="Erik"
        />
      </motion.div>
      <motion.div style={{ scale: barScale }} className="hero-bar-bottom" />
    </motion.div>
  );
}

export default Hero;
