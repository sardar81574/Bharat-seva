// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, UserPlus, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

// export default function FrontPage({ t, darkMode }) {
//   const navigate = useNavigate();

//   return (
//     <div className={`relative min-h-[82vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
//       {/* Background Glowing Ambient Effects */}
//       <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/15'} rounded-full blur-[140px] pointer-events-none`}></div>
//       <div className={`absolute bottom-10 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/15'} rounded-full blur-[120px] pointer-events-none`}></div>

//       {/* Minimal Header */}
//       <div className="text-center max-w-2xl mb-12 sm:mb-16 relative z-10">
//         <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm ${darkMode ? 'bg-slate-900 text-emerald-400 border border-slate-800' : 'bg-white text-emerald-600 border border-emerald-200'}`}>
//           <Sparkles size={14} className="animate-pulse" /> Bharat Seva Connect
//         </div>
//         <h1 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
//           Select Your Action
//         </h1>
//         <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
//           Choose below to search for verified local professionals or register a new worker.
//         </p>
//       </div>

//       {/* Two Clean, Premium & Responsive Panels */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full relative z-10">
        
//         {/* 1. Search Worker Panel (Navigates to /search-worker) */}
//         <div 
//           onClick={() => navigate('/search-worker')}
//           className={`group relative backdrop-blur-2xl p-6 sm:p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden border-2 ${
//             darkMode 
//               ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500' 
//               : 'bg-white/90 border-blue-100 hover:border-blue-500'
//           }`}
//         >
//           <div className="absolute -right-12 -top-12 w-36 h-36 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

//           <div>
//             <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:rotate-6 transition-transform duration-300">
//               <Search size={28} />
//             </div>
//             <h2 className={`text-xl sm:text-2xl font-black mb-2 group-hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
//               Search Worker (काम ढूंढें)
//             </h2>
//             <p className={`text-xs sm:text-sm mb-8 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
//               Explore, filter, and connect with verified local professionals and daily wage experts instantly.
//             </p>
//           </div>

//           <div className={`py-3.5 px-5 rounded-2xl font-bold text-xs flex items-center justify-between transition-all duration-300 shadow-sm ${
//             darkMode 
//               ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' 
//               : 'bg-blue-50 text-blue-800 group-hover:bg-blue-600 group-hover:text-white'
//           }`}>
//             <span>Browse & Search Workers</span>
//             <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
//           </div>
//         </div>

//         {/* 2. Add Worker Panel (Navigates to /add-worker) */}
//         <div 
//           onClick={() => navigate('/add-worker')}
//           className={`group relative backdrop-blur-2xl p-6 sm:p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden border-2 ${
//             darkMode 
//               ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500' 
//               : 'bg-white/90 border-emerald-100 hover:border-emerald-500'
//           }`}
//         >
//           <div className="absolute -right-12 -top-12 w-36 h-36 bg-emerald-500/10 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

//           <div>
//             <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:rotate-6 transition-transform duration-300">
//               <UserPlus size={28} />
//             </div>
//             <h2 className={`text-xl sm:text-2xl font-black mb-2 group-hover:text-emerald-500 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
//               Add Worker (कामगार जोड़ें)
//             </h2>
//             <p className={`text-xs sm:text-sm mb-8 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
//               Register a new worker with their skills, daily wages, contact details, and live availability status.
//             </p>
//           </div>

//           <div className={`py-3.5 px-5 rounded-2xl font-bold text-xs flex items-center justify-between transition-all duration-300 shadow-sm ${
//             darkMode 
//               ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white' 
//               : 'bg-emerald-50 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white'
//           }`}>
//             <span>Register New Worker</span>
//             <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
//           </div>
//         </div>

//       </div>

//       <div className="mt-12 flex items-center gap-2 text-xs font-semibold opacity-75">
//         <ShieldCheck size={16} className="text-emerald-500" />
//         <span>Secure & Verified Local Community Network</span>
//       </div>

//     </div>
//   );
// }












import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  UserPlus,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  MapPin,
  CheckCircle2,
  Zap,
  ChevronRight,
} from 'lucide-react';

export default function FrontPage({ t, darkMode }) {
  const navigate = useNavigate();

  const isDark = darkMode;

  return (
    <div
      className={`relative min-h-[90vh] overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-[#020617] text-white'
          : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main glow */}
      <div
        className={`absolute pointer-events-none left-1/2 top-10 -translate-x-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full blur-[150px] ${
          isDark ? 'bg-emerald-500/[0.08]' : 'bg-emerald-400/[0.12]'
        }`}
      />

      {/* Blue glow */}
      <div
        className={`absolute pointer-events-none -left-32 top-1/3 w-[350px] h-[350px] rounded-full blur-[120px] ${
          isDark ? 'bg-blue-500/[0.08]' : 'bg-blue-400/[0.10]'
        }`}
      />

      {/* Purple glow */}
      <div
        className={`absolute pointer-events-none -right-32 bottom-10 w-[400px] h-[400px] rounded-full blur-[140px] ${
          isDark ? 'bg-violet-500/[0.07]' : 'bg-violet-400/[0.08]'
        }`}
      />

      {/* Grid texture */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-[0.035] ${
          isDark ? 'bg-white' : 'bg-slate-900'
        }`}
        style={{
          maskImage:
            'linear-gradient(to bottom, black, transparent 80%)',
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20">

        {/* =====================================================
            TOP BADGE
        ====================================================== */}

        <div className="flex justify-center mb-7">
          <div
            className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-sm backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] ${
              isDark
                ? 'bg-white/[0.04] border-white/10 text-emerald-400'
                : 'bg-white border-emerald-100 text-emerald-600 shadow-emerald-100/50'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <Sparkles size={14} />

            <span className="text-[11px] sm:text-xs font-extrabold tracking-wide">
              BHARAT SEVA CONNECT
            </span>

            <ChevronRight
              size={13}
              className="opacity-50 group-hover:translate-x-0.5 transition-transform"
            />
          </div>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto">

          <div
            className={`inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold ${
              isDark
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-emerald-50 text-emerald-700'
            }`}
          >
            <Zap size={13} />
            Trusted Local Service Network
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.04em] leading-[1.05] ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Connect With
            <span className="block mt-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 bg-clip-text text-transparent">
              The Right Worker.
            </span>
          </h1>

          <p
            className={`mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-7 font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Find trusted local professionals or register your skills
            and connect with people who need your service.
          </p>

          {/* =====================================================
              MINI STATS
          ====================================================== */}

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mt-8">

            <div
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
                isDark
                  ? 'bg-white/[0.03] border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-600 shadow-sm'
              }`}
            >
              <Users size={15} className="text-blue-500" />
              <span className="text-[11px] sm:text-xs font-bold">
                Local Professionals
              </span>
            </div>

            <div
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
                isDark
                  ? 'bg-white/[0.03] border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-600 shadow-sm'
              }`}
            >
              <ShieldCheck size={15} className="text-emerald-500" />
              <span className="text-[11px] sm:text-xs font-bold">
                Verified Profiles
              </span>
            </div>

            <div
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
                isDark
                  ? 'bg-white/[0.03] border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-600 shadow-sm'
              }`}
            >
              <MapPin size={15} className="text-orange-500" />
              <span className="text-[11px] sm:text-xs font-bold">
                Nearby Services
              </span>
            </div>

          </div>
        </div>

        {/* =====================================================
            ACTION CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 max-w-5xl mx-auto mt-12 sm:mt-14">

          {/* ===================================================
              SEARCH WORKER
          ==================================================== */}

          <button
            type="button"
            onClick={() => navigate('/search-worker')}
            className={`group relative text-left overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? 'bg-white/[0.035] border-white/10 hover:border-blue-500/40 hover:bg-blue-500/[0.04] shadow-2xl shadow-black/20'
                : 'bg-white border-slate-200 hover:border-blue-300 shadow-xl shadow-slate-200/60 hover:shadow-blue-100'
            }`}
          >
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500/[0.08] blur-2xl group-hover:bg-blue-500/[0.15] group-hover:scale-125 transition-all duration-700" />

            <div className="absolute right-7 top-7 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight
                size={21}
                className="text-blue-500 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              />
            </div>

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-[1.35rem] flex items-center justify-center text-white bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-blue-500/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300"
              >
                <Search size={29} strokeWidth={2.4} />
              </div>

              {/* Small label */}
              <div className="flex items-center gap-2 mt-7 mb-3">
                <span
                  className={`text-[10px] uppercase tracking-[0.16em] font-black ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  Find Services
                </span>

                <span className="h-1 w-1 rounded-full bg-blue-500" />

                <span
                  className={`text-[10px] font-bold ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  SEARCH
                </span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Search Worker
              </h2>

              <p
                className={`mt-3 text-sm leading-6 max-w-md font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Find skilled professionals near you by service,
                location, price, rating and availability.
              </p>

              {/* Feature points */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  'Nearby Workers',
                  'Filter by Skills',
                  'Direct Contact',
                ].map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold ${
                      isDark
                        ? 'bg-blue-500/10 text-blue-300'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    <CheckCircle2 size={12} />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`mt-7 flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900 border border-white/5 group-hover:bg-blue-600'
                    : 'bg-blue-50 group-hover:bg-blue-600'
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-extrabold ${
                    isDark
                      ? 'text-blue-400 group-hover:text-white'
                      : 'text-blue-700 group-hover:text-white'
                  }`}
                >
                  Browse Workers
                </span>

                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400 group-hover:bg-white/15 group-hover:text-white'
                      : 'bg-white text-blue-600 group-hover:bg-white/15 group-hover:text-white'
                  }`}
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>
          </button>

          {/* ===================================================
              ADD WORKER
          ==================================================== */}

          <button
            type="button"
            onClick={() => navigate('/add-worker')}
            className={`group relative text-left overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              isDark
                ? 'bg-white/[0.035] border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.04] shadow-2xl shadow-black/20'
                : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xl shadow-slate-200/60 hover:shadow-emerald-100'
            }`}
          >
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-emerald-500/[0.08] blur-2xl group-hover:bg-emerald-500/[0.15] group-hover:scale-125 transition-all duration-700" />

            <div className="absolute right-7 top-7 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight
                size={21}
                className="text-emerald-500 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              />
            </div>

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-[1.35rem] flex items-center justify-center text-white bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 shadow-xl shadow-emerald-500/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300"
              >
                <UserPlus size={29} strokeWidth={2.4} />
              </div>

              {/* Small label */}
              <div className="flex items-center gap-2 mt-7 mb-3">
                <span
                  className={`text-[10px] uppercase tracking-[0.16em] font-black ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  Join Network
                </span>

                <span className="h-1 w-1 rounded-full bg-emerald-500" />

                <span
                  className={`text-[10px] font-bold ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  REGISTER
                </span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Add Worker
              </h2>

              <p
                className={`mt-3 text-sm leading-6 max-w-md font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Create your professional profile, add your skills,
                set your wages and let customers find you.
              </p>

              {/* Feature points */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  'Create Profile',
                  'Show Your Skills',
                  'Get Customers',
                ].map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold ${
                      isDark
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    <CheckCircle2 size={12} />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`mt-7 flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900 border border-white/5 group-hover:bg-emerald-600'
                    : 'bg-emerald-50 group-hover:bg-emerald-600'
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-extrabold ${
                    isDark
                      ? 'text-emerald-400 group-hover:text-white'
                      : 'text-emerald-700 group-hover:text-white'
                  }`}
                >
                  Register as Worker
                </span>

                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-white/15 group-hover:text-white'
                      : 'bg-white text-emerald-600 group-hover:bg-white/15 group-hover:text-white'
                  }`}
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* =====================================================
            TRUST SECTION
        ====================================================== */}

        <div className="flex flex-col items-center mt-10 sm:mt-12">

          <div
            className={`h-px w-24 mb-5 ${
              isDark ? 'bg-white/10' : 'bg-slate-200'
            }`}
          />

          <div
            className={`flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[10px] sm:text-xs font-bold ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              Secure Network
            </span>

            <span
              className={`hidden sm:block w-1 h-1 rounded-full ${
                isDark ? 'bg-slate-700' : 'bg-slate-300'
              }`}
            />

            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-blue-500" />
              Local Connections
            </span>

            <span
              className={`hidden sm:block w-1 h-1 rounded-full ${
                isDark ? 'bg-slate-700' : 'bg-slate-300'
              }`}
            />

            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Community Driven
            </span>
          </div>

          <p
            className={`mt-4 text-[9px] sm:text-[10px] font-medium text-center ${
              isDark ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Bharat Seva Connect • Connecting Skills With Opportunities
          </p>
        </div>
      </div>
    </div>
  );
}