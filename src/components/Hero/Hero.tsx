import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { FaArrowDownLong, FaCircle } from "react-icons/fa6";
import "./Hero.css";
import { Button } from "../ui/button";
import { LuDownload } from "react-icons/lu";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muzsi Erik.pdf";
    link.download = "Muzsi Erik.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Text slides in from left as user scrolls into view
  const textXRaw = useTransform(scrollYProgress, [0, 0.5], [-500, 0], {
    clamp: true,
  });

  const textX = useSpring(textXRaw, { stiffness: 300, damping: 50 });

  // Image scales and rotates slightly
  const imageScaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const imageScale = useSpring(imageScaleRaw, { stiffness: 300, damping: 50 });
  // const barScaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  // const barScale = useSpring(barScaleRaw, { stiffness: 300, damping: 50 });
  // const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Parallax effect - hero moves slower than scroll
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div className="hero" ref={heroRef} style={{ y: heroY }}>
      {/* <motion.div style={{ scale: barScale }} className="hero-bar-top" /> */}
      <motion.div
        className="hero-info"
        style={{
          x: textX,
          opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1], {
            clamp: true,
          }),
        }}
      >
        <h1> Hi! I'm Erik.</h1>
        <h2>
          Let's reshape the future of development.
          <br />
          Together.
        </h2>
        <div className="hero-availability-card liquid-glass">
          <div className="hero-gradient"></div>
          <FaCircle
            style={{
              color: "#28a745",
              marginRight: "0.3rem",
              position: "relative",
              top: "0.5rem",
              fontSize: "0.5rem",
            }}
          />
          <h3 style={{ fontSize: "1.1rem" }}>Available for work!</h3>
        </div>
        <div className="hero-buttons">
          <Button
            className="hero-button"
            id="download-cv"
            variant="liquid"
            size="lg"
            onClick={handleDownloadCV}
          >
            Download CV
            <LuDownload />
          </Button>
          <Button className="hero-button" variant="liquid" size="lg">
            Find out more
            <FaArrowDownLong />
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image-card liquid-glass"
        style={{
          scale: imageScale,
          opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1], {
            clamp: true,
          }),

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
      {/* <motion.div style={{ scale: barScale }} className="hero-bar-bottom" /> */}
    </motion.div>
  );
}

export default Hero;
