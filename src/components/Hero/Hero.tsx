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

  const textXRaw = useTransform(scrollYProgress, [0, 0.4], [-500, 0], {
    clamp: true,
  });

  const textX = useSpring(textXRaw, { stiffness: 300, damping: 50 });

  const imageScaleRaw = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
  const imageScale = useSpring(imageScaleRaw, { stiffness: 300, damping: 50 });

  return (
    <motion.div className="hero" ref={heroRef} style={{}}>
      <motion.div
        className="hero-info"
        style={{
          x: textX,
          opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1], {
            clamp: true,
          }),
        }}
      >
        <div className="hero-title">
          <h1>
            Let's reshape the future <br />
            of development.
            <br />
            Together.
          </h1>
        </div>
        <div className="hero-availability-card liquid-glass">
          <div className="hero-gradient"></div>
          <FaCircle
            style={{
              color: "#28a745",
              marginRight: "0.3rem",
              position: "relative",
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
          <Button
            className="hero-button"
            variant="liquid"
            size="lg"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
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
        }}
      >
        <motion.img
          style={{ scale: imageScale }}
          id="hero-image"
          src="src/assets/me1.png"
          alt="Erik"
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
