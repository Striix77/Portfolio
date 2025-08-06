import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [text, setText] = useState("Hi!");
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setText("Scroll down and get to know me!"), 3000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  useEffect(() => {
    const checkInitialScroll = () => {
      if (window.scrollY > 200) {
        setShowLinks(true);
      }
    };

    checkInitialScroll();

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      "brightness(1.1) blur(1.5px) url(#glass-distortion)",
    ],
    { clamp: true }
  );

  const opacity = useTransform(scrollY, [0, 200], ["1", "0"], { clamp: true });

  return (
    <motion.div
      className="navbar-wrapper liquid-glass"
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
        <motion.div
          key={showLinks ? "links" : text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {showLinks ? (
            <nav className="nav-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          ) : (
            <motion.h2 style={{ opacity: opacity }}>{text}</motion.h2>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
