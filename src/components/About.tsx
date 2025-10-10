import Contact from './Contact';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';

function About() {
  return (
    <div className="space-y-6">
      <h2 className="mb-3 text-xl font-semibold text-sky-800 text-center">About me</h2>
      <p className="text-slate-700 text-center">
        Senior Software Engineer | Full-Stack Developer experienced in building scalable cloud-native applications, with expertise across frontend, backend, and DevOps for enterprise environments.
      </p>

      <div>
        <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Contact</h3>
        <Contact />
      </div>

      <div>
        <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Skills</h3>
        <Skills />
      </div>

      <div>
        <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Education</h3>
        <Education />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Professional Experience</h3>
          <Experience />
        </div>
        <div>
          <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Certifications</h3>
          <Certifications />
        </div>
      </div>
    </div>
  );
}

export default About;
