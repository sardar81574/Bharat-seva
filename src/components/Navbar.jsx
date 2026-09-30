// import React from 'react';
// import { Globe, Sun, Moon, ShieldCheck } from 'lucide-react';

// export default function Navbar({ t, lang, setLang, darkMode, setDarkMode }) {

//   return (
//     <header className={`${darkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'} backdrop-blur-md border-b shadow-sm sticky top-0 z-50 transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        
//         {/* Brand / Logo (No Navigation on click now) */}
//         <div className="flex items-center gap-2.5 select-none">
//           <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
//             <ShieldCheck size={22} className="stroke-[2.5]" />
//           </div>
//           <div>
//             <span className="font-black text-base md:text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
//               {t.title || "Bharat Seva Connect"}
//             </span>
//             <span className={`block text-[10px] font-bold tracking-widest uppercase opacity-60 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
//               Verified Network
//             </span>
//           </div>
//         </div>
        
//         {/* Actions (Language & Theme Toggle) */}
//         <div className="flex items-center gap-3">
          
//           {/* Theme Toggle Button */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className={`px-3.5 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition-all duration-300 shadow-sm border ${
//               darkMode 
//                 ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 shadow-amber-500/5' 
//                 : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
//             }`}
//             title="Toggle Dark/Light Mode"
//           >
//             {darkMode ? <Sun size={16} className="text-amber-400 animate-spin-slow" /> : <Moon size={16} className="text-slate-600" />}
//             <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
//           </button>

//           {/* Language Toggle Button */}
//           <button 
//             onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
//             className={`px-4 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition-all duration-300 shadow-sm border ${
//               darkMode 
//                 ? 'bg-emerald-950/50 border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60' 
//                 : 'bg-emerald-50/80 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
//             }`}
//           >
//             <Globe size={16} className="text-emerald-500" /> 
//             <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// } 












import React from 'react';
import {
  Globe,
  Sun,
  Moon,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

export default function Navbar({
  t,
  lang,
  setLang,
  darkMode,
  setDarkMode,
}) {
  const isDark = darkMode;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-2xl transition-all duration-300 ${
        isDark
          ? 'bg-slate-950/85 border-white/[0.07] text-white'
          : 'bg-white/85 border-slate-200/80 text-slate-900'
      }`}
    >
      {/* Top subtle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div className="flex items-center gap-3 select-none">

            {/* Logo */}
            <div
              className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-[1rem] flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 shadow-emerald-500/20'
                  : 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 shadow-emerald-500/25'
              }`}
            >
              {/* Logo glow */}
              <div className="absolute inset-0 rounded-[1rem] bg-emerald-400/20 blur-md" />

              <ShieldCheck
                size={24}
                strokeWidth={2.5}
                className="relative z-10"
              />

              {/* Verified dot */}
              <span className="absolute -right-1 -bottom-1 w-4 h-4 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </span>
            </div>

            {/* Brand Text */}
            <div className="leading-none">

              <div className="flex items-center gap-1.5">
                <span
                  className="font-black text-[16px] sm:text-[18px] tracking-[-0.02em] bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent"
                >
                  {t?.title || 'Bharat Seva Connect'}
                </span>

                <Sparkles
                  size={12}
                  className="hidden sm:block text-emerald-500"
                />
              </div>

              <div
                className={`flex items-center gap-1.5 mt-1.5 text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-black ${
                  isDark
                    ? 'text-emerald-400/80'
                    : 'text-emerald-700/80'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Network
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT ACTIONS
          ====================================================== */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/* =================================================
                NETWORK STATUS
            ================================================== */}

            <div
              className={`hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
                isDark
                  ? 'bg-emerald-500/[0.06] border-emerald-500/10 text-emerald-400'
                  : 'bg-emerald-50 border-emerald-100 text-emerald-700'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[10px] font-black tracking-wide">
                ONLINE
              </span>
            </div>

            {/* =================================================
                THEME TOGGLE
            ================================================== */}

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                darkMode
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title={
                darkMode
                  ? 'Switch to Light Mode'
                  : 'Switch to Dark Mode'
              }
              className={`group relative h-10 sm:h-11 px-3 sm:px-3.5 rounded-xl sm:rounded-2xl border flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                isDark
                  ? 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-amber-400/30'
                  : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {/* Icon container */}
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'bg-amber-400/10'
                    : 'bg-slate-200/70'
                }`}
              >
                {isDark ? (
                  <Sun
                    size={15}
                    className="text-amber-400 group-hover:rotate-45 transition-transform duration-300"
                  />
                ) : (
                  <Moon
                    size={15}
                    className="text-slate-600 group-hover:-rotate-12 transition-transform duration-300"
                  />
                )}
              </span>

              <span
                className={`hidden sm:block text-[10px] font-black ${
                  isDark
                    ? 'text-slate-300'
                    : 'text-slate-600'
                }`}
              >
                {isDark ? 'LIGHT' : 'DARK'}
              </span>
            </button>

            {/* =================================================
                LANGUAGE
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setLang(lang === 'en' ? 'hi' : 'en')
              }
              aria-label="Change language"
              title="Change Language"
              className={`group h-10 sm:h-11 px-3 sm:px-4 rounded-xl sm:rounded-2xl border flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                isDark
                  ? 'bg-emerald-500/[0.07] border-emerald-500/15 text-emerald-300 hover:bg-emerald-500/[0.12] hover:border-emerald-400/30'
                  : 'bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-200'
              }`}
            >
              {/* Globe */}
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  isDark
                    ? 'bg-emerald-500/10'
                    : 'bg-white/80'
                }`}
              >
                <Globe
                  size={15}
                  className="text-emerald-500 group-hover:rotate-12 transition-transform duration-300"
                />
              </span>

              {/* Language */}
              <span className="text-[10px] sm:text-xs font-black">
                {lang === 'en' ? 'हिन्दी' : 'English'}
              </span>

              <ChevronDown
                size={13}
                className="hidden sm:block opacity-50 group-hover:translate-y-0.5 transition-transform"
              />
            </button>

          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE BOTTOM ACCENT
      ====================================================== */}

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px ${
          isDark
            ? 'bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent'
            : 'bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent'
        }`}
      />
    </header>
  );
}