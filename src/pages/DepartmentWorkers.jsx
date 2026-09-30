// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ArrowLeft, Phone, MessageSquare, MapPin, IndianRupee, Search, Sparkles, SlidersHorizontal } from 'lucide-react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export default function DepartmentWorkers({ darkMode }) {
//   const navigate = useNavigate();
//   const { categoryName } = useParams();
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSubService, setSelectedSubService] = useState('All');
//   const [sortBy, setSortBy] = useState('nearest'); // 'nearest' or 'price'

//   const clientInfo = JSON.parse(localStorage.getItem('currentClient')) || { name: 'User', address: 'Jabalpur' };

//   const subServicesMap = {
//     'Electrician': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Electrician', name: 'Electrician (बिजली मिस्त्री)' },
//       { id: 'Plumber', name: 'Plumber (नल फिटिंग व रिपेयर)' },
//       { id: 'Carpenter', name: 'Carpenter (बढ़ई / लकड़ी का काम)' },
//       { id: 'Painter', name: 'Painter (घर की पुताई व पेंट)' },
//       { id: 'AC Repair', name: 'AC & Appliance Repair (एसी/फ्रिज रिपेयर)' }
//     ],
//     'Agriculture': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Tractor Driver', name: 'Tractor Driver (ट्रैक्टर चालक)' },
//       { id: 'Crop Harvester', name: 'Crop Harvester (फसल कटाई मजदूर)' },
//       { id: 'Tube-well Expert', name: 'Tube-well & Pump Mechanic (ट्यूबवेल मिस्त्री)' }
//     ],
//     'Health': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Home Nurse', name: 'Home Nurse / Caretaker (देखभाल करने वाला)' },
//       { id: 'Elderly Care', name: 'Elderly Assistant (बुजुर्गों की सहायता)' }
//     ],
//     'Education': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Home Tutor', name: 'Home Tutor (गणित/विज्ञान शिक्षक)' },
//       { id: 'Language Coach', name: 'Spoken English & Computer Tutor' }
//     ],
//     'Transport': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Goods Driver', name: 'Mini Truck / Goods Driver (मालवाहक चालक)' },
//       { id: 'Personal Driver', name: 'Personal Car Driver (कार ड्राइवर)' }
//     ],
//     'Contractor': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Mason', name: 'Mason / Rajmistri (राजमिस्त्री)' },
//       { id: 'Building Contractor', name: 'Building Contractor (भवन ठेकेदार)' }
//     ]
//   };

//   const currentSubServices = subServicesMap[categoryName] || [{ id: 'All', name: 'All Services' }];

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "workers"));
//         const firebaseList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));

//         const dummyWorkers = [
//           {
//             id: 'dummy-1',
//             name: 'Ramesh Vishwakarma',
//             phone: '9827011223',
//             address: clientInfo.address || 'Civil Lines, Jabalpur',
//             category: categoryName,
//             subService: currentSubServices[1]?.id || categoryName,
//             charges: '600',
//             status: 'Free'
//           },
//           {
//             id: 'dummy-2',
//             name: 'Suresh Kumar Patel',
//             phone: '9425155678',
//             address: 'Napier Town, Jabalpur',
//             category: categoryName,
//             subService: currentSubServices[2]?.id || categoryName,
//             charges: '500',
//             status: 'Free'
//           },
//           {
//             id: 'dummy-3',
//             name: 'Manoj Sen',
//             phone: '9754322110',
//             address: 'Gorakhpur, Jabalpur',
//             category: categoryName,
//             subService: currentSubServices[1]?.id || categoryName,
//             charges: '700',
//             status: 'Busy'
//           }
//         ];

//         setWorkers([...firebaseList, ...dummyWorkers]);
//       } catch (error) {
//         console.error("Error fetching workers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWorkers();
//   }, [categoryName]);

//   // Fixed filtering & Sorting logic
//   const filteredWorkers = workers.filter(worker => {
//     const matchesCategory = worker.category === categoryName;
//     const matchesSubService = selectedSubService === 'All' || worker.subService === selectedSubService;
//     const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           worker.address.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSubService && matchesSearch;
//   }).sort((a, b) => {
//     if (sortBy === 'nearest') {
//       const clientArea = clientInfo.address.toLowerCase();
//       const aMatch = a.address?.toLowerCase().includes(clientArea);
//       const bMatch = b.address?.toLowerCase().includes(clientArea);
//       if (aMatch && !bMatch) return -1;
//       if (!aMatch && bMatch) return 1;
//       return 0;
//     } else if (sortBy === 'price') {
//       return Number(a.charges || 0) - Number(b.charges || 0);
//     }
//     return 0;
//   });

//   return (
//     <div className={`max-w-7xl mx-auto py-8 px-4 sm:px-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
      
//       {/* Top Navigation & Search */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <button 
//           onClick={() => navigate('/client-search')} 
//           className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition border ${
//             darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
//           }`}
//         >
//           <ArrowLeft size={16} /> Back to Departments
//         </button>

//         <div className="relative w-full md:w-80">
//           <Search className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
//           <input
//             type="text"
//             placeholder="Search by worker name or area..."
//             className={`w-full border rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm outline-none transition ${
//               darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'
//             }`}
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Header Title & Sorting Bar */}
//       <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
//         <div>
//           <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-3.5 py-1 rounded-full text-xs font-bold mb-2 border border-emerald-500/20">
//             <Sparkles size={13} /> {categoryName} Department Panel
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-black mb-1">
//             Available Experts & Workers
//           </h2>
//           <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
//             📍 Priority given to locations near {clientInfo.address}.
//           </p>
//         </div>

//         {/* Sort Controls */}
//         <div className="flex items-center gap-2">
//           <SlidersHorizontal size={14} className="text-emerald-500" />
//           <span className="text-xs font-bold text-slate-400 uppercase">Sort by:</span>
//           <select 
//             value={sortBy} 
//             onChange={(e) => setSortBy(e.target.value)}
//             className={`text-xs font-bold px-3 py-2 rounded-xl border outline-none ${
//               darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
//             }`}
//           >
//             <option value="nearest">Nearest Location</option>
//             <option value="price">Lowest Charges</option>
//           </select>
//         </div>
//       </div>

//       {/* Sub-Services Filter Chips */}
//       <div className="flex flex-wrap gap-2.5 mb-8">
//         {currentSubServices.map(sub => (
//           <button
//             key={sub.id}
//             onClick={() => setSelectedSubService(sub.id)}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
//               selectedSubService === sub.id
//                 ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
//                 : darkMode 
//                   ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' 
//                   : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
//             }`}
//           >
//             {sub.name}
//           </button>
//         ))}
//       </div>

//       {/* Workers Grid */}
//       {loading ? (
//         <div className="text-center py-20">
//           <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-500 border-t-transparent"></div>
//           <p className="text-xs text-slate-500 mt-3 font-medium">Loading department workers...</p>
//         </div>
//       ) : filteredWorkers.length === 0 ? (
//         <div className={`text-center py-16 rounded-[2.5rem] border-2 border-dashed ${darkMode ? 'border-slate-800 bg-slate-900/40 text-slate-400' : 'border-slate-200 bg-white text-slate-500'}`}>
//           <p className="text-base font-bold">इस sub-service में अभी कोई worker उपलब्ध नहीं है।</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredWorkers.map((worker) => (
//             <div 
//               key={worker.id}
//               className={`p-6 rounded-[2rem] border-2 shadow-lg transition duration-300 flex flex-col justify-between ${
//                 darkMode ? 'bg-slate-900/90 border-slate-800 hover:border-emerald-500/50' : 'bg-white border-slate-100 hover:border-emerald-300'
//               }`}
//             >
//               <div>
//                 <div className="flex justify-between items-start mb-4">
//                   <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
//                     {worker.category} Expert
//                   </span>
//                   <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
//                     worker.status === 'Free' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
//                   }`}>
//                     {worker.status === 'Free' ? '🟢 Available' : '🔴 Busy'}
//                   </span>
//                 </div>

//                 <h4 className="text-xl font-black mb-1">{worker.name}</h4>
//                 <p className={`text-xs flex items-center gap-1 mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
//                   <MapPin size={13} className="text-emerald-500" /> {worker.address}
//                 </p>

//                 <div className={`p-4 rounded-2xl mb-6 space-y-2 border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="font-bold text-slate-400 uppercase">Daily Wages:</span>
//                     <span className="text-sm font-black text-emerald-500 flex items-center">
//                       <IndianRupee size={14} />{worker.charges} / day
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="font-bold text-slate-400 uppercase">Phone:</span>
//                     <span className="font-bold flex items-center gap-1">
//                       <Phone size={12} className="text-emerald-500" /> {worker.phone}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Instant Call & WhatsApp Booking Actions */}
//               <div className="grid grid-cols-2 gap-2">
//                 <a 
//                   href={`tel:${worker.phone}`}
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md shadow-emerald-600/20"
//                 >
//                   <Phone size={13} /> Call
//                 </a>
//                 <a 
//                   href={`https://wa.me/91${worker.phone}?text=Hello%20${worker.name},%20I%20found%20your%20profile%20on%20Kisan%20Mantra/Service%20App%20and%20want%20to%20book%20your%20service%20at%20${clientInfo.address}.`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md shadow-green-600/20"
//                 >
//                   <MessageSquare size={13} /> WhatsApp
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


















// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ArrowLeft, Phone, MessageSquare, MapPin, IndianRupee, Search, Sparkles, SlidersHorizontal, Star } from 'lucide-react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export default function DepartmentWorkers({ darkMode }) {
//   const navigate = useNavigate();
//   const { categoryName } = useParams();
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSubService, setSelectedSubService] = useState('All');
//   const [sortBy, setSortBy] = useState('nearest');

//   const clientInfo = JSON.parse(localStorage.getItem('currentClient')) || { name: 'User', address: 'Jabalpur' };

//   const subServicesMap = {
//     'Electrician': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Electrician', name: 'Electrician (बिजली मिस्त्री)' },
//       { id: 'Plumber', name: 'Plumber (नल फिटिंग व रिपेयर)' },
//       { id: 'Carpenter', name: 'Carpenter (बढ़ई / लकड़ी का काम)' },
//       { id: 'Painter', name: 'Painter (घर की पुताई व पेंट)' },
//       { id: 'AC Repair', name: 'AC & Appliance Repair (एसी/फ्रिज रिपेयर)' }
//     ],
//     'Agriculture': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Tractor Driver', name: 'Tractor Driver (ट्रैक्टर चालक)' },
//       { id: 'Crop Harvester', name: 'Crop Harvester (फसल कटाई मजदूर)' },
//       { id: 'Tube-well Expert', name: 'Tube-well & Pump Mechanic (ट्यूबवेल मिस्त्री)' }
//     ],
//     'Health': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Home Nurse', name: 'Home Nurse / Caretaker (देखभाल करने वाला)' },
//       { id: 'Elderly Care', name: 'Elderly Assistant (बुजुर्गों की सहायता)' }
//     ],
//     'Education': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Home Tutor', name: 'Home Tutor (गणित/विज्ञान शिक्षक)' },
//       { id: 'Language Coach', name: 'Spoken English & Computer Tutor' }
//     ],
//     'Transport': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Goods Driver', name: 'Mini Truck / Goods Driver (मालवाहक चालक)' },
//       { id: 'Personal Driver', name: 'Personal Car Driver (कार ड्राइवर)' }
//     ],
//     'Contractor': [
//       { id: 'All', name: 'All Services (सभी सेवाएं)' },
//       { id: 'Mason', name: 'Mason / Rajmistri (राजमिस्त्री)' },
//       { id: 'Building Contractor', name: 'Building Contractor (भवन ठेकेदार)' }
//     ]
//   };

//   const currentSubServices = subServicesMap[categoryName] || [{ id: 'All', name: 'All Services' }];

//   // ⚡ Instant Load: Pehle localStorage se data dikhao taaki loading ka wait na karna pade
//   useEffect(() => {
//     const loadWorkersData = async () => {
//       // 1. Local saved workers list sabse pehle load karo (Zero Loading Delay)
//       const localWorkers = JSON.parse(localStorage.getItem('workersList')) || [];
      
//       const dummyWorkers = [
//         {
//           id: 'dummy-1',
//           name: 'Ramesh Vishwakarma',
//           phone: '9827011223',
//           address: clientInfo.address || 'Civil Lines, Jabalpur',
//           category: categoryName,
//           subService: currentSubServices[1]?.id || categoryName,
//           charges: '600',
//           status: 'Free',
//           rating: 4.8,
//           totalRatings: 12
//         },
//         {
//           id: 'dummy-2',
//           name: 'Suresh Kumar Patel',
//           phone: '9425155678',
//           address: 'Napier Town, Jabalpur',
//           category: categoryName,
//           subService: currentSubServices[2]?.id || categoryName,
//           charges: '500',
//           status: 'Free',
//           rating: 4.6,
//           totalRatings: 8
//         },
//         {
//           id: 'dummy-3',
//           name: 'Manoj Sen',
//           phone: '9754322110',
//           address: 'Gorakhpur, Jabalpur',
//           category: categoryName,
//           subService: currentSubServices[1]?.id || categoryName,
//           charges: '700',
//           status: 'Busy',
//           rating: 4.9,
//           totalRatings: 15
//         }
//       ];

//       // Merge local storage workers + dummies
//       const combined = [...localWorkers, ...dummyWorkers];
//       setWorkers(combined);
//       setLoading(false); // ⚡ Turant screen par data dikhega bina loading ke!

//       // 2. Background me Firebase se fetch karke update kar do
//       try {
//         const querySnapshot = await getDocs(collection(db, "workers"));
//         const firebaseList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         if (firebaseList.length > 0) {
//           setWorkers([...firebaseList, ...dummyWorkers]);
//         }
//       } catch (error) {
//         console.error("Firebase fetch note:", error);
//       }
//     };

//     loadWorkersData();
//   }, [categoryName]);

//   // ⭐ Rating Handle karne ka function
//   const handleRateWorker = (workerId, newRating) => {
//     const updatedWorkers = workers.map(w => {
//       if (w.id === workerId || w.phone === workerId) {
//         const currentTotal = w.totalRatings || 5;
//         const currentAvg = w.rating || 4.5;
//         const newAvg = Number(((currentAvg * currentTotal + newRating) / (currentTotal + 1)).toFixed(1));
        
//         return { ...w, rating: newAvg, totalRatings: currentTotal + 1 };
//       }
//       return w;
//     });

//     setWorkers(updatedWorkers);
    
//     // Save to localStorage so rating persists
//     localStorage.setItem('workersList', JSON.stringify(updatedWorkers));
//     alert(`Thank you! You rated this worker ${newRating} ⭐`);
//   };

//   // Filter & Sorting logic
//   const filteredWorkers = workers.filter(worker => {
//     const matchesCategory = worker.category === categoryName;
//     const matchesSubService = selectedSubService === 'All' || worker.subService === selectedSubService || worker.category === categoryName;
//     const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           worker.address.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSubService && matchesSearch;
//   }).sort((a, b) => {
//     if (sortBy === 'nearest') {
//       const clientArea = clientInfo.address.toLowerCase();
//       const aMatch = a.address?.toLowerCase().includes(clientArea);
//       const bMatch = b.address?.toLowerCase().includes(clientArea);
//       if (aMatch && !bMatch) return -1;
//       if (!aMatch && bMatch) return 1;
//       return 0;
//     } else if (sortBy === 'price') {
//       return Number(a.charges || 0) - Number(b.charges || 0);
//     }
//     return 0;
//   });

//   return (
//     <div className={`max-w-7xl mx-auto py-8 px-4 sm:px-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
      
//       {/* Top Navigation & Search */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <button 
//           onClick={() => navigate('/client-search')} 
//           className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition border ${
//             darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
//           }`}
//         >
//           <ArrowLeft size={16} /> Back to Departments
//         </button>

//         <div className="relative w-full md:w-80">
//           <Search className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
//           <input
//             type="text"
//             placeholder="Search by worker name or area..."
//             className={`w-full border rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm outline-none transition ${
//               darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'
//             }`}
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Header Title & Sorting Bar */}
//       <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
//         <div>
//           <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-3.5 py-1 rounded-full text-xs font-bold mb-2 border border-emerald-500/20">
//             <Sparkles size={13} /> {categoryName} Department Panel
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-black mb-1">
//             Available Experts & Workers
//           </h2>
//           <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
//             📍 Priority given to locations near {clientInfo.address}.
//           </p>
//         </div>

//         {/* Sort Controls */}
//         <div className="flex items-center gap-2">
//           <SlidersHorizontal size={14} className="text-emerald-500" />
//           <span className="text-xs font-bold text-slate-400 uppercase">Sort by:</span>
//           <select 
//             value={sortBy} 
//             onChange={(e) => setSortBy(e.target.value)}
//             className={`text-xs font-bold px-3 py-2 rounded-xl border outline-none ${
//               darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
//             }`}
//           >
//             <option value="nearest">Nearest Location</option>
//             <option value="price">Lowest Charges</option>
//           </select>
//         </div>
//       </div>

//       {/* Sub-Services Filter Chips */}
//       <div className="flex flex-wrap gap-2.5 mb-8">
//         {currentSubServices.map(sub => (
//           <button
//             key={sub.id}
//             onClick={() => setSelectedSubService(sub.id)}
//             className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
//               selectedSubService === sub.id
//                 ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
//                 : darkMode 
//                   ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' 
//                   : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
//             }`}
//           >
//             {sub.name}
//           </button>
//         ))}
//       </div>

//       {/* Workers Grid */}
//       {loading ? (
//         <div className="text-center py-20">
//           <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-500 border-t-transparent"></div>
//           <p className="text-xs text-slate-500 mt-3 font-medium">Loading department workers...</p>
//         </div>
//       ) : filteredWorkers.length === 0 ? (
//         <div className={`text-center py-16 rounded-[2.5rem] border-2 border-dashed ${darkMode ? 'border-slate-800 bg-slate-900/40 text-slate-400' : 'border-slate-200 bg-white text-slate-500'}`}>
//           <p className="text-base font-bold">इस sub-service में अभी कोई worker उपलब्ध नहीं है।</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredWorkers.map((worker) => (
//             <div 
//               key={worker.id || worker.phone}
//               className={`p-6 rounded-[2rem] border-2 shadow-lg transition duration-300 flex flex-col justify-between ${
//                 darkMode ? 'bg-slate-900/90 border-slate-800 hover:border-emerald-500/50' : 'bg-white border-slate-100 hover:border-emerald-300'
//               }`}
//             >
//               <div>
//                 <div className="flex justify-between items-start mb-4">
//                   <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
//                     {worker.category} Expert
//                   </span>
//                   <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
//                     worker.status === 'Free' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
//                   }`}>
//                     {worker.status === 'Free' ? '🟢 Available' : '🔴 Busy'}
//                   </span>
//                 </div>

//                 <div className="flex justify-between items-start mb-1">
//                   <h4 className="text-xl font-black">{worker.name}</h4>
//                   {/* ⭐ Rating Display */}
//                   <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-xl border border-amber-500/20 text-amber-500 text-xs font-black">
//                     <Star size={13} className="fill-amber-500" />
//                     <span>{worker.rating ? worker.rating : '4.8'}</span>
//                   </div>
//                 </div>

//                 <p className={`text-xs flex items-center gap-1 mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
//                   <MapPin size={13} className="text-emerald-500" /> {worker.address}
//                 </p>

//                 <div className={`p-4 rounded-2xl mb-4 space-y-2 border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="font-bold text-slate-400 uppercase">Daily Wages:</span>
//                     <span className="text-sm font-black text-emerald-500 flex items-center">
//                       <IndianRupee size={14} />{worker.charges} / day
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="font-bold text-slate-400 uppercase">Phone:</span>
//                     <span className="font-bold flex items-center gap-1">
//                       <Phone size={12} className="text-emerald-500" /> {worker.phone}
//                     </span>
//                   </div>
//                 </div>

//                 {/* ⭐ Interactive Star Rating Input for Client */}
//                 <div className={`mb-6 p-3 rounded-xl border text-center ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
//                   <p className="text-[11px] font-bold text-slate-400 mb-1">Rate this worker (रेट दें):</p>
//                   <div className="flex justify-center gap-1.5">
//                     {[1, 2, 3, 4, 5].map((starNum) => (
//                       <button
//                         key={starNum}
//                         onClick={() => handleRateWorker(worker.id || worker.phone, starNum)}
//                         className="text-amber-400 hover:scale-125 transition-transform p-0.5"
//                         title={`Rate ${starNum} stars`}
//                       >
//                         <Star size={16} className={starNum <= Math.round(worker.rating || 4.8) ? 'fill-amber-400' : 'text-slate-400'} />
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//               </div>

//               {/* Instant Call & WhatsApp Booking Actions */}
//               <div className="grid grid-cols-2 gap-2">
//                 <a 
//                   href={`tel:${worker.phone}`}
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md shadow-emerald-600/20"
//                 >
//                   <Phone size={13} /> Call
//                 </a>
//                 <a 
//                   href={`https://wa.me/91${worker.phone}?text=Hello%20${worker.name},%20I%20found%20your%20profile%20on%20Bharat%20Seva%20Connect%20and%20want%20to%20book%20your%20service%20at%20${clientInfo.address}.`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md shadow-green-600/20"
//                 >
//                   <MessageSquare size={13} /> WhatsApp
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }























import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ArrowLeft,
  Phone,
  MessageSquare,
  MapPin,
  IndianRupee,
  Search,
  Sparkles,
  SlidersHorizontal,
  Star,
  ShieldCheck,
  Users,
  ChevronDown,
  Navigation,
  BriefcaseBusiness,
  Clock3,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function DepartmentWorkers({ darkMode }) {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubService, setSelectedSubService] = useState('All');
  const [sortBy, setSortBy] = useState('nearest');

  const clientInfo =
    JSON.parse(localStorage.getItem('currentClient')) || {
      name: 'User',
      address: 'Jabalpur',
    };

  // =========================================================
  // SUB SERVICES
  // =========================================================

  const subServicesMap = {
    Electrician: [
      { id: 'All', name: 'All Services', hindi: 'सभी सेवाएं' },
      {
        id: 'Electrician',
        name: 'Electrician',
        hindi: 'बिजली मिस्त्री',
      },
      {
        id: 'Plumber',
        name: 'Plumber',
        hindi: 'नल फिटिंग व रिपेयर',
      },
      {
        id: 'Carpenter',
        name: 'Carpenter',
        hindi: 'बढ़ई / लकड़ी का काम',
      },
      {
        id: 'Painter',
        name: 'Painter',
        hindi: 'घर की पुताई व पेंट',
      },
      {
        id: 'AC Repair',
        name: 'AC & Appliance Repair',
        hindi: 'एसी / फ्रिज रिपेयर',
      },
    ],

    Agriculture: [
      { id: 'All', name: 'All Services', hindi: 'सभी सेवाएं' },
      {
        id: 'Tractor Driver',
        name: 'Tractor Driver',
        hindi: 'ट्रैक्टर चालक',
      },
      {
        id: 'Crop Harvester',
        name: 'Crop Harvester',
        hindi: 'फसल कटाई मजदूर',
      },
      {
        id: 'Tube-well Expert',
        name: 'Tube-well & Pump Mechanic',
        hindi: 'ट्यूबवेल मिस्त्री',
      },
    ],

    Health: [
      { id: 'All', name: 'All Services', hindi: 'सभी सेवाएं' },
      {
        id: 'Home Nurse',
        name: 'Home Nurse / Caretaker',
        hindi: 'देखभाल करने वाला',
      },
      {
        id: 'Elderly Care',
        name: 'Elderly Assistant',
        hindi: 'बुजुर्गों की सहायता',
      },
    ],

    Education: [
      { id: 'All', name: 'All Services', hindi: 'सभी सेवाएं' },
      {
        id: 'Home Tutor',
        name: 'Home Tutor',
        hindi: 'गणित / विज्ञान शिक्षक',
      },
      {
        id: 'Language Coach',
        name: 'Spoken English & Computer Tutor',
        hindi: 'English / Computer Tutor',
      },
    ],

    Transport: [
      { id: 'All', name: 'All Services', hindi: 'सभी सेवाएं' },
      {
        id: 'Goods Driver',
        name: 'Mini Truck / Goods Driver',
        hindi: 'मालवाहक चालक',
      },
      {
        id: 'Personal Driver',
        name: 'Personal Car Driver',
        hindi: 'कार ड्राइवर',
      },
    ],

    Contractor: [
      { id: 'All', name: 'All Services', hindi: 'सभी सेवाएं' },
      {
        id: 'Mason',
        name: 'Mason / Rajmistri',
        hindi: 'राजमिस्त्री',
      },
      {
        id: 'Building Contractor',
        name: 'Building Contractor',
        hindi: 'भवन ठेकेदार',
      },
    ],
  };

  const currentSubServices =
    subServicesMap[categoryName] || [
      {
        id: 'All',
        name: 'All Services',
        hindi: 'सभी सेवाएं',
      },
    ];

  // =========================================================
  // CATEGORY COLORS / ICON STYLE
  // =========================================================

  const categoryTheme = {
    Electrician: {
      gradient: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-500/10',
      text: 'text-amber-500',
      border: 'border-amber-500/20',
    },

    Agriculture: {
      gradient: 'from-emerald-500 to-green-600',
      soft: 'bg-emerald-500/10',
      text: 'text-emerald-500',
      border: 'border-emerald-500/20',
    },

    Health: {
      gradient: 'from-rose-500 to-pink-600',
      soft: 'bg-rose-500/10',
      text: 'text-rose-500',
      border: 'border-rose-500/20',
    },

    Education: {
      gradient: 'from-blue-500 to-indigo-600',
      soft: 'bg-blue-500/10',
      text: 'text-blue-500',
      border: 'border-blue-500/20',
    },

    Transport: {
      gradient: 'from-purple-500 to-violet-600',
      soft: 'bg-purple-500/10',
      text: 'text-purple-500',
      border: 'border-purple-500/20',
    },

    Contractor: {
      gradient: 'from-cyan-500 to-teal-600',
      soft: 'bg-cyan-500/10',
      text: 'text-cyan-500',
      border: 'border-cyan-500/20',
    },
  };

  const theme =
    categoryTheme[categoryName] || {
      gradient: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-500/10',
      text: 'text-emerald-500',
      border: 'border-emerald-500/20',
    };

  // =========================================================
  // GET WORKER INITIALS
  // =========================================================

  const getInitials = (name = 'Worker') => {
    const words = name.trim().split(' ');

    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }

    return (
      words[0][0] + words[words.length - 1][0]
    ).toUpperCase();
  };

  // =========================================================
  // FETCH WORKERS
  // =========================================================

  useEffect(() => {
    const loadWorkersData = async () => {
      const localWorkers =
        JSON.parse(localStorage.getItem('workersList')) || [];

      const dummyWorkers = [
        {
          id: 'dummy-1',
          name: 'Ramesh Vishwakarma',
          phone: '9827011223',
          address:
            clientInfo.address || 'Civil Lines, Jabalpur',
          category: categoryName,
          subService:
            currentSubServices[1]?.id || categoryName,
          charges: '600',
          status: 'Free',
          rating: 4.8,
          totalRatings: 12,
        },

        {
          id: 'dummy-2',
          name: 'Suresh Kumar Patel',
          phone: '9425155678',
          address: 'Napier Town, Jabalpur',
          category: categoryName,
          subService:
            currentSubServices[2]?.id || categoryName,
          charges: '500',
          status: 'Free',
          rating: 4.6,
          totalRatings: 8,
        },

        {
          id: 'dummy-3',
          name: 'Manoj Sen',
          phone: '9754322110',
          address: 'Gorakhpur, Jabalpur',
          category: categoryName,
          subService:
            currentSubServices[1]?.id || categoryName,
          charges: '700',
          status: 'Busy',
          rating: 4.9,
          totalRatings: 15,
        },
      ];

      const combined = [
        ...localWorkers,
        ...dummyWorkers,
      ];

      setWorkers(combined);
      setLoading(false);

      try {
        const querySnapshot = await getDocs(
          collection(db, 'workers')
        );

        const firebaseList = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

        if (firebaseList.length > 0) {
          setWorkers([
            ...firebaseList,
            ...dummyWorkers,
          ]);
        }
      } catch (error) {
        console.error(
          'Firebase fetch note:',
          error
        );
      }
    };

    loadWorkersData();
  }, [categoryName]);

  // =========================================================
  // RATE WORKER
  // =========================================================

  const handleRateWorker = (
    workerId,
    newRating
  ) => {
    const updatedWorkers = workers.map((worker) => {
      if (
        worker.id === workerId ||
        worker.phone === workerId
      ) {
        const currentTotal =
          worker.totalRatings || 5;

        const currentAvg =
          worker.rating || 4.5;

        const newAvg = Number(
          (
            (currentAvg * currentTotal +
              newRating) /
            (currentTotal + 1)
          ).toFixed(1)
        );

        return {
          ...worker,
          rating: newAvg,
          totalRatings:
            currentTotal + 1,
        };
      }

      return worker;
    });

    setWorkers(updatedWorkers);

    localStorage.setItem(
      'workersList',
      JSON.stringify(updatedWorkers)
    );

    alert(
      `Thank you! You rated this worker ${newRating} ⭐`
    );
  };

  // =========================================================
  // FILTER + SORT
  // =========================================================

  const filteredWorkers = workers
    .filter((worker) => {
      const matchesCategory =
        worker.category === categoryName;

      const matchesSubService =
        selectedSubService === 'All' ||
        worker.subService ===
          selectedSubService;

      const search =
        searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        worker.name
          ?.toLowerCase()
          .includes(search) ||
        worker.address
          ?.toLowerCase()
          .includes(search) ||
        worker.subService
          ?.toLowerCase()
          .includes(search);

      return (
        matchesCategory &&
        matchesSubService &&
        matchesSearch
      );
    })
    .sort((a, b) => {
      if (sortBy === 'nearest') {
        const clientArea =
          clientInfo.address?.toLowerCase() || '';

        const aMatch =
          a.address
            ?.toLowerCase()
            .includes(clientArea);

        const bMatch =
          b.address
            ?.toLowerCase()
            .includes(clientArea);

        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;

        return 0;
      }

      if (sortBy === 'price') {
        return (
          Number(a.charges || 0) -
          Number(b.charges || 0)
        );
      }

      if (sortBy === 'rating') {
        return (
          Number(b.rating || 0) -
          Number(a.rating || 0)
        );
      }

      return 0;
    });

  // =========================================================
  // UI
  // =========================================================

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-950 text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* =====================================================
            TOP NAVIGATION
        ===================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-7">

          <button
            onClick={() =>
              navigate('/client-search')
            }
            className={`group flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-black transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400'
                : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-600'
            }`}
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to Departments
          </button>

          {/* SEARCH */}

          <div className="relative w-full lg:w-[430px]">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search worker, service or area..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className={`w-full h-12 rounded-2xl border pl-11 pr-12 text-xs sm:text-sm font-semibold outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-emerald-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500'
              }`}
            />

            {searchTerm && (
              <button
                onClick={() =>
                  setSearchTerm('')
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 hover:text-emerald-500"
              >
                CLEAR
              </button>
            )}

          </div>

        </div>

        {/* =====================================================
            PREMIUM HERO HEADER
        ===================================================== */}

        <div
          className={`relative overflow-hidden rounded-[2rem] border mb-7 ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >

          {/* Background glow */}

          <div
            className={`absolute -right-20 -top-24 w-72 h-72 rounded-full bg-gradient-to-br ${theme.gradient} opacity-10 blur-3xl`}
          ></div>

          <div
            className={`absolute -left-20 -bottom-28 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl`}
          ></div>

          <div className="relative p-5 sm:p-7 lg:p-8">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

              <div>

                <div className="flex flex-wrap items-center gap-2 mb-3">

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${theme.soft} ${theme.text} ${theme.border}`}
                  >
                    <Sparkles size={11} />
                    Verified Department
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${
                      darkMode
                        ? 'bg-slate-800 border-slate-700 text-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    <ShieldCheck
                      size={11}
                      className="text-emerald-500"
                    />
                    Trusted Network
                  </div>

                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                  Find the Right{' '}
                  <span
                    className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
                  >
                    {categoryName}
                  </span>
                </h1>

                <p
                  className={`mt-2 max-w-2xl text-xs sm:text-sm font-medium leading-relaxed ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  Apni requirement ke according
                  verified workers search karein,
                  location aur service ke basis par
                  compare karein aur directly contact
                  karein.
                </p>

              </div>

              {/* LOCATION */}

              <div
                className={`shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >

                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MapPin
                    size={18}
                    className="text-emerald-500"
                  />
                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                    Your Location
                  </p>

                  <p className="text-xs font-black mt-0.5">
                    {clientInfo.address}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom gradient line */}

          <div
            className={`h-1 bg-gradient-to-r ${theme.gradient}`}
          ></div>

        </div>

        {/* =====================================================
            STATS BAR
        ===================================================== */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-7">

          <div
            className={`p-4 rounded-2xl border ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                  Available
                </p>

                <p className="text-xl font-black mt-1">
                  {
                    filteredWorkers.filter(
                      (w) => w.status === 'Free'
                    ).length
                  }
                </p>

              </div>

              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Users
                  size={18}
                  className="text-emerald-500"
                />
              </div>

            </div>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                  Total Experts
                </p>

                <p className="text-xl font-black mt-1">
                  {filteredWorkers.length}
                </p>

              </div>

              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <BriefcaseBusiness
                  size={18}
                  className="text-blue-500"
                />
              </div>

            </div>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                  Services
                </p>

                <p className="text-xl font-black mt-1">
                  {Math.max(
                    currentSubServices.length - 1,
                    1
                  )}
                </p>

              </div>

              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Sparkles
                  size={18}
                  className="text-purple-500"
                />
              </div>

            </div>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                  Your Area
                </p>

                <p className="text-sm font-black mt-1 truncate max-w-[120px]">
                  {clientInfo.address}
                </p>

              </div>

              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Navigation
                  size={18}
                  className="text-amber-500"
                />
              </div>

            </div>
          </div>

        </div>

        {/* =====================================================
            FILTER SECTION
        ===================================================== */}

        <div
          className={`rounded-[1.7rem] border p-4 sm:p-5 mb-8 ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

            <div>

              <div className="flex items-center gap-2 mb-1">

                <SlidersHorizontal
                  size={15}
                  className="text-emerald-500"
                />

                <h3 className="text-sm font-black">
                  Choose Required Service
                </h3>

              </div>

              <p className="text-[10px] text-slate-400 font-medium">
                Select a service to find the right
                worker.
              </p>

            </div>

            {/* SORT */}

            <div className="relative">

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className={`appearance-none pr-9 pl-4 py-2.5 rounded-xl border text-[10px] font-black outline-none cursor-pointer ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <option value="nearest">
                  Nearest Location
                </option>

                <option value="price">
                  Lowest Charges
                </option>

                <option value="rating">
                  Highest Rating
                </option>
              </select>

              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />

            </div>

          </div>

          {/* SERVICE CHIPS */}

          <div className="flex gap-2 overflow-x-auto pb-1 mt-4 scrollbar-hide">

            {currentSubServices.map((sub) => (

              <button
                key={sub.id}
                onClick={() =>
                  setSelectedSubService(sub.id)
                }
                className={`shrink-0 px-4 py-2.5 rounded-xl text-[10px] sm:text-[11px] font-black border transition-all duration-300 ${
                  selectedSubService === sub.id
                    ? `bg-gradient-to-r ${theme.gradient} text-white border-transparent shadow-lg`
                    : darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                {sub.name}
              </button>

            ))}

          </div>

        </div>

        {/* =====================================================
            RESULT HEADER
        ===================================================== */}

        {!loading && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
                Worker Directory
              </p>

              <h2 className="text-xl sm:text-2xl font-black mt-1">
                Available Experts
              </h2>

            </div>

            <div
              className={`px-3 py-2 rounded-xl border text-[10px] font-black ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-500'
              }`}
            >
              Showing{' '}
              <span className="text-emerald-500">
                {filteredWorkers.length}
              </span>{' '}
              workers
            </div>

          </div>
        )}

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading ? (

          <div
            className={`rounded-[2rem] border p-20 text-center ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >

            <div className="relative w-14 h-14 mx-auto">

              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20"></div>

              <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>

              <ShieldCheck
                size={20}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500"
              />

            </div>

            <p className="text-sm font-black mt-5">
              Finding verified workers...
            </p>

            <p className="text-[10px] text-slate-400 mt-1">
              Searching local and secure network
            </p>

          </div>

        ) : filteredWorkers.length === 0 ? (

          /* ===================================================
             EMPTY STATE
          =================================================== */

          <div
            className={`rounded-[2rem] border-2 border-dashed p-14 sm:p-20 text-center ${
              darkMode
                ? 'border-slate-800 bg-slate-900/40'
                : 'border-slate-200 bg-white'
            }`}
          >

            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Search
                size={25}
                className="text-emerald-500"
              />
            </div>

            <h3 className="text-lg font-black mt-5">
              No worker found
            </h3>

            <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
              Is service, worker name ya area ke
              liye abhi koi matching worker available
              nahi hai.
            </p>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSubService('All');
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition"
            >
              Reset Filters
            </button>

          </div>

        ) : (

          /* ===================================================
             WORKER CARDS
          =================================================== */

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {filteredWorkers.map((worker) => (

              <div
                key={
                  worker.id || worker.phone
                }
                className={`group relative overflow-hidden rounded-[1.8rem] border transition-all duration-500 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/40'
                    : 'bg-white border-slate-200 hover:border-emerald-300'
                } hover:-translate-y-1.5 hover:shadow-2xl ${
                  darkMode
                    ? 'hover:shadow-black/40'
                    : 'hover:shadow-slate-300/50'
                }`}
              >

                {/* TOP LINE */}

                <div
                  className={`h-1 bg-gradient-to-r ${theme.gradient}`}
                ></div>

                <div className="p-5">

                  {/* =================================================
                      CARD TOP
                  ================================================= */}

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex items-center gap-3">

                      {/* AVATAR */}

                      <div
                        className={`relative w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${theme.gradient} p-[2px] shadow-lg`}
                      >

                        <div
                          className={`w-full h-full rounded-[0.9rem] flex items-center justify-center text-white text-sm font-black ${
                            darkMode
                              ? 'bg-slate-900'
                              : 'bg-white'
                          }`}
                        >

                          <span
                            className={`bg-gradient-to-br ${theme.gradient} bg-clip-text text-transparent`}
                          >
                            {getInitials(
                              worker.name
                            )}
                          </span>

                        </div>

                        {/* ONLINE DOT */}

                        <span
                          className={`absolute -right-1 -bottom-1 w-4 h-4 rounded-full border-2 ${
                            darkMode
                              ? 'border-slate-900'
                              : 'border-white'
                          } ${
                            worker.status ===
                            'Free'
                              ? 'bg-emerald-500'
                              : 'bg-red-500'
                          }`}
                        ></span>

                      </div>

                      <div className="min-w-0">

                        <div className="flex items-center gap-1.5">

                          <h3 className="font-black text-base truncate">
                            {worker.name}
                          </h3>

                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-emerald-500"
                          />

                        </div>

                        <p
                          className={`text-[10px] font-bold mt-1 ${
                            darkMode
                              ? 'text-slate-400'
                              : 'text-slate-500'
                          }`}
                        >
                          {worker.subService ||
                            categoryName}
                        </p>

                      </div>

                    </div>

                    {/* RATING */}

                    <div
                      className={`shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-xl border bg-amber-500/10 border-amber-500/20 text-amber-500`}
                    >

                      <Star
                        size={12}
                        className="fill-amber-400"
                      />

                      <span className="text-[11px] font-black">
                        {worker.rating
                          ? Number(
                              worker.rating
                            ).toFixed(1)
                          : '4.8'}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      STATUS + LOCATION
                  ================================================= */}

                  <div className="flex flex-wrap gap-2 mt-4">

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-wide ${
                        worker.status === 'Free'
                          ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                          : 'bg-red-500/10 text-red-500 border-red-500/20'
                      }`}
                    >

                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          worker.status ===
                          'Free'
                            ? 'bg-emerald-500'
                            : 'bg-red-500'
                        }`}
                      ></span>

                      {worker.status ===
                      'Free'
                        ? 'Available Now'
                        : 'Currently Busy'}

                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[9px] font-bold ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-400'
                          : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}
                    >
                      <ShieldCheck
                        size={11}
                        className="text-emerald-500"
                      />

                      Verified
                    </span>

                  </div>

                  {/* =================================================
                      LOCATION
                  ================================================= */}

                  <div
                    className={`mt-4 p-3 rounded-xl border flex items-center gap-3 ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800'
                        : 'bg-slate-50 border-slate-100'
                    }`}
                  >

                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <MapPin
                        size={15}
                        className="text-emerald-500"
                      />
                    </div>

                    <div className="min-w-0">

                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                        Service Location
                      </p>

                      <p className="text-[11px] font-bold truncate mt-0.5">
                        {worker.address}
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      PRICE + EXPERIENCE INFO
                  ================================================= */}

                  <div className="grid grid-cols-2 gap-2 mt-3">

                    <div
                      className={`p-3 rounded-xl border ${
                        darkMode
                          ? 'bg-slate-950/50 border-slate-800'
                          : 'bg-white border-slate-100'
                      }`}
                    >

                      <p className="text-[8px] uppercase tracking-widest font-black text-slate-400">
                        Daily Charges
                      </p>

                      <div className="flex items-center gap-0.5 mt-1">

                        <IndianRupee
                          size={14}
                          className="text-emerald-500"
                        />

                        <span className="text-base font-black text-emerald-500">
                          {worker.charges ||
                            '500'}
                        </span>

                        <span className="text-[9px] text-slate-400 ml-1">
                          / day
                        </span>

                      </div>

                    </div>

                    <div
                      className={`p-3 rounded-xl border ${
                        darkMode
                          ? 'bg-slate-950/50 border-slate-800'
                          : 'bg-white border-slate-100'
                      }`}
                    >

                      <p className="text-[8px] uppercase tracking-widest font-black text-slate-400">
                        Reviews
                      </p>

                      <div className="flex items-center gap-1 mt-1">

                        <Star
                          size={13}
                          className="text-amber-500 fill-amber-500"
                        />

                        <span className="text-sm font-black">
                          {worker.totalRatings ||
                            0}
                        </span>

                        <span className="text-[9px] text-slate-400">
                          ratings
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      RATE WORKER
                  ================================================= */}

                  <div
                    className={`mt-3 p-3 rounded-xl border text-center ${
                      darkMode
                        ? 'bg-slate-950/40 border-slate-800'
                        : 'bg-slate-50 border-slate-100'
                    }`}
                  >

                    <p className="text-[9px] font-bold text-slate-400 mb-2">
                      Rate this worker
                    </p>

                    <div className="flex justify-center gap-1">

                      {[1, 2, 3, 4, 5].map(
                        (starNum) => (

                          <button
                            key={starNum}
                            onClick={() =>
                              handleRateWorker(
                                worker.id ||
                                  worker.phone,
                                starNum
                              )
                            }
                            className="p-1 text-amber-400 hover:scale-125 transition-transform"
                            title={`Rate ${starNum} stars`}
                          >

                            <Star
                              size={16}
                              className={
                                starNum <=
                                Math.round(
                                  worker.rating ||
                                    4.8
                                )
                                  ? 'fill-amber-400'
                                  : darkMode
                                  ? 'text-slate-700'
                                  : 'text-slate-300'
                              }
                            />

                          </button>

                        )
                      )}

                    </div>

                  </div>

                  {/* =================================================
                      ACTION BUTTONS
                  ================================================= */}

                  <div className="grid grid-cols-2 gap-2 mt-4">

                    <a
                      href={`tel:${worker.phone}`}
                      className="group/btn bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-black text-[10px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
                    >
                      <Phone
                        size={14}
                        className="group-hover/btn:scale-110 transition"
                      />

                      Call Worker
                    </a>

                    <a
                      href={`https://wa.me/91${worker.phone}?text=Hello%20${encodeURIComponent(
                        worker.name
                      )},%20I%20found%20your%20profile%20on%20Bharat%20Seva%20Connect%20and%20want%20to%20book%20your%20service%20at%20${encodeURIComponent(
                        clientInfo.address
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-black text-[10px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-600/20"
                    >
                      <MessageSquare
                        size={14}
                        className="group-hover/btn:scale-110 transition"
                      />

                      WhatsApp
                    </a>

                  </div>

                  {/* VIEW INDICATOR */}

                  <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest font-black text-slate-400">
                      <Clock3 size={11} />
                      Quick Response
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* =====================================================
            BOTTOM TRUST BAR
        ===================================================== */}

        {!loading && (
          <div
            className={`mt-8 rounded-[1.7rem] border overflow-hidden ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck
                    size={19}
                    className="text-emerald-500"
                  />
                </div>

                <div>

                  <p className="text-xs font-black">
                    Bharat Seva Verified Network
                  </p>

                  <p className="text-[9px] text-slate-400 mt-0.5">
                    Connect directly with workers
                    available in your area.
                  </p>

                </div>

              </div>

              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                  darkMode
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-emerald-50 text-emerald-600'
                }`}
              >
                <CheckCircle2 size={12} />
                Secure Marketplace
              </div>

            </div>

            <div
              className={`h-1 bg-gradient-to-r ${theme.gradient}`}
            ></div>

          </div>
        )}

      </div>
    </div>
  );
}
