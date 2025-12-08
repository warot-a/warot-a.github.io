import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Briefcase,
  Award,
  GraduationCap,
  type LucideIcon
} from 'lucide-react';

export type IconName =
  | 'Terminal'
  | 'Cloud'
  | 'Code2'
  | 'Server'
  | 'Database'
  | 'Briefcase'
  | 'Award'
  | 'GraduationCap'
  | 'Mail'
  | 'Linkedin'
  | 'Github'
  | 'MapPin';

export const ICON_MAP: Record<IconName, LucideIcon> = {
  Terminal,
  Cloud,
  Code2,
  Server,
  Database,
  Briefcase,
  Award,
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  MapPin
};
