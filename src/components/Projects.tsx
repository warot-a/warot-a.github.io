function Projects() {
  return (
    <ul className="space-y-3">
      <li className="rounded-lg border border-sky-100 p-4 hover:bg-sky-50">
        <div className="font-medium text-sky-900">Restaurant Chat Assistant</div>
        <div className="text-sm text-slate-600">LINE integration • LLM/SLM • 5km geofilter</div>
      </li>
      <li className="rounded-lg border border-sky-100 p-4 hover:bg-sky-50">
        <div className="font-medium text-sky-900">Key-phrase API</div>
        <div className="text-sm text-slate-600">NodeJS • TS • Deploy on Azure</div>
      </li>
    </ul>
  );
}

export default Projects;
