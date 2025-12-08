import React from 'react';

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  fullHeight?: boolean;
};

export default function Card({ children, className = '', title, icon: Icon, fullHeight = false }: CardProps) {
  return (
    <div className={`
      group relative overflow-hidden rounded-3xl border transition-all duration-300
      dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-blue-500/50 dark:hover:bg-slate-800/80
      bg-white/60 border-slate-200 hover:border-blue-400/50 hover:bg-white/80 hover:shadow-lg hover:shadow-blue-100/50
      backdrop-blur-md flex flex-col
      ${className}
    `}>
      {/* Glow Effect */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 blur-xl" />
      </div>

      <div className={`relative z-10 p-6 ${fullHeight ? 'h-full flex flex-col' : ''}`}>
        {(title || Icon) && (
          <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400">
            {Icon && <Icon size={18} />}
            {title && <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
