import type { ComponentType } from 'react';

const SocialButton = ({ icon: Icon, href, label }: { icon: ComponentType<{ size?: number; className?: string }>, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center justify-center w-full h-full p-4 rounded-3xl border transition-all duration-300 group
      dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-blue-500/50 dark:hover:bg-blue-600 dark:text-slate-300 dark:hover:text-white
      bg-white/60 border-slate-200 hover:border-blue-400/50 hover:bg-blue-600 text-slate-600 hover:text-white
      backdrop-blur-md
    "
  >
    <div className="flex flex-col items-center gap-2">
      <Icon size={28} className="transition-transform group-hover:scale-110" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  </a>
);

export default SocialButton;
