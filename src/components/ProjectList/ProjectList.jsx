import ProjectCard from "../ProjectCard";

const ProjectList = ({ data }) => {
  console.log(data);
  data.map(({ id, src, about, title, typ }) => console.log(id));
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
