import projectsData from '../data/projects.json';
import professionalProjectsData from '../data/professional-projects.json';

interface ProfessionalProject {
  id: number;
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  technologies: string;
  description: string;
  link?: string;
}

function Projects() {
  const professionalProjects: ProfessionalProject[] = professionalProjectsData;


  const projects: Project[] = projectsData;
  const itemCount = projects.length;
  const professionalItemCount = professionalProjects.length;

  const getGridCols = (count: number) => {
    if (count === 1) {
      return 'grid-cols-1';
    }
    return 'grid-cols-1 md:grid-cols-2';
  };

  return (
    <div className="space-y-8">
      {/* Professional Projects Section */}
      <div>
        <h2 className="text-center mb-3 text-xl font-semibold text-sky-800">Professional Projects</h2>
        <ul className={`grid ${getGridCols(professionalItemCount)} gap-4`}>
          {professionalProjects.map((project) => (
            <li
              key={project.id}
              className="rounded-lg border p-4 border-sky-100 hover:bg-sky-50 cursor-default"
              title="Professional project details"
            >
              <h3 className="font-medium text-gray-600 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Personal Projects Section */}
      <div>
        <h2 className="text-center mb-3 text-xl font-semibold text-sky-800">Personal Projects</h2>
        <p className="text-center mb-4 text-sm text-slate-600 italic">
          This section is currently under development. Additional content will be published periodically.
        </p>
        <ul className={`grid ${getGridCols(itemCount)} gap-4`}>
          {projectsData.map((project) => (
            <li
              key={project.id}
              className={`rounded-lg border p-4 transition-colors ${project.link
                ? 'border-sky-100 hover:bg-sky-50 cursor-pointer'
                : 'border-gray-200 bg-gray-50 cursor-default opacity-60'
                }`}
              onClick={project.link ? () => window.open(project.link, '_blank', 'noopener,noreferrer') : undefined}
              title={project.link ? 'View project repository' : 'Project link not available'}
            >
              <h3 className={`font-medium ${project.link ? 'text-sky-900' : 'text-gray-600'}`}>
                {project.title}
              </h3>
              <p className={`text-sm font-medium ${project.link ? 'text-slate-600' : 'text-gray-500'}`}>
                {project.technologies}
              </p>
              <p className={`text-sm mt-2 ${project.link ? 'text-slate-700' : 'text-gray-500'}`}>
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
