import emailIcon from '../assets/email.svg';
import locationIcon from '../assets/location.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function Contact() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-8">
      <a className="inline-flex items-center gap-2 text-sky-700 underline" href="mailto:tot.anusak@gmail.com">
        <img src={emailIcon} alt="Email" className="w-4 h-4" />
        tot.anusak@gmail.com
      </a>
      <a className="inline-flex items-center gap-2 text-sky-700 underline" href="https://www.linkedin.com/in/warota/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
        LinkedIn
      </a>
      <a className="inline-flex items-center gap-2 text-sky-700 underline" href="https://github.com/warot-a/" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="w-4 h-4" />
        GitHub
      </a>
      <div className="inline-flex items-center gap-2 text-slate-700">
        <img src={locationIcon} alt="Location" className="w-4 h-4" />
        <span>Khon Kaen, Thailand</span>
      </div>
    </div>
  );
}

export default Contact;
