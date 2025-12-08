import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Cloud,
  Briefcase,
  Award,
  GraduationCap
} from 'lucide-react';

import Card from './components/Card';
import Footer from './components/Footer';
import Badge from './components/Badge';
import SocialButton from './components/SocialButton';

import PERSONAL_INFO from './data/personalInfo.json';
import EXPERIENCE from './data/experience.json';
import SKILLS from './data/skills.json';
import PROJECTS from './data/projects.json';
import CERTS from './data/certs.json';
import SKILL_CATEGORIES from './data/skillCategories.json';
import { ICON_MAP, type IconName } from './types/icons';

export default function App() {
  const [darkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500
      ${darkMode ? 'bg-[#0B1120] text-slate-200 selection:bg-blue-500/30' : 'bg-slate-50 text-slate-900 selection:bg-blue-200'}
    `}>

      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* 1. Hero Profile (Span 2x2) */}
          <Card className="md:col-span-2 md:row-span-2 flex justify-center flex-col">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-blue-500/20">
                  WA
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>
            </div>
          </Card>

          {/* 2. Location (1x1) */}
          <Card className="flex items-center justify-center text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">Based in</p>
                <p className="font-medium">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </Card>

          {/* 3. Education (1x1) */}
          <Card className="flex flex-col justify-between">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
              <GraduationCap size={18} />
              <h3 className="text-sm font-semibold uppercase">Education</h3>
            </div>
            <div>
              <p className="font-bold text-sm">Chulalongkorn University</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">B.Eng. Computer Engineering</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">2005–2009</p>
            </div>
          </Card>

          {/* 4. Experience (Tall Vertical - 1x3 on LG) */}
          <Card className="md:col-span-1 md:row-span-3 lg:row-span-3" title="Experience" icon={Briefcase} fullHeight>
            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-2 space-y-6">
              {EXPERIENCE.map((job, idx) => (
                <div key={idx} className="ml-6 relative">
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900" />
                  <h4 className="font-bold text-sm">{job.role}</h4>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{job.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-mono">{job.period}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* 5. Social Links (Row of 1x1s or Grid) */}
          <div className="grid grid-cols-3 gap-4 md:col-span-2">
            <SocialButton icon={Mail} href={`mailto:${PERSONAL_INFO.email}`} label="Email" />
            <SocialButton icon={Linkedin} href={PERSONAL_INFO.linkedin} label="LinkedIn" />
            <SocialButton icon={Github} href={PERSONAL_INFO.github} label="GitHub" />
          </div>

          {/* 6. Skills (2x2) */}
          <Card className="md:col-span-2 md:row-span-2" title="Technical Arsenal" icon={Code2}>
            <div className="space-y-4">
              {SKILL_CATEGORIES.map((category) => {
                const IconComponent = ICON_MAP[category.icon as IconName];
                const categorySkills = SKILLS[category.key as keyof typeof SKILLS];
                return (
                  <div key={category.key}>
                    <p className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1">
                      <IconComponent size={12} /> {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(categorySkills as string[]).map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* 7. Certifications (1x1) */}
          <Card className="md:col-span-1" title="Certifications" icon={Award}>
            <ul className="space-y-2">
              {CERTS.map((cert, idx) => (
                <li key={idx} className="text-xs border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                  <span className="block font-medium text-slate-700 dark:text-slate-300">Microsoft Certified</span>
                  <span className="block text-slate-500">{cert.replace('Microsoft Certified: ', '')}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* 8. Projects (Various sizes) */}

          {/* Featured Project */}
          <Card className="md:col-span-2 md:row-span-1" title="Featured Project: PaaS" icon={Cloud}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="font-bold text-lg">{PROJECTS[0].title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{PROJECTS[0].desc}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-4">
                {PROJECTS[0].tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{t}</span>)}
              </div>
            </div>
          </Card>

          {/* Other Projects */}
          {PROJECTS.slice(1).map((project, idx) => (
            <Card key={idx} className="md:col-span-1" title="Project">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-base leading-tight">{project.title}</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">{project.org}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 mb-4 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[9px] uppercase tracking-wide text-slate-400">{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}

        </div>

        <Footer />

      </div>
    </div>
  );
}
