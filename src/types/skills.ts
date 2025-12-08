export interface SkillCategory {
  title: string;
  iconName: string;
  items: string[];
}

export interface Skills {
  [key: string]: SkillCategory;
}
