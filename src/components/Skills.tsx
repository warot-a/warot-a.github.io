import skillsData from '../data/skills.json';

function Skills() {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {skillsData.map((skill) => (
        <div key={skill.id} className="border border-sky-100 rounded-lg p-4 hover:bg-sky-50">
        <div className="flex items-center gap-2 mb-2">
          <img
          src={`/${skill.icon}`}
          alt={skill.category}
          className="w-5 h-5 text-sky-600"
          />
          <span className="font-medium text-slate-800">{skill.category}</span>
        </div>
        <div className="text-slate-700 text-sm leading-relaxed">{skill.skills}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Skills;
