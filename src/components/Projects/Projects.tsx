import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { motion } from "motion/react";

// Project data - you can move this to a separate file later
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern React portfolio with smooth animations and responsive design. Built with TypeScript, Framer Motion, and Tailwind CSS.",
    image: "https://placehold.co/1280x720",
    github: "https://github.com/yourusername/portfolio",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind"],
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.",
    image: "https://placehold.co/1280x720",
    github: "https://github.com/yourusername/ecommerce",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 3,
    title: "Task Management Tool",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://placehold.co/1280x720",
    github: "https://github.com/yourusername/task-manager",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
  },
];

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">Some of the projects I've worked on</p>
      </motion.div>

      <motion.div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            {...(index % 2 === 0
              ? { initial: { opacity: 0, x: 50 } }
              : { initial: { opacity: 0, x: -50 } })}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {(index % 2 === 0 && (
              <>
                <div className="project-details" style={{ textAlign: "right" }}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div
                    className="project-technologies"
                    style={{ justifyContent: "flex-end" }}
                  >
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge liquid-glass">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className="project-links"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                  </div>
                </div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "50vw",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )) || (
              <>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "50vw",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="project-details" style={{ textAlign: "left" }}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div
                    className="project-technologies"
                    style={{ justifyContent: "flex-start" }}
                  >
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge liquid-glass">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className="project-links"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
