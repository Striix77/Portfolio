import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [text, setText] = useState("Hi!");

  useEffect(() => {
    const timers = [
      setTimeout(() => setText("I'm glad you're here!"), 3000),
      setTimeout(() => setText("Scroll down and get to know me!"), 6000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  const { scrollY } = useScroll();

  const rawTranslateY = useTransform(
    scrollY,
    [0, 200],
    [window.innerHeight / 2 - 40, 20],
    { clamp: true }
  );

  const translateY = useSpring(rawTranslateY, {
    stiffness: 120,
    damping: 20,
    mass: 1.2,
  });

  const rawWidth = useTransform(scrollY, [0, 200], ["50vw", "60vw"], {
    clamp: true,
  });
  const width = useSpring(rawWidth, {
    stiffness: 200,
    damping: 15,
  });

  const rawHeight = useTransform(scrollY, [0, 200], ["15vh", "6vh"], {
    clamp: true,
  });
  const height = useSpring(rawHeight, {
    stiffness: 150,
    damping: 20,
  });

  const backDrop = useTransform(
    scrollY,
    [0, 200],
    [
      "brightness(1.1) blur(1px) url(#glass-distortion)",
      "brightness(1.1) blur(3px) url(#glass-distortion)",
    ],
    { clamp: true }
  );

  return (
    <motion.div
      className="navbar-wrapper"
      style={{
        position: "fixed",
        top: 0,
        width,
        height,
        y: translateY,
        backdropFilter: backDrop,
        zIndex: 1000,
      }}
      initial={{ scaleX: 0.2, scaleY: 0 }}
      animate={{
        scaleX: 1,
        scaleY: 1,
      }}
      transition={{
        scaleX: {
          duration: 1.5,
          type: "spring",
          bounce: 0.2,
          delay: 1.3,
        },
        scaleY: {
          duration: 1.5,
          type: "spring",
          bounce: 0.7,
          ease: "easeInOut",
          delay: 1,
        },
      }}
    >
      <div className="navbar-content">
        <motion.h1
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default Navbar;
