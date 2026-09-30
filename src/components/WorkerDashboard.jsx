// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { LogOut, Clock, MapPin, IndianRupee, Phone, ShieldAlert, CheckCircle, Edit3, Power } from 'lucide-react';

// export default function WorkerDashboard({ darkMode }) {
//   const navigate = useNavigate();
//   const [worker, setWorker] = useState(null);

//   useEffect(() => {
//     // Load current logged-in worker from localStorage
//     const savedWorker = JSON.parse(localStorage.getItem('currentWorker'));
//     if (!savedWorker) {
//       navigate('/add-worker');
//     } else {
//       setWorker(savedWorker);
//     }
//   }, [navigate]);

//   // Status Toggle (Free / Busy)
//   const toggleStatus = () => {
//     const updatedStatus = worker.status === 'Free' ? 'Busy' : 'Free';
//     const updatedWorker = { ...worker, status: updatedStatus };
    
//     setWorker(updatedWorker);
//     localStorage.setItem('currentWorker', JSON.stringify(updatedWorker));

//     // Update global workers list as well
//     const workersList = JSON.parse(localStorage.getItem('workersList')) || [];
//     const updatedList = workersList.map(w => w.phone === worker.phone ? updatedWorker : w);
//     localStorage.setItem('workersList', JSON.stringify(updatedList));
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('currentWorker');
//     navigate('/');
//   };

//   if (!worker) return null;

//   return (
//     <div className={`max-w-md mx-auto p-8 rounded-[2.5rem] shadow-2xl mt-8 mb-12 border transition-colors duration-300 ${
//       darkMode ? 'bg-slate-900 border-slate-800 text-white shadow-black/60' : 'bg-white border-slate-100 text-slate-900 shadow-xl'
//     }`}>
      
//       {/* Top Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
//             Worker Portal
//           </span>
//           <h2 className="text-xl font-black mt-1">Dashboard Panel</h2>
//         </div>
//         <button 
//           onClick={handleLogout}
//           className="flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 transition border border-rose-500/20"
//         >
//           <LogOut size={14} /> Logout
//         </button>
//       </div>

//       {/* 🔴 BOOKED STATUS ALERT (Jab worker book ho chuka ho) */}
//       {worker.isBooked ? (
//         <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border-2 border-rose-500/40 text-rose-500 flex items-center gap-3 animate-pulse">
//           <ShieldAlert size={28} className="flex-shrink-0" />
//           <div>
//             <p className="text-xs font-black uppercase tracking-wider text-rose-600">BOOKED (आरक्षित)</p>
//             <p className="text-xs font-bold">Aapko kisi client ne book kar liya hai!</p>
//           </div>
//         </div>
//       ) : (
//         <div className="mb-6 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center gap-3">
//           <CheckCircle size={22} className="flex-shrink-0" />
//           <p className="text-xs font-bold">Aapki profile bilkul active aur ready hai.</p>
//         </div>
//       )}

//       {/* Modern Profile Card */}
//       <div className={`p-6 rounded-[2rem] border mb-6 relative overflow-hidden backdrop-blur-xl ${
//         darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200/80'
//       }`}>
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
//               {worker.category}
//             </span>
//             <h3 className="text-2xl font-black mt-2 tracking-tight">{worker.name}</h3>
//           </div>
          
//           {/* Active / Busy Badge */}
//           <div className="text-right">
//             <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-black border ${
//               worker.status === 'Free' 
//                 ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' 
//                 : 'bg-rose-500/20 text-rose-500 border-rose-500/30'
//             }`}>
//               {worker.status === 'Free' ? '🟢 Active (Free)' : '🔴 Busy'}
//             </span>
//           </div>
//         </div>

//         <div className="space-y-3 pt-3 border-t border-slate-700/20 text-xs font-semibold">
//           <div className="flex items-center gap-2.5 opacity-90">
//             <Phone size={15} className="text-emerald-500" />
//             <span>{worker.phone}</span>
//           </div>
//           <div className="flex items-center gap-2.5 opacity-90">
//             <MapPin size={15} className="text-emerald-500" />
//             <span>{worker.address}</span>
//           </div>
//           <div className="flex items-center gap-2.5 opacity-90">
//             <IndianRupee size={15} className="text-emerald-500" />
//             <span>₹ {worker.charges} / day</span>
//           </div>
//         </div>
//       </div>

//       {/* Action Controls */}
//       <div className="space-y-3">
//         <button
//           onClick={toggleStatus}
//           className={`w-full py-4 rounded-2xl font-black transition flex items-center justify-center gap-2 text-xs shadow-lg ${
//             worker.status === 'Free' 
//               ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/30' 
//               : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
//           }`}
//         >
//           <Power size={15} />
//           {worker.status === 'Free' ? 'Switch to Busy (व्यस्त करें)' : 'Switch to Active / Free (उपलब्ध करें)'}
//         </button>

//         <button
//           onClick={() => navigate('/edit-worker')}
//           className={`w-full py-3.5 rounded-2xl font-black border transition text-xs flex items-center justify-center gap-2 ${
//             darkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-900'
//           }`}
//         >
//           <Edit3 size={15} /> Edit Profile Details (विवरण बदलें)
//         </button>
//       </div>

//     </div>
//   );
// }













import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  MapPin,
  IndianRupee,
  Phone,
  ShieldAlert,
  CheckCircle2,
  Edit3,
  Power,
  BriefcaseBusiness,
  UserRound,
  BadgeCheck,
  Clock3,
  ChevronRight,
  Sparkles,
  Activity,
} from 'lucide-react';

export default function WorkerDashboard({ darkMode }) {
  const navigate = useNavigate();
  const [worker, setWorker] = useState(null);

  const isDark = darkMode;

  useEffect(() => {
    try {
      const savedWorker = JSON.parse(
        localStorage.getItem('currentWorker')
      );

      if (!savedWorker) {
        navigate('/add-worker');
      } else {
        setWorker(savedWorker);
      }
    } catch (error) {
      console.error('Worker data error:', error);
      navigate('/add-worker');
    }
  }, [navigate]);

  /* =========================================================
     STATUS TOGGLE
  ========================================================= */

  const toggleStatus = () => {
    if (!worker) return;

    const updatedStatus =
      worker.status === 'Free' ? 'Busy' : 'Free';

    const updatedWorker = {
      ...worker,
      status: updatedStatus,
    };

    setWorker(updatedWorker);

    localStorage.setItem(
      'currentWorker',
      JSON.stringify(updatedWorker)
    );

    const workersList =
      JSON.parse(localStorage.getItem('workersList')) || [];

    const updatedList = workersList.map((w) =>
      w.phone === worker.phone ? updatedWorker : w
    );

    localStorage.setItem(
      'workersList',
      JSON.stringify(updatedList)
    );
  };

  /* =========================================================
     LOGOUT
  ========================================================= */

  const handleLogout = () => {
    localStorage.removeItem('currentWorker');
    navigate('/');
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (!worker) {
    return (
      <div
        className={`min-h-[80vh] flex items-center justify-center ${
          isDark ? 'bg-slate-950' : 'bg-slate-50'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center animate-pulse shadow-lg shadow-emerald-500/20">
            <ShieldAlert
              size={22}
              className="text-white"
            />
          </div>

          <p
            className={`text-xs font-bold ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  const isFree = worker.status === 'Free';
  const isBooked = Boolean(worker.isBooked);

  /* =========================================================
     INITIALS
  ========================================================= */

  const initials =
    worker.name
      ?.split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'WK';

  return (
    <div
      className={`relative min-h-[90vh] overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-[#020617] text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className={`absolute pointer-events-none -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[150px] ${
          isDark
            ? 'bg-emerald-500/[0.07]'
            : 'bg-emerald-400/[0.10]'
        }`}
      />

      <div
        className={`absolute pointer-events-none right-[-120px] top-1/3 w-[350px] h-[350px] rounded-full blur-[130px] ${
          isDark
            ? 'bg-blue-500/[0.05]'
            : 'bg-blue-400/[0.07]'
        }`}
      />

      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* ===================================================
            TOP BAR
        ==================================================== */}

        <div className="flex items-center justify-between mb-7">

          <div className="flex items-center gap-3">

            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                isDark
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10'
                  : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
              }`}
            >
              <BriefcaseBusiness size={21} />
            </div>

            <div>
              <p
                className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] ${
                  isDark
                    ? 'text-emerald-400'
                    : 'text-emerald-600'
                }`}
              >
                Worker Portal
              </p>

              <h1
                className={`text-lg sm:text-xl font-black tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                My Dashboard
              </h1>
            </div>
          </div>

          {/* Logout */}

          <button
            type="button"
            onClick={handleLogout}
            className={`group flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-2xl border text-xs font-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
              isDark
                ? 'bg-rose-500/[0.06] border-rose-500/15 text-rose-400 hover:bg-rose-500/10'
                : 'bg-rose-50 border-rose-100 text-rose-600 hover:bg-rose-100'
            }`}
          >
            <LogOut
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />

            <span className="hidden sm:block">
              Logout
            </span>
          </button>
        </div>

        {/* ===================================================
            MAIN PROFILE HERO
        ==================================================== */}

        <div
          className={`relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border p-5 sm:p-7 mb-5 ${
            isDark
              ? 'bg-white/[0.035] border-white/[0.08] shadow-2xl shadow-black/20'
              : 'bg-white border-slate-200 shadow-xl shadow-slate-200/60'
          }`}
        >
          {/* Decorative gradient */}

          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-emerald-500/[0.08] blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">

            {/* Avatar */}

            <div className="relative flex-shrink-0">

              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[1.7rem] flex items-center justify-center text-white text-2xl sm:text-3xl font-black bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 shadow-xl shadow-emerald-500/20`}
              >
                {initials}
              </div>

              {/* Online indicator */}

              <span
                className={`absolute -right-1.5 -bottom-1.5 w-7 h-7 rounded-full border-4 flex items-center justify-center ${
                  isDark
                    ? 'bg-slate-950 border-slate-950'
                    : 'bg-white border-white'
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    isFree
                      ? 'bg-emerald-500'
                      : 'bg-rose-500'
                  }`}
                />
              </span>
            </div>

            {/* Worker information */}

            <div className="flex-1 min-w-0">

              <div className="flex flex-wrap items-center gap-2 mb-2">

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wide ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  <BriefcaseBusiness size={11} />
                  {worker.category || 'Professional'}
                </span>

                <span className="inline-flex items-center gap-1 text-[9px] font-black text-emerald-500">
                  <BadgeCheck size={13} />
                  Profile
                </span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl font-black tracking-tight truncate ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-950'
                }`}
              >
                {worker.name}
              </h2>

              <p
                className={`mt-1 text-xs sm:text-sm font-medium ${
                  isDark
                    ? 'text-slate-400'
                    : 'text-slate-500'
                }`}
              >
                {worker.subService ||
                  'Professional Service Provider'}
              </p>

              {/* Status */}

              <div className="mt-4">

                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black border ${
                    isFree
                      ? isDark
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : isDark
                      ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                      : 'bg-rose-50 border-rose-200 text-rose-700'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isFree
                        ? 'bg-emerald-500'
                        : 'bg-rose-500'
                    }`}
                  />

                  {isFree
                    ? 'AVAILABLE FOR WORK'
                    : 'CURRENTLY BUSY'}
                </span>
              </div>
            </div>

            {/* Edit */}

            <button
              type="button"
              onClick={() => navigate('/edit-worker')}
              className={`self-start sm:self-center flex items-center gap-2 px-4 py-2.5 rounded-xl sm:rounded-2xl border text-xs font-black transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Edit3 size={14} />
              <span>Edit</span>
            </button>
          </div>
        </div>

        {/* ===================================================
            BOOKING ALERT
        ==================================================== */}

        {isBooked ? (
          <div
            className={`relative overflow-hidden mb-5 rounded-[1.5rem] border p-4 sm:p-5 ${
              isDark
                ? 'bg-rose-500/[0.07] border-rose-500/20'
                : 'bg-rose-50 border-rose-200'
            }`}
          >
            <div className="flex items-center gap-4">

              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
                <ShieldAlert size={22} />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-500">
                  Booking Active
                </p>

                <h3
                  className={`text-sm font-black mt-1 ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  You have been booked by a client
                </h3>

                <p
                  className={`text-[11px] mt-1 font-medium ${
                    isDark
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  आपका काम अभी booked है। उपलब्ध होने के बाद
                  status को फिर से Active करें।
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`relative overflow-hidden mb-5 rounded-[1.5rem] border p-4 ${
              isDark
                ? 'bg-emerald-500/[0.06] border-emerald-500/15'
                : 'bg-emerald-50 border-emerald-100'
            }`}
          >
            <div className="flex items-center gap-3">

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark
                    ? 'bg-emerald-500/10'
                    : 'bg-white'
                }`}
              >
                <CheckCircle2
                  size={20}
                  className="text-emerald-500"
                />
              </div>

              <div>
                <p className="text-xs font-black text-emerald-600">
                  Profile is Active
                </p>

                <p
                  className={`text-[11px] mt-0.5 font-medium ${
                    isDark
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Your profile is ready to receive new work.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            INFORMATION GRID
        ==================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">

          {/* Phone */}

          <div
            className={`rounded-2xl border p-4 ${
              isDark
                ? 'bg-white/[0.03] border-white/[0.07]'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Phone
                  size={15}
                  className="text-emerald-500"
                />
              </div>

              <span
                className={`text-[9px] font-black uppercase tracking-wider ${
                  isDark
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Phone
              </span>
            </div>

            <p
              className={`text-xs font-black truncate ${
                isDark
                  ? 'text-slate-200'
                  : 'text-slate-800'
              }`}
            >
              {worker.phone || 'Not provided'}
            </p>
          </div>

          {/* Location */}

          <div
            className={`rounded-2xl border p-4 ${
              isDark
                ? 'bg-white/[0.03] border-white/[0.07]'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <MapPin
                  size={15}
                  className="text-blue-500"
                />
              </div>

              <span
                className={`text-[9px] font-black uppercase tracking-wider ${
                  isDark
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Location
              </span>
            </div>

            <p
              className={`text-xs font-black truncate ${
                isDark
                  ? 'text-slate-200'
                  : 'text-slate-800'
              }`}
            >
              {worker.address || 'Location not provided'}
            </p>
          </div>

          {/* Charges */}

          <div
            className={`rounded-2xl border p-4 ${
              isDark
                ? 'bg-white/[0.03] border-white/[0.07]'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <IndianRupee
                  size={15}
                  className="text-amber-500"
                />
              </div>

              <span
                className={`text-[9px] font-black uppercase tracking-wider ${
                  isDark
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Daily Rate
              </span>
            </div>

            <p
              className={`text-sm font-black ${
                isDark
                  ? 'text-slate-200'
                  : 'text-slate-800'
              }`}
            >
              ₹ {worker.charges || '0'}
              <span
                className={`text-[10px] ml-1 font-semibold ${
                  isDark
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                / day
              </span>
            </p>
          </div>
        </div>

        {/* ===================================================
            AVAILABILITY CONTROL
        ==================================================== */}

        <div
          className={`relative overflow-hidden rounded-[2rem] border p-5 sm:p-6 ${
            isDark
              ? 'bg-white/[0.035] border-white/[0.08]'
              : 'bg-white border-slate-200 shadow-lg shadow-slate-200/40'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isFree
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'bg-rose-500/10 text-rose-500'
                }`}
              >
                <Activity size={22} />
              </div>

              <div>
                <p
                  className={`text-[9px] font-black uppercase tracking-widest ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  Availability
                </p>

                <h3
                  className={`text-base font-black mt-1 ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {isFree
                    ? 'You are available'
                    : 'You are currently busy'}
                </h3>

                <p
                  className={`text-[10px] mt-1 font-medium ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  Change your availability anytime.
                </p>
              </div>
            </div>

            {/* Toggle Button */}

            <button
              type="button"
              onClick={toggleStatus}
              className={`group w-full sm:w-auto min-w-[190px] px-5 py-3.5 rounded-2xl font-black text-xs text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
                isFree
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/20'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/20'
              }`}
            >
              <Power
                size={16}
                className="group-hover:rotate-90 transition-transform duration-300"
              />

              {isFree
                ? 'Switch to Busy'
                : 'Set Available'}
            </button>
          </div>
        </div>

        {/* ===================================================
            QUICK ACTIONS
        ==================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">

          {/* Edit Profile */}

          <button
            type="button"
            onClick={() => navigate('/edit-worker')}
            className={`group flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? 'bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.06]'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-3">

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-blue-50 text-blue-600'
                }`}
              >
                <Edit3 size={17} />
              </div>

              <div>
                <p
                  className={`text-xs font-black ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  Edit Profile
                </p>

                <p
                  className={`text-[10px] mt-0.5 ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  Update your details
                </p>
              </div>
            </div>

            <ChevronRight
              size={17}
              className={`group-hover:translate-x-1 transition-transform ${
                isDark
                  ? 'text-slate-600'
                  : 'text-slate-400'
              }`}
            />
          </button>

          {/* Profile Status */}

          <div
            className={`flex items-center justify-between p-4 rounded-2xl border ${
              isDark
                ? 'bg-white/[0.03] border-white/[0.07]'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isBooked
                    ? 'bg-rose-500/10 text-rose-500'
                    : 'bg-emerald-500/10 text-emerald-500'
                }`}
              >
                {isBooked ? (
                  <Clock3 size={17} />
                ) : (
                  <CheckCircle2 size={17} />
                )}
              </div>

              <div>
                <p
                  className={`text-xs font-black ${
                    isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {isBooked
                    ? 'Currently Booked'
                    : 'Ready for Work'}
                </p>

                <p
                  className={`text-[10px] mt-0.5 ${
                    isDark
                      ? 'text-slate-500'
                      : 'text-slate-400'
                  }`}
                >
                  {isBooked
                    ? 'Client booking active'
                    : 'Accept new requests'}
                </p>
              </div>
            </div>

            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isBooked
                  ? 'bg-rose-500'
                  : 'bg-emerald-500'
              }`}
            />
          </div>
        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="flex flex-col items-center mt-8">

          <div
            className={`flex items-center gap-2 text-[10px] font-bold ${
              isDark
                ? 'text-slate-600'
                : 'text-slate-400'
            }`}
          >
            <ShieldAlert size={13} className="text-emerald-500" />
            Your profile is protected by Bharat Seva Connect
          </div>

          <p
            className={`mt-2 text-[9px] ${
              isDark
                ? 'text-slate-700'
                : 'text-slate-400'
            }`}
          >
            Connect • Work • Grow
          </p>
        </div>
      </div>
    </div>
  );
}