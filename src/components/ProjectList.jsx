const ProjectList = ({ projects }) => {
  return (
    <div className="boxImg">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img className="img" src={project.img} alt={project.category} />
          <p className="category">{project.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;