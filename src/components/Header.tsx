import { Sun, Moon } from 'lucide-react';

type HeaderProps = {
  darkMode: boolean;
  onToggleDarkMode: () => void;
};

const Header = ({ darkMode, onToggleDarkMode }: HeaderProps) => (
  <header className="flex justify-end mb-8">
    <button
      onClick={onToggleDarkMode}
      className="
        p-3 rounded-full border transition-all
        dark:bg-slate-800 dark:border-slate-700 dark:text-yellow-400 dark:hover:bg-slate-700
        bg-white border-slate-200 text-slate-600 hover:bg-slate-100
      "
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  </header>
);

export default Header;
