import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IconCloud } from "../ui/magicui/icon-cloud";
import "./About.css";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function About() {
  const handleNavigateToGitHub = () => {
    window.open("https://github.com/Striix77", "_blank");
  };

  const handleNavigateToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/erik-miklos-muzsi-94ba362b8",
      "_blank"
    );
  };

  return (
    <div className="about-container" id="about">
      <motion.div
        className="description liquid-glass"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="description-title">
          <h2>Hi! I'm Erik,</h2>
          <div className="description-icons">
            <Button
              className="icon-button"
              variant={"ghost"}
              onClick={handleNavigateToGitHub}
            >
              <FaGithub className="icon" />
            </Button>
            <Button
              className="icon-button"
              variant={"ghost"}
              onClick={handleNavigateToLinkedIn}
            >
              <FaLinkedin className="icon" />
            </Button>
          </div>
        </div>
        <p>
          a junior front-end developer with a passion for crafting responsive,
          interactive, and beautiful web interfaces that don't just work, they
          also feel good to use.
        </p>
        <p>
          My passion for polished, interactive interfaces has led me to gain
          extensive experience with HTML, CSS, JavaScript, TypeScript, React and
          Angular, along with tools like Motion to deliver smooth and dynamic
          user experiences.
        </p>
        <p>
          I thrive both as a team player and a self-starter, always ready to
          take initiative, lead when needed, and bring positive energy into
          every project.
        </p>
      </motion.div>
      <motion.div
        className="skills-cloud"
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <IconCloud
          images={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          ]}
        />
      </motion.div>
    </div>
  );
}

export default About;
