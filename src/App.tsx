import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import { TABS, type TabType } from './constants/tabs';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabType>(TABS.ABOUT);

  // Get tab from URL path
  const getTabFromPath = (pathname: string): TabType => {
    if (pathname === `/${TABS.PROJECTS}`) return TABS.PROJECTS;
    if (pathname === `/${TABS.CONTACT}`) return TABS.CONTACT;
    return TABS.ABOUT;
  };

  // Update tab when URL changes
  useEffect(() => {
    const currentTab = getTabFromPath(location.pathname);
    setTab(currentTab);
  }, [location.pathname]);

  // Update URL when tab changes
  const handleTabChange = (newTab: TabType) => {
    setTab(newTab);
    const path = newTab === TABS.ABOUT ? '/' : `/${newTab}`;
    navigate(path);
  };

  // Initialize correct tab on first load
  useEffect(() => {
    const currentTab = getTabFromPath(location.pathname);
    if (location.pathname === '/') {
      setTab(TABS.ABOUT);
    } else {
      setTab(currentTab);
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <div className="min-h-screen bg-sky-50 text-slate-900">
        <Header tab={tab} setTab={handleTabChange} />

        <main className="mx-auto max-w-5xl px-4 py-10">
          <section className="rounded-2xl border border-sky-200 bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-sky-800">
              {tab === TABS.ABOUT ? 'About me' : tab === TABS.PROJECTS ? 'Projects' : 'Contact'}
            </h2>
            {tab === TABS.ABOUT && <About />}
            {tab === TABS.PROJECTS && <Projects />}
            {tab === TABS.CONTACT && <Contact />}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
