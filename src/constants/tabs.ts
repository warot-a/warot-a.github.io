// Tab constants
export const TABS = {
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type TabType = typeof TABS[keyof typeof TABS];
