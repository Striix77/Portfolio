import { useRef, useState } from "react";
import "./ExpandableCard.css";
import { AnimatePresence, motion } from "motion/react";

type ExpandableCardProps = {
  width: string;
  height: string;
} & (
  | {
      imgSrc: string;
      videoSrc?: never;
    }
  | {
      imgSrc?: never;
      videoSrc: string;
    }
);

function ExpandableCard({
  width,
  height,
  imgSrc,
  videoSrc,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current?.pause();
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        className={`expandable-card liquid-glass ${isOpen ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => !isOpen && setIsOpen(true)}
        initial={{}}
        animate={{}}
        transition={{
          layout: { duration: 0.6, type: "spring", bounce: 0.3 },
        }}
        style={{
          height: isOpen ? "90vh" : height,
          width: isOpen ? "90vw" : width,
          position: isOpen ? "fixed" : "relative",
          top: isOpen ? "5vh" : "0",
          left: isOpen ? "5vw" : "0",
          zIndex: isOpen ? 1000 : 1,
        }}
      >
        <motion.div className="card-body">
          <motion.div className="card-title">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Card Title
            </motion.h2>
          </motion.div>
          <motion.div className="card-description">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="description-text"
            >
              Card Description goes here. This is a brief overview of the
              content within the card. It can be expanded to show more details.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ExpandableCard;
