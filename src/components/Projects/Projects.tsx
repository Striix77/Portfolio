import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import { motion } from "motion/react";

// Project data - you can move this to a separate file later
const projects = [
  {
    id: 1,
    title: "Order Tracker",
    description:
      "A modern, account-based single-page React application for tracking orders, featuring a Spring-powered backend, PWA support for installability, and role-based access including admin privileges.",
    image: "/orderTracker.png",
    github: "https://github.com/Striix77/Order-Tracker",
    technologies: [
      "React",
      "TypeScript",
      "Motion",
      "Tailwind",
      "Spring Boot",
      "SQL",
      "PWA",
      "Role-based Access",
    ],
  },
  {
    id: 2,
    title: "Milo",
    description:
      "A fast-paced 2D pixel-art platformer developed in Unity where players take control of a heroic dog, battling through relentless enemy waves to earn high scores and unlock powerful upgrades.",
    image: "/Milo.png",
    github: "https://github.com/Striix77/Milo",
    technologies: [
      "Unity",
      "C#",
      "2D Pixel Art",
      "Custom Physics",
      "Platformer",
      "Unlockable Upgrades",
    ],
  },
  {
    id: 3,
    title: "Portfolio Creator",
    description:
      "A single-page Angular application that lets users create personalized portfolio pages, generate PPTX presentations, and manage accounts with admin privileges, advanced user search, and filtering.",
    image: "/AngularPortfolio.png",
    github: "",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind",
      "JSON",
      "Admin Privileges",
      "User Search",
      "PptxGenJS",
    ],
  },
  {
    id: 4,
    title: "Swinging Simulator",
    description:
      "A Unity 3D swinging simulator that lets players experience fluid first- or third-person swinging mechanics, combining immersive physics with dynamic camera perspectives for a thrilling traversal experience.",
    image: "/swing.png",
    github: "https://github.com/Striix77/SwingingGame",
    technologies: ["Unity", "C#", "3D", "Physics", "Camera", "Traversal"],
  },
  {
    id: 5,
    title: "Miniature Database Management System",
    description:
      "A collaborative mini DBMS project that merges Python's flexibility with Java's performance to provide an efficient and user-friendly tool for organizing and managing data.",
    image: "/dbms.png",
    github: "",
    technologies: ["Python", "Java", "MongoDB", "Collaboration"],
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
                  {project.github !== "" && (
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
                  )}
                </div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )) || (
              <>
                <motion.img
                  src={project.image}
                  alt={project.title}
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
                  {project.github !== "" && (
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
                  )}
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
