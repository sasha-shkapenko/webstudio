import ProjectCard from "../ProjectCard";
import "./ProjectList.scss";

const ProjectList = ({ data }) => {
  return (
    <ul className="projects">
      {data.map(({ id, src, about, title, type }) => (
        <ProjectCard
          key={id}
          src={src}
          about={about}
          title={title}
          type={type}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
