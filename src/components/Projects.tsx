import projectsData from '../data/projects.json';
import professionalProjectsData from '../data/professional-projects.json';

interface Project {
  id: number;
  title: string;
  technologies: string;
  description: string;
  link?: string;
}

function Projects() {
  const professionalProjects: Project[] = professionalProjectsData;
  const projects: Project[] = projectsData;

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto">
        <h2 className="text-center mb-3 text-xl font-semibold text-sky-800">Professional Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {professionalProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border p-4 border-sky-100 hover:bg-sky-50 cursor-default"
              title="Professional project details"
            >
              <h3 className="font-medium text-sky-900">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-slate-600">
                {project.technologies}
              </p>
              <p className="text-sm mt-2 text-slate-700">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <h2 className="text-center mb-3 text-xl font-semibold text-sky-800">Personal Projects</h2>
        <p className="text-center mb-4 text-sm text-slate-600 italic">
          This section is currently under development. Additional content will be published periodically.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg border p-4 ${project.link
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-sky-600 hover:text-sky-800 font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Repository →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
