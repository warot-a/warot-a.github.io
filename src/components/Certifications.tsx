import certificationsData from '../data/certifications.json';

interface Certification {
  id: number;
  name: string;
  period: string;
  url?: string;
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
            {certification.url && (
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-sky-600 hover:text-sky-800 font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                View Certification →
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
