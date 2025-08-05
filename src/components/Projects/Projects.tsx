import ExpandableCard from "../ui/Expandable Card/ExpandableCard";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <ExpandableCard
        width="400px"
        height="300px"
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
}

export default Projects;
