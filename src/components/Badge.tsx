import React from 'react';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="
    inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium
    bg-blue-50 text-blue-700 border border-blue-100
    dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800
  ">
    {children}
  </span>
);

export default Badge;
