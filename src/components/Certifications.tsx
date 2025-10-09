import certificationsData from '../data/certifications.json';

interface Certification {
  id: number;
  name: string;
  period: string;
}

function Certifications() {
  const certifications: Certification[] = certificationsData;

  return (
    <div className="space-y-3">
      <ul className="space-y-2 text-slate-700">
        {certifications.map((certification) => (
          <li key={certification.id}>
            <strong>{certification.name}</strong>
            <div className="text-sm">{certification.period}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
