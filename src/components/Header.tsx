import { TABS, type TabType } from '../constants/tabs';

interface HeaderProps {
  tab: TabType;
  setTab: (tab: TabType) => void;
}

function Header({ tab, setTab }: HeaderProps) {
  return (
    <header className="border-b border-sky-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-sky-700">Warot Anusakprasit</h1>
        <nav className="flex gap-3">
          {Object.values(TABS).map(k => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize
              ${tab === k ? 'bg-sky-600 text-white' : 'text-sky-700 hover:bg-sky-100'}`}
            >
              {k}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
