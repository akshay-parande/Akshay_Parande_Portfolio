import ProjectCard from "./ProjectCard";
import projects from  "../../assets/Data/projects.json" 


const Project = () =>{



    return (
      <div id="projects" className="py-16 md:py20 items-center">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-100">My Work & Projects</h2>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in turning ideas into reality.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
}

export default Project;