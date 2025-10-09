// Tab constants
export const TABS = {
  ABOUT: 'about',
  PROJECTS: 'projects',
} as const;

export type TabType = typeof TABS[keyof typeof TABS];
