import { useState } from "react";
import "./ContactCard.css";
import { AnimatePresence, motion } from "motion/react";
import { IoClose } from "react-icons/io5";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { ScrollArea } from "../scroll-area";
import { Button } from "../button";

type ContactCardProps = {
  width: string;
  height: string;
};

function ContactCard({ width, height }: ContactCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        layout
        className={`expandable-card liquid-glass ${isOpen ? "open" : ""}`}
        onClick={() => !isOpen && setIsOpen(true)}
        initial={{}}
        animate={{}}
        transition={{
          layout: { duration: 1, type: "spring", bounce: 0.3 },
        }}
        style={{
          height: isOpen ? "90vh" : height,
          width: isOpen ? "90vw" : width,
          position: isOpen ? "fixed" : "relative",
          top: isOpen ? "5vh" : "0",
          left: isOpen ? "5vw" : "0",
          zIndex: isOpen ? 1000 : 1,
          cursor: isOpen ? "default" : "pointer",
          backgroundColor: isOpen
            ? "rgba(2, 33, 45, 0.51)"
            : "rgba(240, 248, 255, 0.096)",
          backdropFilter: isOpen
            ? "brightness(1.1) blur(7px) url(#glass-distortion)"
            : "brightness(1.1) blur(1px) url(#glass-distortion)",
        }}
      >
        <motion.div
          className="card-title"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isOpen ? "auto" : "100%",
            paddingTop: isOpen ? "20px" : "0",
          }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            Contact me!
          </motion.h3>
          {isOpen && (
            <div
              style={{
                position: "absolute",
                right: 20,
                top: 20,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </div>
          )}
        </motion.div>
        {isOpen && (
          <ScrollArea
            className="scroll-area"
            style={{ height: "100%", overflow: "hidden" }}
          >
            <div className="card-body">
              <h1>Contact Me!</h1>
              <form
                className="contact-form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  maxWidth: 400,
                  margin: "0 auto",
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  // Add your email sending logic here
                  alert("Message sent!");
                }}
              >
                <Input
                  type="text"
                  className="contact-input"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <Input
                  type="email"
                  className="contact-input"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <Input
                  type="text"
                  className="contact-input"
                  name="subject"
                  placeholder="Subject"
                  required
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <Textarea
                  name="message"
                  className="contact-input"
                  placeholder="Your Message"
                  required
                  rows={5}
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <Button
                  type="submit"
                  variant={"liquid"}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    backgroundColor: "rgba(0, 139, 208, 0.18)",
                  }}
                >
                  Send
                </Button>
              </form>
            </div>
          </ScrollArea>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default ContactCard;
