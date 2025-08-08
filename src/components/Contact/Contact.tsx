import { motion } from "framer-motion";
import ContactCard from "../ui/ContactCard/ContactCard";
import "./Contact.css";

function Contact() {
  return (
    <motion.div
      className="contact-container"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
    >
      <div className="contact-header">
        <h2 className="contact-title">Ready to make a change?</h2>
      </div>
      <ContactCard
        width="clamp(200px, 20vw, 280px)"
        height="clamp(50px, 10vh, 70px)"
      />
    </motion.div>
  );
}

export default Contact;
