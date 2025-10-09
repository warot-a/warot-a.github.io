import Contact from './Contact';
import skillsData from '../data/skills.json';

function About() {
  return (
    <div className="space-y-6">
      <h2 className="mb-3 text-xl font-semibold text-sky-800">About me</h2>
      <p className="text-slate-700">
        Full-Stack Software Developer experienced in building scalable cloud-native applications, with expertise across frontend, backend, and DevOps for enterprise environments.
      </p>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-sky-800">Skills</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse hidden md:table">
            <thead>
              <tr className="border-b border-sky-200">
                <th className="text-center py-3 px-4 font-semibold text-sky-800">Category</th>
                <th className="text-center py-3 px-4 font-semibold text-sky-800">Technologies & Skills</th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((skill) => (
                <tr key={skill.id} className="border-b border-sky-100 hover:bg-sky-50">
                  <td className="py-3 px-4 align-top">
                    <div className="flex items-center gap-2">
                      <img
                        src={`/${skill.icon}`}
                        alt={skill.category}
                        className="w-5 h-5 text-sky-600"
                      />
                      <span className="font-medium text-slate-800 whitespace-nowrap">{skill.category}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-700">{skill.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile responsive layout */}
          <div className="md:hidden space-y-4">
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
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-sky-800">Contact</h3>
        <Contact />
      </div>
    </div>
  );
}

export default About;
