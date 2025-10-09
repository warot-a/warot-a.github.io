import Contact from './Contact';
import Skills from './Skills';

function About() {
  return (
    <div className="space-y-6">
      <h2 className="mb-3 text-xl font-semibold text-sky-800 text-center">About me</h2>
      <p className="text-slate-700">
        Full-Stack Software Developer experienced in building scalable cloud-native applications, with expertise across frontend, backend, and DevOps for enterprise environments.
      </p>

      <div>
        <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Skills</h3>
        <Skills />
      </div>

      <div>
        <h3 className="text-center mb-3 text-lg font-semibold text-sky-800">Contact</h3>
        <Contact />
      </div>
    </div>
  );
}

export default About;
