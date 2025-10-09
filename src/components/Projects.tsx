import projectsData from '../data/projects.json';

function Projects() {
  const itemCount = projectsData.length;
  const getGridCols = () => {
    if (itemCount === 1) {
      return 'grid-cols-1';
    }
    if (itemCount === 2) {
      return 'grid-cols-1 md:grid-cols-2';
    }
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <>
      <h2 className="text-center mb-3 text-xl font-semibold text-sky-800">Projects</h2>
      <ul className={`grid ${getGridCols()} gap-4`}>
        {projectsData.map((project) => (
            <li
            key={project.id}
            className="rounded-lg border border-sky-100 p-4 hover:bg-sky-50 cursor-pointer transition-colors"
            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
            title="View project repository"
            >
            <h3 className="font-medium text-sky-900">{project.title}</h3>
            <p className="text-sm text-slate-600 font-medium">{project.technologies}</p>
            <p className="text-sm text-slate-700 mt-2">{project.description}</p>
            </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;
