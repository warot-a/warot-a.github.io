import experiencesData from '../data/experiences.json';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
}

function Experience() {
  const experiences: Experience[] = experiencesData;

  return (
    <div className="space-y-3">
      <ul className="space-y-2 text-slate-700">
        {experiences.map((experience) => (
          <li key={experience.id}>
            <strong>{experience.title}</strong>
            <div className="text-sm">{experience.company} ({experience.period})</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
