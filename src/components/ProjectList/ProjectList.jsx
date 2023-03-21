import ProjectCard from "../ProjectCard";

const ProjectList = ({ data }) => {
  return (
    <ul>
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
