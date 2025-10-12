
import { Link } from "react-router-dom";



const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden border max-w-xl border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Project+Image'; }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-start space-x-4 mt-6">
          <Link
            to={project.liveLink}
            className="text-cyan-400 flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-200 group"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/109/109617.png"
              alt="External Link Icon"
              className="w-5 h-5 invert"
            />
            <span className="font-semibold group-hover:underline">Live Demo</span>
          </Link>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 flex items-center space-x-2 hover:text-white transition-colors duration-200 group"
          >
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
              alt="GitHub Logo" 
              className="w-6 h-6 invert"
            />
            <span className="font-semibold group-hover:underline">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;