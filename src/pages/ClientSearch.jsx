// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Building2, Wrench, Tractor, Stethoscope, GraduationCap, Truck, Sparkles, MapPin, ShieldCheck, IndianRupee, ChevronRight, Star } from 'lucide-react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export default function ClientSearch({ t, darkMode }) {
//   const navigate = useNavigate();
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const clientInfo = JSON.parse(localStorage.getItem('currentClient')) || { name: 'User', address: 'Jabalpur' };

//   const departments = [
//     { 
//       id: 'Electrician', 
//       name: 'CONSTRUCTION & HOME', 
//       hindi: 'निर्माण, बिजली एवं प्लंबिंग', 
//       icon: Building2, 
//       iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
//       badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
//       barColor: 'from-blue-600 to-indigo-600'
//     },
//     { 
//       id: 'Contractor', 
//       name: 'CONTRACTOR & MASON', 
//       hindi: 'राजमिस्त्री एवं ठेकेदार', 
//       icon: Wrench, 
//       iconBg: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
//       badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
//       barColor: 'from-cyan-600 to-teal-600'
//     },
//     { 
//       id: 'Agriculture', 
//       name: 'AGRICULTURE & FARMING', 
//       hindi: 'कृषि एवं किसान सहायता', 
//       icon: Tractor, 
//       iconBg: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
//       badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
//       barColor: 'from-emerald-600 to-green-600'
//     },
//     { 
//       id: 'Health', 
//       name: 'HEALTHCARE & NURSING', 
//       hindi: 'स्वास्थ्य सेवा एवं देखभाल', 
//       icon: Stethoscope, 
//       iconBg: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
//       badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
//       barColor: 'from-rose-600 to-pink-600'
//     },
//     { 
//       id: 'Education', 
//       name: 'EDUCATION & TUTORING', 
//       hindi: 'शिक्षा एवं ट्यूशन सेवाएं', 
//       icon: GraduationCap, 
//       iconBg: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
//       badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
//       barColor: 'from-amber-600 to-orange-600'
//     },
//     { 
//       id: 'Transport', 
//       name: 'TRANSPORT & LOGISTICS', 
//       hindi: 'परिवहन एवं ड्राइवर सेवाएं', 
//       icon: Truck, 
//       iconBg: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
//       badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
//       barColor: 'from-purple-600 to-violet-600'
//     }
//   ];

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "workers"));
//         const firebaseList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));

//         const mockWorkers = [
//           { id: 'm1', name: 'Ramesh Vishwakarma', category: 'Electrician', charges: '500', address: 'Civil Lines, Jabalpur', phone: '9827011223', status: 'Free', rating: 4.8 },
//           { id: 'm2', name: 'Santosh Patel', category: 'Contractor', charges: '700', address: 'Napier Town, Jabalpur', phone: '9425155678', status: 'Free', rating: 4.9 },
//           { id: 'm3', name: 'Dr. R. K. Sen', category: 'Health', charges: '800', address: 'Gorakhpur, Jabalpur', phone: '9754322110', status: 'Free', rating: 5.0 },
//           { id: 'm4', name: 'Virendra Singh', category: 'Agriculture', charges: '600', address: 'Panagar, Jabalpur', phone: '9111223344', status: 'Free', rating: 4.7 },
//           { id: 'm5', name: 'Amit Tiwari', category: 'Education', charges: '400', address: 'Wright Town, Jabalpur', phone: '9893005566', status: 'Free', rating: 4.6 }
//         ];

//         setWorkers([...firebaseList, ...mockWorkers]);
//       } catch (error) {
//         console.error("Error fetching workers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWorkers();
//   }, []);

//   return (
//     <div className={`min-h-screen py-8 px-4 sm:px-6 transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
//       <div className="max-w-7xl mx-auto">
        
//         {/* Welcome Header */}
//         <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div className="flex items-center gap-3.5">
//             <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-md">
//               <ShieldCheck size={24} />
//             </div>
//             <div>
//               <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-0.5">
//                 <Sparkles size={11} /> Verified Marketplace
//               </div>
//               <h1 className="text-xl sm:text-2xl font-black tracking-tight">
//                 Welcome, {clientInfo.name} 👋
//               </h1>
//             </div>
//           </div>

//           <div className={`px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 shadow-sm ${
//             darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
//           }`}>
//             <MapPin size={15} className="text-emerald-500" />
//             <span>Area: <strong className="text-emerald-500">{clientInfo.address}</strong></span>
//           </div>
//         </div>

//         {/* Department Grid */}
//         <div className="mb-6">
//           <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-1">Select Department Panel (विभाग चुनें)</h2>
//           <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
//             Kisi bhi vibhag par click karke uske andar ke sabhi verified workers ki list dekhein.
//           </p>
//         </div>

//         {loading ? (
//           <div className="text-center py-24">
//             <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent"></div>
//             <p className="text-xs text-slate-400 mt-4 font-bold tracking-wider uppercase">Loading Secure Network...</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//             {departments.map((dept) => {
//               const IconComponent = dept.icon;
//               const deptWorkers = workers.filter(w => w.category?.toLowerCase() === dept.id.toLowerCase());

//               return (
//                 <div
//                   key={dept.id}
//                   onClick={() => navigate(`/department/${dept.id}`)}
//                   className={`group relative rounded-[2rem] border-2 shadow-lg overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer ${
//                     darkMode 
//                       ? 'bg-slate-900 border-slate-800 hover:border-emerald-500' 
//                       : 'bg-white border-slate-200 hover:border-emerald-500'
//                   }`}
//                 >
//                   <div className={`h-2 w-full bg-gradient-to-r ${dept.barColor}`}></div>

//                   <div className="p-6 pb-3 flex justify-between items-start">
//                     <div className="flex items-center gap-3.5">
//                       <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${dept.iconBg}`}>
//                         <IconComponent size={24} />
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-black tracking-wide">{dept.name}</h3>
//                         <p className={`text-xs font-bold mt-0.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
//                           {dept.hindi}
//                         </p>
//                       </div>
//                     </div>

//                     <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border shadow-sm ${dept.badge}`}>
//                       {deptWorkers.length} Live
//                     </span>
//                   </div>

//                   <div className="px-6 py-2 flex-1 space-y-2">
//                     {deptWorkers.length === 0 ? (
//                       <div className={`p-3 rounded-xl border text-center text-xs italic ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
//                         No workers registered yet.
//                       </div>
//                     ) : (
//                       deptWorkers.slice(0, 2).map((w, idx) => (
//                         <div key={idx} className={`p-2.5 rounded-xl border flex justify-between items-center text-xs ${
//                           darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
//                         }`}>
//                           <div className="overflow-hidden pr-2">
//                             <div className="flex items-center gap-1.5">
//                               <p className="font-black text-xs truncate">{w.name}</p>
//                               {w.rating && (
//                                 <span className="text-[10px] bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
//                                   <Star size={9} className="fill-amber-500" /> {w.rating}
//                                 </span>
//                               )}
//                             </div>
//                             <p className="text-[10px] opacity-75 truncate flex items-center gap-1 mt-0.5">
//                               <MapPin size={10} className="text-emerald-500" /> {w.address}
//                             </p>
//                           </div>
//                           <div className="text-right flex-shrink-0">
//                             <span className="text-xs font-black text-emerald-500 flex items-center justify-end">
//                               <IndianRupee size={11} />{w.charges}
//                             </span>
//                             <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block">
//                               🟢 Free
//                             </span>
//                           </div>
//                         </div>
//                       ))
//                     )}
//                   </div>

//                   <div className="p-6 pt-3">
//                     <div className={`w-full py-3 px-4 rounded-xl font-black text-xs flex items-center justify-between transition-all shadow-sm ${
//                       darkMode 
//                         ? 'bg-slate-800 group-hover:bg-emerald-600 text-white' 
//                         : 'bg-slate-900 group-hover:bg-emerald-600 text-white'
//                     }`}>
//                       <span>Open Complete Directory</span>
//                       <ChevronRight size={15} className="transform group-hover:translate-x-1.5 transition-transform" />
//                     </div>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }



























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import {
//   Building2,
//   Wrench,
//   Tractor,
//   Truck,
//   Sparkles,
//   MapPin,
//   ShieldCheck,
//   IndianRupee,
//   ChevronRight,
//   Star,
//   Factory,
//   Hotel,
//   ShoppingBag,
//   Home,
//   Monitor,
// } from 'lucide-react';

// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export default function ClientSearch({ t, darkMode }) {
//   const navigate = useNavigate();

//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const clientInfo =
//     JSON.parse(localStorage.getItem('currentClient')) || {
//       name: 'User',
//       address: 'Jabalpur',
//     };

//   // =========================================================
//   // 8 MAIN FIELDS
//   // =========================================================

//   const departments = [
//     {
//       id: 'Construction',
//       name: 'CONSTRUCTION & REAL ESTATE',
//       hindi: 'निर्माण एवं इंफ्रास्ट्रक्चर',
//       icon: Building2,
//       iconBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
//       badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
//       barColor: 'from-blue-600 to-indigo-600',

//       jobs: [
//         'Masons / Rajmistri',
//         'Steel Fixers / Barbenders',
//         'Carpenters / Badhai',
//         'Electricians & Plumbers',
//         'Construction Helpers',
//       ],
//     },

//     {
//       id: 'Manufacturing',
//       name: 'MANUFACTURING & INDUSTRIAL',
//       hindi: 'मैन्युफैक्चरिंग एवं फैक्ट्रियां',
//       icon: Factory,
//       iconBg: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
//       badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
//       barColor: 'from-cyan-600 to-teal-600',

//       jobs: [
//         'Machine Operators',
//         'Assembly Workers',
//         'Fitters & Welders',
//         'Quality Control',
//       ],
//     },

//     {
//       id: 'Delivery',
//       name: 'DELIVERY & LOGISTICS',
//       hindi: 'ई-कॉमर्स, डिलीवरी एवं लॉजिस्टिक्स',
//       icon: Truck,
//       iconBg: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
//       badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
//       barColor: 'from-purple-600 to-violet-600',

//       jobs: [
//         'Delivery Boys / Riders',
//         'Warehouse Pickers & Packers',
//         'Truck & Commercial Drivers',
//         'Forklift Operators',
//       ],
//     },

//     {
//       id: 'Hospitality',
//       name: 'HOTELS & HOSPITALITY',
//       hindi: 'होटल, रेस्टोरेंट एवं पर्यटन',
//       icon: Hotel,
//       iconBg: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
//       badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
//       barColor: 'from-rose-600 to-pink-600',

//       jobs: [
//         'Cooks & Chefs',
//         'Waiters & Room Service',
//         'Housekeeping Staff',
//         'Kitchen Helpers',
//       ],
//     },

//     {
//       id: 'Retail',
//       name: 'RETAIL & SHOPPING MALLS',
//       hindi: 'रिटेल एवं शॉपिंग मॉल',
//       icon: ShoppingBag,
//       iconBg: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
//       badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
//       barColor: 'from-amber-600 to-orange-600',

//       jobs: [
//         'Sales Executives',
//         'Cashiers',
//         'Stock Managers',
//         'Merchandisers',
//       ],
//     },

//     {
//       id: 'HomeServices',
//       name: 'HOME & PERSONAL SERVICES',
//       hindi: 'घरेलू एवं व्यक्तिगत सेवाएं',
//       icon: Home,
//       iconBg: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
//       badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
//       barColor: 'from-emerald-600 to-green-600',

//       jobs: [
//         'Security Guards',
//         'Maids / Domestic Helpers',
//         'Car Cleaners & Drivers',
//         'Electricians, AC & Plumbers',
//       ],
//     },

//     {
//       id: 'Agriculture',
//       name: 'AGRICULTURE & FOOD PROCESSING',
//       hindi: 'कृषि एवं फूड प्रोसेसिंग',
//       icon: Tractor,
//       iconBg: 'bg-green-500/10 text-green-500 border-green-500/20',
//       badge: 'bg-green-500/10 text-green-400 border-green-500/20',
//       barColor: 'from-green-600 to-lime-600',

//       jobs: [
//         'Farm Machine Operators',
//         'Cold Storage Workers',
//         'Food Processing Workers',
//       ],
//     },

//     {
//       id: 'IT',
//       name: 'IT & OFFICE SUPPORT',
//       hindi: 'आईटी एवं ऑफिस सपोर्ट',
//       icon: Monitor,
//       iconBg: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
//       badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
//       barColor: 'from-indigo-600 to-blue-600',

//       jobs: [
//         'Data Entry Operators',
//         'Customer Care / BPO',
//         'Field Service Engineers',
//         'Technical Support',
//       ],
//     },
//   ];

//   // =========================================================
//   // FETCH WORKERS FROM FIREBASE
//   // =========================================================

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const querySnapshot = await getDocs(
//           collection(db, 'workers')
//         );

//         const firebaseList = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         // Demo workers
//         const mockWorkers = [
//           {
//             id: 'm1',
//             name: 'Ramesh Vishwakarma',
//             category: 'Construction',
//             jobType: 'Masons / Rajmistri',
//             charges: '500',
//             address: 'Civil Lines, Jabalpur',
//             phone: '9827011223',
//             status: 'Free',
//             rating: 4.8,
//           },

//           {
//             id: 'm2',
//             name: 'Santosh Patel',
//             category: 'Manufacturing',
//             jobType: 'Machine Operators',
//             charges: '700',
//             address: 'Napier Town, Jabalpur',
//             phone: '9425155678',
//             status: 'Free',
//             rating: 4.9,
//           },

//           {
//             id: 'm3',
//             name: 'Rahul Sharma',
//             category: 'Delivery',
//             jobType: 'Delivery Boys / Riders',
//             charges: '400',
//             address: 'Gorakhpur, Jabalpur',
//             phone: '9754322110',
//             status: 'Free',
//             rating: 4.7,
//           },

//           {
//             id: 'm4',
//             name: 'Amit Singh',
//             category: 'Hospitality',
//             jobType: 'Cooks & Chefs',
//             charges: '800',
//             address: 'Wright Town, Jabalpur',
//             phone: '9111223344',
//             status: 'Free',
//             rating: 4.9,
//           },

//           {
//             id: 'm5',
//             name: 'Pooja Verma',
//             category: 'Retail',
//             jobType: 'Sales Executives',
//             charges: '500',
//             address: 'Vijay Nagar, Jabalpur',
//             phone: '9893005566',
//             status: 'Free',
//             rating: 4.6,
//           },

//           {
//             id: 'm6',
//             name: 'Mohan Yadav',
//             category: 'HomeServices',
//             jobType: 'Electricians, AC & Plumbers',
//             charges: '600',
//             address: 'Adhartal, Jabalpur',
//             phone: '9876543210',
//             status: 'Free',
//             rating: 4.8,
//           },

//           {
//             id: 'm7',
//             name: 'Virendra Singh',
//             category: 'Agriculture',
//             jobType: 'Farm Machine Operators',
//             charges: '600',
//             address: 'Panagar, Jabalpur',
//             phone: '9111223344',
//             status: 'Free',
//             rating: 4.7,
//           },

//           {
//             id: 'm8',
//             name: 'Ankit Tiwari',
//             category: 'IT',
//             jobType: 'Data Entry Operators',
//             charges: '400',
//             address: 'Napier Town, Jabalpur',
//             phone: '9893005566',
//             status: 'Free',
//             rating: 4.6,
//           },
//         ];

//         setWorkers([...firebaseList, ...mockWorkers]);
//       } catch (error) {
//         console.error('Error fetching workers:', error);

//         setWorkers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkers();
//   }, []);

//   // =========================================================
//   // UI
//   // =========================================================

//   return (
//     <div
//       className={`min-h-screen py-8 px-4 sm:px-6 transition-colors duration-300 ${
//         darkMode
//           ? 'bg-slate-950 text-white'
//           : 'bg-slate-50 text-slate-900'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* =====================================================
//             WELCOME HEADER
//         ===================================================== */}

//         <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

//           <div className="flex items-center gap-3.5">

//             <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-md">
//               <ShieldCheck size={24} />
//             </div>

//             <div>

//               <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-0.5">
//                 <Sparkles size={11} />
//                 Verified Marketplace
//               </div>

//               <h1 className="text-xl sm:text-2xl font-black tracking-tight">
//                 Welcome, {clientInfo.name} 👋
//               </h1>

//             </div>
//           </div>

//           {/* LOCATION */}

//           <div
//             className={`px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 shadow-sm ${
//               darkMode
//                 ? 'bg-slate-900 border-slate-800 text-slate-200'
//                 : 'bg-white border-slate-200 text-slate-800'
//             }`}
//           >
//             <MapPin size={15} className="text-emerald-500" />

//             <span>
//               Area:{' '}
//               <strong className="text-emerald-500">
//                 {clientInfo.address}
//               </strong>
//             </span>
//           </div>

//         </div>

//         {/* =====================================================
//             TITLE
//         ===================================================== */}

//         <div className="mb-6">

//           <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
//             Select Field / Department Panel
//           </h2>

//           <p
//             className={`text-xs sm:text-sm font-medium ${
//               darkMode
//                 ? 'text-slate-400'
//                 : 'text-slate-600'
//             }`}
//           >
//             Kisi bhi field par click karke us field ke available workers
//             aur services ki complete directory dekhein.
//           </p>

//         </div>

//         {/* =====================================================
//             LOADING
//         ===================================================== */}

//         {loading ? (

//           <div className="text-center py-24">

//             <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent"></div>

//             <p className="text-xs text-slate-400 mt-4 font-bold tracking-wider uppercase">
//               Loading Secure Network...
//             </p>

//           </div>

//         ) : (

//           /* ===================================================
//              8 FIELD CARDS
//           =================================================== */

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

//             {departments.map((dept) => {

//               const IconComponent = dept.icon;

//               // Workers belonging to this department
//               const deptWorkers = workers.filter(
//                 (worker) =>
//                   worker.category?.toLowerCase() ===
//                   dept.id.toLowerCase()
//               );

//               return (

//                 <div
//                   key={dept.id}

//                   onClick={() =>
//                     navigate(`/department/${dept.id}`)
//                   }

//                   className={`group relative rounded-[2rem] border-2 shadow-lg overflow-hidden transition-all duration-300 flex flex-col cursor-pointer ${
//                     darkMode
//                       ? 'bg-slate-900 border-slate-800 hover:border-emerald-500 hover:shadow-emerald-500/10'
//                       : 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-emerald-500/10'
//                   }`}
//                 >

//                   {/* =================================================
//                       TOP COLOR BAR
//                   ================================================= */}

//                   <div
//                     className={`h-2 w-full bg-gradient-to-r ${dept.barColor}`}
//                   ></div>

//                   {/* =================================================
//                       HEADER
//                   ================================================= */}

//                   <div className="p-6 pb-3 flex justify-between items-start">

//                     <div className="flex items-center gap-3.5">

//                       <div
//                         className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${dept.iconBg}`}
//                       >
//                         <IconComponent size={24} />
//                       </div>

//                       <div>

//                         <h3 className="text-sm font-black tracking-wide">
//                           {dept.name}
//                         </h3>

//                         <p
//                           className={`text-xs font-bold mt-0.5 ${
//                             darkMode
//                               ? 'text-emerald-400'
//                               : 'text-emerald-700'
//                           }`}
//                         >
//                           {dept.hindi}
//                         </p>

//                       </div>

//                     </div>

//                     {/* WORKER COUNT */}

//                     <span
//                       className={`text-[10px] font-black px-2.5 py-1 rounded-full border shadow-sm whitespace-nowrap ${dept.badge}`}
//                     >
//                       {deptWorkers.length} Live
//                     </span>

//                   </div>

//                   {/* =================================================
//                       JOB TYPES
//                   ================================================= */}

//                   <div className="px-6 py-2 flex-1 space-y-2">

//                     <p
//                       className={`text-[10px] uppercase tracking-widest font-black mb-2 ${
//                         darkMode
//                           ? 'text-slate-500'
//                           : 'text-slate-400'
//                       }`}
//                     >
//                       Available Services
//                     </p>

//                     {dept.jobs.map((job, index) => (

//                       <div
//                         key={index}
//                         className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs ${
//                           darkMode
//                             ? 'bg-slate-950 border-slate-800 text-slate-300'
//                             : 'bg-slate-50 border-slate-200 text-slate-700'
//                         }`}
//                       >

//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>

//                         <span className="font-semibold">
//                           {job}
//                         </span>

//                       </div>

//                     ))}

//                   </div>

//                   {/* =================================================
//                       SAMPLE WORKERS
//                   ================================================= */}

//                   {deptWorkers.length > 0 && (

//                     <div className="px-6 pt-3 space-y-2">

//                       <p
//                         className={`text-[10px] uppercase tracking-widest font-black ${
//                           darkMode
//                             ? 'text-slate-500'
//                             : 'text-slate-400'
//                         }`}
//                       >
//                         Nearby Workers
//                       </p>

//                       {deptWorkers.slice(0, 2).map((worker, index) => (

//                         <div
//                           key={worker.id || index}
//                           className={`p-2.5 rounded-xl border flex justify-between items-center text-xs ${
//                             darkMode
//                               ? 'bg-slate-950 border-slate-800'
//                               : 'bg-slate-50 border-slate-200'
//                           }`}
//                         >

//                           {/* WORKER INFO */}

//                           <div className="overflow-hidden pr-2">

//                             <div className="flex items-center gap-1.5">

//                               <p className="font-black text-xs truncate">
//                                 {worker.name}
//                               </p>

//                               {worker.rating && (

//                                 <span className="text-[10px] bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">

//                                   <Star
//                                     size={9}
//                                     className="fill-amber-500"
//                                   />

//                                   {worker.rating}

//                                 </span>

//                               )}

//                             </div>

//                             <p className="text-[10px] opacity-75 truncate flex items-center gap-1 mt-0.5">

//                               <MapPin
//                                 size={10}
//                                 className="text-emerald-500"
//                               />

//                               {worker.address || 'Jabalpur'}

//                             </p>

//                           </div>

//                           {/* PRICE */}

//                           <div className="text-right flex-shrink-0">

//                             {worker.charges && (

//                               <span className="text-xs font-black text-emerald-500 flex items-center justify-end">

//                                 <IndianRupee size={11} />

//                                 {worker.charges}

//                               </span>

//                             )}

//                             <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block">

//                               🟢 {worker.status || 'Free'}

//                             </span>

//                           </div>

//                         </div>

//                       ))}

//                     </div>

//                   )}

//                   {/* =================================================
//                       OPEN DIRECTORY BUTTON
//                   ================================================= */}

//                   <div className="p-6 pt-4">

//                     <div
//                       className={`w-full py-3 px-4 rounded-xl font-black text-xs flex items-center justify-between transition-all shadow-sm ${
//                         darkMode
//                           ? 'bg-slate-800 group-hover:bg-emerald-600 text-white'
//                           : 'bg-slate-900 group-hover:bg-emerald-600 text-white'
//                       }`}
//                     >

//                       <span>
//                         Open Complete Directory
//                       </span>

//                       <ChevronRight
//                         size={15}
//                         className="transform group-hover:translate-x-1.5 transition-transform"
//                       />

//                     </div>

//                   </div>

//                 </div>

//               );
//             })}

//           </div>

//         )}

//       </div>
//     </div>
//   );
// }

























import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Building2,
  Tractor,
  Truck,
  Sparkles,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Factory,
  Hotel,
  ShoppingBag,
  Home,
  Monitor,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  Star,
  Phone,
  UserRound,
  BriefcaseBusiness,
  IndianRupee,
  CheckCircle2,
  X,
  LocateFixed,
} from 'lucide-react';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ClientSearch({ t, darkMode }) {
  const navigate = useNavigate();

  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const clientInfo =
    JSON.parse(localStorage.getItem('currentClient')) || {
      name: 'User',
      address: 'Jabalpur',
    };

  // =========================================================
  // 8 MAIN FIELDS
  // =========================================================

  const departments = [
    {
      id: 'Construction',
      name: 'CONSTRUCTION & REAL ESTATE',
      shortName: 'Construction',
      icon: Building2,
      iconBg:
        'bg-blue-500/10 text-blue-500 border-blue-500/20',
      barColor: 'from-blue-600 to-indigo-600',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'Manufacturing',
      name: 'MANUFACTURING & INDUSTRIAL',
      shortName: 'Manufacturing',
      icon: Factory,
      iconBg:
        'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
      barColor: 'from-cyan-600 to-teal-600',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'Delivery',
      name: 'DELIVERY & LOGISTICS',
      shortName: 'Delivery',
      icon: Truck,
      iconBg:
        'bg-purple-500/10 text-purple-500 border-purple-500/20',
      barColor: 'from-purple-600 to-violet-600',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'Hospitality',
      name: 'HOTELS & HOSPITALITY',
      shortName: 'Hospitality',
      icon: Hotel,
      iconBg:
        'bg-rose-500/10 text-rose-500 border-rose-500/20',
      barColor: 'from-rose-600 to-pink-600',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'Retail',
      name: 'RETAIL & SHOPPING MALLS',
      shortName: 'Retail',
      icon: ShoppingBag,
      iconBg:
        'bg-amber-500/10 text-amber-500 border-amber-500/20',
      barColor: 'from-amber-600 to-orange-600',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'HomeServices',
      name: 'HOME & PERSONAL SERVICES',
      shortName: 'Home Services',
      icon: Home,
      iconBg:
        'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      barColor: 'from-emerald-600 to-green-600',
      image:
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'Agriculture',
      name: 'AGRICULTURE & FOOD PROCESSING',
      shortName: 'Agriculture',
      icon: Tractor,
      iconBg:
        'bg-green-500/10 text-green-500 border-green-500/20',
      barColor: 'from-green-600 to-lime-600',
      image:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
    },

    {
      id: 'IT',
      name: 'IT & OFFICE SUPPORT',
      shortName: 'IT & Office',
      icon: Monitor,
      iconBg:
        'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
      barColor: 'from-indigo-600 to-blue-600',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    },
  ];

  // =========================================================
  // DEMO WORKERS
  // =========================================================

  const mockWorkers = [
    {
      id: 'm1',
      name: 'Ramesh Vishwakarma',
      category: 'Construction',
      jobType: 'Masons / Rajmistri',
      charges: '500',
      address: 'Civil Lines, Jabalpur',
      phone: '9827011223',
      status: 'Free',
      rating: 4.8,
    },

    {
      id: 'm2',
      name: 'Santosh Patel',
      category: 'Manufacturing',
      jobType: 'Machine Operators',
      charges: '700',
      address: 'Napier Town, Jabalpur',
      phone: '9425155678',
      status: 'Free',
      rating: 4.9,
    },

    {
      id: 'm3',
      name: 'Rahul Sharma',
      category: 'Delivery',
      jobType: 'Delivery Boys / Riders',
      charges: '400',
      address: 'Gorakhpur, Jabalpur',
      phone: '9754322110',
      status: 'Free',
      rating: 4.7,
    },

    {
      id: 'm4',
      name: 'Amit Singh',
      category: 'Hospitality',
      jobType: 'Cooks & Chefs',
      charges: '800',
      address: 'Wright Town, Jabalpur',
      phone: '9111223344',
      status: 'Free',
      rating: 4.9,
    },

    {
      id: 'm5',
      name: 'Pooja Verma',
      category: 'Retail',
      jobType: 'Sales Executives',
      charges: '500',
      address: 'Vijay Nagar, Jabalpur',
      phone: '9893005566',
      status: 'Free',
      rating: 4.6,
    },

    {
      id: 'm6',
      name: 'Mohan Yadav',
      category: 'HomeServices',
      jobType: 'Electricians, AC & Plumbers',
      charges: '600',
      address: 'Adhartal, Jabalpur',
      phone: '9876543210',
      status: 'Free',
      rating: 4.8,
    },

    {
      id: 'm7',
      name: 'Virendra Singh',
      category: 'Agriculture',
      jobType: 'Farm Machine Operators',
      charges: '600',
      address: 'Panagar, Jabalpur',
      phone: '9111223344',
      status: 'Free',
      rating: 4.7,
    },

    {
      id: 'm8',
      name: 'Ankit Tiwari',
      category: 'IT',
      jobType: 'Data Entry Operators',
      charges: '400',
      address: 'Napier Town, Jabalpur',
      phone: '9893005566',
      status: 'Free',
      rating: 4.6,
    },
  ];

  // =========================================================
  // FETCH WORKERS FROM FIREBASE
  // =========================================================

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'workers')
        );

        const firebaseList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setWorkers([...firebaseList, ...mockWorkers]);
      } catch (error) {
        console.error('Error fetching workers:', error);

        setWorkers(mockWorkers);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  // =========================================================
  // FILTER WORKERS
  // =========================================================

  const filteredWorkers = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return workers.filter((worker) => {
      const matchesDepartment =
        selectedDepartment === 'All' ||
        worker.category === selectedDepartment;

      const matchesSearch =
        !searchText ||
        worker.name?.toLowerCase().includes(searchText) ||
        worker.category?.toLowerCase().includes(searchText) ||
        worker.jobType?.toLowerCase().includes(searchText) ||
        worker.address?.toLowerCase().includes(searchText);

      return matchesDepartment && matchesSearch;
    });
  }, [workers, search, selectedDepartment]);

  // =========================================================
  // SEARCH ACTIVE
  // =========================================================

  const isSearching =
    search.trim().length > 0 ||
    selectedDepartment !== 'All';

  // =========================================================
  // CLEAR SEARCH
  // =========================================================

  const clearSearch = () => {
    setSearch('');
    setSelectedDepartment('All');
  };

  // =========================================================
  // DEPARTMENT ICON
  // =========================================================

  const getDepartment = (category) => {
    return departments.find(
      (dept) => dept.id === category
    );
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div
      className={`min-h-screen py-8 px-4 sm:px-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-950 text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-7 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">

          <div className="flex items-center gap-3.5">

            <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <ShieldCheck size={24} />
            </div>

            <div>

              <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">
                <Sparkles size={11} />
                Verified Marketplace
              </div>

              <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                Find the Right Worker
              </h1>

              <p
                className={`text-[11px] font-medium mt-1 ${
                  darkMode
                    ? 'text-slate-500'
                    : 'text-slate-500'
                }`}
              >
                Search skilled workers for your requirement
              </p>

            </div>

          </div>

          {/* LOCATION */}

          <div
            className={`px-4 py-2.5 rounded-2xl border text-xs font-bold flex items-center gap-2 shadow-sm ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-200'
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            <MapPin size={15} className="text-emerald-500" />

            <span>
              Area:{' '}
              <strong className="text-emerald-500">
                {clientInfo.address}
              </strong>
            </span>

          </div>

        </div>

        {/* =====================================================
            PREMIUM SEARCH BOX
        ===================================================== */}

        <div
          className={`relative rounded-[2rem] border p-4 sm:p-5 mb-8 shadow-xl ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >

          {/* TOP TEXT */}

          <div className="flex items-center justify-between mb-4">

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
                Worker Directory
              </p>

              <h2 className="text-lg sm:text-xl font-black mt-1">
                Search Workers
              </h2>

            </div>

            <div
              className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                darkMode
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-emerald-50 text-emerald-600'
              }`}
            >
              <CheckCircle2 size={13} />
              Verified Network
            </div>

          </div>

          {/* SEARCH ROW */}

          <div className="flex flex-col lg:flex-row gap-3">

            {/* SEARCH INPUT */}

            <div
              className={`relative flex-1 rounded-2xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 ${
                darkMode
                  ? 'bg-slate-950 border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >

              <Search
                size={21}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search worker name, job, skill or location..."
                className={`w-full h-14 pl-12 pr-12 bg-transparent outline-none text-sm font-semibold ${
                  darkMode
                    ? 'text-white placeholder:text-slate-600'
                    : 'text-slate-900 placeholder:text-slate-400'
                }`}
              />

              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500 transition"
                >
                  <X size={18} />
                </button>
              )}

            </div>

            {/* FILTER BUTTON */}

            <button
              onClick={() =>
                setShowFilters(!showFilters)
              }
              className={`h-14 px-5 rounded-2xl border flex items-center justify-center gap-2 font-black text-xs transition-all ${
                showFilters
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-emerald-500'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-emerald-500'
              }`}
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

          </div>

          {/* =================================================
              FILTER PANEL
          ================================================= */}

          {showFilters && (

            <div
              className={`mt-4 pt-4 border-t ${
                darkMode
                  ? 'border-slate-800'
                  : 'border-slate-200'
              }`}
            >

              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">
                Select Department
              </p>

              <div className="flex gap-2 flex-wrap">

                <button
                  onClick={() =>
                    setSelectedDepartment('All')
                  }
                  className={`px-4 py-2.5 rounded-xl text-[10px] font-black border transition-all ${
                    selectedDepartment === 'All'
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  All Workers
                </button>

                {departments.map((dept) => {

                  const IconComponent = dept.icon;

                  return (
                    <button
                      key={dept.id}
                      onClick={() =>
                        setSelectedDepartment(dept.id)
                      }
                      className={`px-4 py-2.5 rounded-xl text-[10px] font-black border flex items-center gap-2 transition-all ${
                        selectedDepartment === dept.id
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-400 hover:border-emerald-500'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-500'
                      }`}
                    >
                      <IconComponent size={13} />
                      {dept.shortName}
                    </button>
                  );
                })}

              </div>

            </div>
          )}

        </div>

        {/* =====================================================
            SEARCH RESULTS
        ===================================================== */}

        {isSearching ? (

          <div className="mb-10">

            {/* RESULTS HEADER */}

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-5">

              <div>

                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                  Search Results
                </p>

                <h2 className="text-xl font-black mt-1">
                  {filteredWorkers.length} Workers Found
                </h2>

              </div>

              <button
                onClick={clearSearch}
                className={`px-4 py-2 rounded-xl text-[10px] font-black border ${
                  darkMode
                    ? 'border-slate-800 text-slate-400 hover:text-white'
                    : 'border-slate-200 text-slate-500 hover:text-slate-900'
                }`}
              >
                Clear Search
              </button>

            </div>

            {/* RESULTS */}

            {filteredWorkers.length === 0 ? (

              <div
                className={`rounded-[2rem] border p-12 text-center ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-500/10 flex items-center justify-center mb-4">
                  <Search
                    size={28}
                    className="text-slate-400"
                  />
                </div>

                <h3 className="font-black text-lg">
                  No Worker Found
                </h3>

                <p className="text-xs text-slate-400 mt-2">
                  Try another worker name, skill, job or department.
                </p>

                <button
                  onClick={clearSearch}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-black"
                >
                  Show All Workers
                </button>

              </div>

            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                {filteredWorkers.map((worker) => {

                  const dept = getDepartment(
                    worker.category
                  );

                  const WorkerIcon =
                    dept?.icon || UserRound;

                  return (

                    <div
                      key={worker.id}
                      className={`group relative overflow-hidden rounded-[1.8rem] border transition-all duration-400 hover:-translate-y-1 hover:shadow-xl ${
                        darkMode
                          ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/40'
                          : 'bg-white border-slate-200 hover:border-emerald-500/40'
                      }`}
                    >

                      {/* TOP COLOR */}

                      <div
                        className={`h-1 bg-gradient-to-r ${
                          dept?.barColor ||
                          'from-emerald-500 to-teal-500'
                        }`}
                      ></div>

                      <div className="p-5">

                        {/* WORKER HEADER */}

                        <div className="flex items-center gap-3">

                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                              dept?.iconBg ||
                              'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                            }`}
                          >
                            <WorkerIcon
                              size={25}
                              strokeWidth={2.2}
                            />
                          </div>

                          <div className="flex-1 min-w-0">

                            <div className="flex items-center gap-2">

                              <h3 className="font-black text-sm truncate">
                                {worker.name || 'Worker'}
                              </h3>

                              <ShieldCheck
                                size={14}
                                className="shrink-0 text-emerald-500"
                              />

                            </div>

                            <p className="text-[10px] text-slate-400 font-semibold mt-1 truncate">
                              {worker.jobType || 'Professional Worker'}
                            </p>

                          </div>

                          {/* STATUS */}

                          <span className="shrink-0 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase">
                            {worker.status || 'Available'}
                          </span>

                        </div>

                        {/* WORKER INFO */}

                        <div className="mt-5 space-y-2.5">

                          <div className="flex items-center gap-2.5">

                            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center">
                              <Star
                                size={13}
                                className="text-amber-500"
                                fill="currentColor"
                              />
                            </div>

                            <div>
                              <p className="text-[9px] text-slate-400 uppercase font-black">
                                Rating
                              </p>

                              <p className="text-xs font-black">
                                {worker.rating || 'New Worker'}
                              </p>
                            </div>

                          </div>

                          <div className="flex items-center gap-2.5">

                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                              <MapPin
                                size={13}
                                className="text-blue-500"
                              />
                            </div>

                            <div className="min-w-0">

                              <p className="text-[9px] text-slate-400 uppercase font-black">
                                Location
                              </p>

                              <p className="text-xs font-bold truncate">
                                {worker.address || 'Location not available'}
                              </p>

                            </div>

                          </div>

                          <div className="flex items-center gap-2.5">

                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                              <IndianRupee
                                size={13}
                                className="text-emerald-500"
                              />
                            </div>

                            <div>

                              <p className="text-[9px] text-slate-400 uppercase font-black">
                                Starting Charges
                              </p>

                              <p className="text-xs font-black text-emerald-500">
                                ₹{worker.charges || 'Contact'}
                              </p>

                            </div>

                          </div>

                        </div>

                        {/* ACTION BAR */}

                        <div
                          className={`mt-5 pt-4 border-t flex items-center gap-2 ${
                            darkMode
                              ? 'border-slate-800'
                              : 'border-slate-100'
                          }`}
                        >

                          <button
                            onClick={(e) => {
                              e.stopPropagation();

                              if (worker.phone) {
                                window.location.href = `tel:${worker.phone}`;
                              }
                            }}
                            className={`flex-1 h-10 rounded-xl border flex items-center justify-center gap-2 text-[10px] font-black transition-all ${
                              darkMode
                                ? 'border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-400'
                                : 'border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600'
                            }`}
                          >
                            <Phone size={14} />
                            Contact
                          </button>

                          <button
                            onClick={() => {
                              navigate(
                                `/worker/${worker.id}`
                              );
                            }}
                            className="flex-1 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 text-[10px] font-black transition-all shadow-lg shadow-emerald-500/20"
                          >
                            <BriefcaseBusiness
                              size={14}
                            />
                            Hire Worker
                          </button>

                        </div>

                      </div>

                    </div>

                  );
                })}

              </div>
            )}

          </div>

        ) : (

          /* ===================================================
             NO SEARCH → SHOW DEPARTMENTS
          =================================================== */

          <>

            <div className="mb-6">

              <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                Browse Workers by Field
              </h2>

              <p
                className={`text-xs sm:text-sm font-medium ${
                  darkMode
                    ? 'text-slate-400'
                    : 'text-slate-600'
                }`}
              >
                Kisi field ko select karke us field ke workers
                directly find karein.
              </p>

            </div>

            {/* DEPARTMENT CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">

              {departments.map((dept) => {

                const IconComponent = dept.icon;

                return (

                  <div
                    key={dept.id}
                    onClick={() =>
                      navigate(
                        `/department/${dept.id}`
                      )
                    }
                    className={`group relative overflow-hidden rounded-[1.8rem] border cursor-pointer transition-all duration-500 ${
                      darkMode
                        ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                        : 'bg-white border-slate-200 hover:border-emerald-500/50'
                    } hover:-translate-y-2 hover:shadow-2xl`}
                  >

                    {/* TOP COLOR */}

                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.barColor}`}
                    ></div>

                    {/* IMAGE */}

                    <div className="relative h-36 p-4">

                      <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden">

                        <img
                          src={dept.image}
                          alt={dept.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/50"></div>

                      </div>

                      {/* ICON */}

                      <div
                        className={`absolute left-7 bottom-5 w-13 h-13 rounded-2xl flex items-center justify-center border backdrop-blur-xl shadow-xl ${dept.iconBg} ${
                          darkMode
                            ? 'bg-slate-950/80'
                            : 'bg-white/90'
                        }`}
                      >
                        <IconComponent
                          size={24}
                          strokeWidth={2.3}
                        />
                      </div>

                      {/* VERIFIED */}

                      <div className="absolute right-7 top-7 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                        <ShieldCheck size={10} />
                        Verified
                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="px-5 pb-5 pt-2">

                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-500 mb-1.5">
                        Professional Field
                      </p>

                      <div className="flex items-center justify-between gap-3">

                        <h3
                          className={`text-[14px] font-black leading-snug ${
                            darkMode
                              ? 'text-white group-hover:text-emerald-400'
                              : 'text-slate-900 group-hover:text-emerald-600'
                          }`}
                        >
                          {dept.name}
                        </h3>

                        <div
                          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
                            darkMode
                              ? 'bg-slate-800 text-slate-400 group-hover:bg-emerald-500 group-hover:text-white'
                              : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-500 group-hover:text-white'
                          }`}
                        >
                          <ArrowUpRight size={17} />
                        </div>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            {/* END BAR */}

            <div
              className={`relative overflow-hidden rounded-[1.8rem] border p-5 sm:p-6 mb-8 ${
                darkMode
                  ? 'bg-gradient-to-r from-slate-900 to-emerald-950/30 border-slate-800'
                  : 'bg-gradient-to-r from-white to-emerald-50 border-slate-200'
              }`}
            >

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <LocateFixed
                      size={23}
                      className="text-emerald-500"
                    />
                  </div>

                  <div>

                    <h3 className="font-black text-sm sm:text-base">
                      Looking for a specific worker?
                    </h3>

                    <p
                      className={`text-[11px] mt-1 font-medium ${
                        darkMode
                          ? 'text-slate-400'
                          : 'text-slate-500'
                      }`}
                    >
                      Upar search box mein naam, skill, job ya
                      location type karke worker find karein.
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    document
                      .querySelector('input')
                      ?.focus()
                  }
                  className="shrink-0 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Search size={14} />
                  Start Searching
                </button>

              </div>

            </div>

          </>

        )}

      </div>
    </div>
  );
}
