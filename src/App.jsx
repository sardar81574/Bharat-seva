import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { translations } from './translations';

// Components
import Navbar from './components/Navbar';
import WorkerDashboard from './components/WorkerDashboard';
import EditWorker from './components/EditWorker';

// Pages
import FrontPage from './pages/frontpage';
import SearchWorker from './pages/SearchWorker';
import AddWorker from './pages/AddWorker';
import ClientSearch from './pages/ClientSearch';
import DepartmentWorkers from './pages/DepartmentWorkers';

export default function App() {
  const [lang, setLang] = useState('hi'); // Default Hindi
  const [darkMode, setDarkMode] = useState(false);
  const [currentWorker, setCurrentWorker] = useState(() => {
    const saved = localStorage.getItem('currentWorker');
    return saved ? JSON.parse(saved) : null;
  });

  // Sync currentWorker to localStorage when it changes
  useEffect(() => {
    if (currentWorker) {
      localStorage.setItem('currentWorker', JSON.stringify(currentWorker));
    } else {
      localStorage.removeItem('currentWorker');
    }
  }, [currentWorker]);

  const t = translations[lang] || translations['hi'];

  return (
    <BrowserRouter>
      <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        
        {/* Navbar Component */}
        <Navbar 
          t={t} 
          lang={lang} 
          setLang={setLang} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            {/* Front Page Route */}
            <Route path="/" element={<FrontPage t={t} darkMode={darkMode} />} />

            {/* Other Routes */}
            <Route path="/client-search" element={<ClientSearch t={t} darkMode={darkMode} />} />
            <Route path="/search-worker" element={<SearchWorker t={t} darkMode={darkMode} />} />
            <Route path="/add-worker" element={<AddWorker t={t} darkMode={darkMode} />} />
            
            {/* Added missing `t` prop for consistent translations */}
            <Route path="/department/:categoryName" element={<DepartmentWorkers t={t} darkMode={darkMode} />} />
            <Route path="/worker-dashboard" element={<WorkerDashboard t={t} darkMode={darkMode} currentWorker={currentWorker} setCurrentWorker={setCurrentWorker} />} />
            <Route path="/edit-worker" element={<EditWorker t={t} darkMode={darkMode} currentWorker={currentWorker} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}