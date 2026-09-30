
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, User, MapPin, Briefcase, IndianRupee, Phone, UserPlus } from 'lucide-react';

// export default function AddWorker({ t, darkMode }) {
//   const navigate = useNavigate();

//   // 👉 Yahan check karein: Agar worker pehle se logged-in hai toh redirect kar dein
//   useEffect(() => {
//     const loggedInWorker = localStorage.getItem('currentWorker');
//     if (loggedInWorker) {
//       navigate('/worker-dashboard', { replace: true });
//     }
//   }, [navigate]);

//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     category: 'Electrician',
//     charges: '500',
//     status: 'Free',
//     isBooked: false
//   });

//   const [loading, setLoading] = useState(false);

//   const handleWorkerRegister = (e) => {
//     e.preventDefault();
//     if (!formData.phone || !formData.name || !formData.address) {
//       alert("Kripya sabhi anivarya jankari (Name, Phone, Address) bharein.");
//       return;
//     }

//     setLoading(true);
    
//     try {
//       const existingWorkers = JSON.parse(localStorage.getItem('workersList')) || [];
//       const workerExists = existingWorkers.some(w => w.phone === formData.phone);

//       let workerDataToStore;

//       if (workerExists) {
//         alert("Yeh mobile number pehle se registered hai! Aapke dashboard par login ho rahe hain.");
//         workerDataToStore = existingWorkers.find(w => w.phone === formData.phone);
//       } else {
//         workerDataToStore = {
//           ...formData,
//           createdAt: new Date().toISOString()
//         };
//         existingWorkers.push(workerDataToStore);
//         localStorage.setItem('workersList', JSON.stringify(existingWorkers));
//         alert("Worker successfully registered & saved locally!");
//       }

//       // Session save karein taaki jab tak logout na ho, yeh yaad rahe
//       localStorage.setItem('currentWorker', JSON.stringify(workerDataToStore));
      
//       navigate('/worker-dashboard', { replace: true });
//     } catch (error) {
//       console.error("Local storage error: ", error);
//       alert("Data save karne me kuch error aayi.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`max-w-md mx-auto p-8 rounded-[2.5xl] shadow-2xl mt-6 mb-10 border transition-colors duration-300 ${
//       darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'
//     }`}>
//       {/* Baaki ka aapka puraana JSX form code yahi rahega */}
//       <button onClick={() => navigate('/')} className={`flex items-center gap-1 mb-6 text-xs font-bold transition ${darkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-700'}`}>
//         <ArrowLeft size={18} /> Back to Home
//       </button>

//       <div className="flex items-center gap-3 mb-2">
//         <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md">
//           <UserPlus size={20} />
//         </div>
//         <h2 className="text-2xl font-black">Add Worker (कामगार जोड़ें)</h2>
//       </div>
//       <p className={`text-xs mb-6 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
//         Apna kaam, daily charges aur details daal kar turant register karein.
//       </p>

//       <form onSubmit={handleWorkerRegister} className="space-y-4">
//         {/* Input fields */}
//         <div>
//           <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Poora Naam (Full Name)</label>
//           <div className="relative">
//             <User className="absolute left-3.5 top-3 text-slate-400" size={18} />
//             <input
//               type="text"
//               required
//               className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
//               placeholder="e.g. Ramesh Kumar"
//               value={formData.name}
//               onChange={e => setFormData({...formData, name: e.target.value})}
//             />
//           </div>
//         </div>

//         <div>
//           <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Mobile Number (Phone)</label>
//           <div className="relative">
//             <Phone className="absolute left-3.5 top-3 text-slate-400" size={18} />
//             <input
//               type="tel"
//               required
//               className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
//               placeholder="e.g. 9876543210"
//               value={formData.phone}
//               onChange={e => setFormData({...formData, phone: e.target.value})}
//             />
//           </div>
//         </div>

//         <div>
//           <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Apna Kaam Chunein (Category)</label>
//           <div className="relative">
//             <Briefcase className="absolute left-3.5 top-3 text-slate-400" size={18} />
//             <select
//               className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
//               value={formData.category}
//               onChange={e => setFormData({...formData, category: e.target.value})}
//             >
//               <option value="Electrician" className={darkMode ? 'bg-slate-900 text-white' : ''}>Electrician & Plumber</option>
//               <option value="Contractor" className={darkMode ? 'bg-slate-900 text-white' : ''}>Contractor & Mason (राजमिस्त्री)</option>
//               <option value="Agriculture" className={darkMode ? 'bg-slate-900 text-white' : ''}>Agriculture Worker / Tractor Driver</option>
//               <option value="Health" className={darkMode ? 'bg-slate-900 text-white' : ''}>Home Nurse / Caretaker</option>
//               <option value="Education" className={darkMode ? 'bg-slate-900 text-white' : ''}>School Teacher / Tutor</option>
//             </select>
//           </div>
//         </div>

//         <div>
//           <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pratidin Shulk (Charges ₹ / day)</label>
//           <div className="relative">
//             <IndianRupee className="absolute left-3.5 top-3 text-slate-400" size={18} />
//             <input
//               type="number"
//               required
//               className={`w-full border rounded-xl pl-10 pr-4 py.2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
//               placeholder="e.g. 500"
//               value={formData.charges}
//               onChange={e => setFormData({...formData, charges: e.target.value})}
//             />
//           </div>
//         </div>

//         <div>
//           <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pata / Location (Address)</label>
//           <div className="relative">
//             <MapPin className="absolute left-3.5 top-3 text-slate-400" size={18} />
//             <input
//               type="text"
//               required
//               className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
//               placeholder="e.g. Civil Lines, Jabalpur"
//               value={formData.address}
//               onChange={e => setFormData({...formData, address: e.target.value})}
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold transition shadow-md mt-2 text-sm disabled:bg-gray-400"
//         >
//           {loading ? 'Saving locally...' : 'Register Worker (पंजीयन करें)'}
//         </button>
//       </form>
//     </div>
//   );
// }


















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Briefcase, IndianRupee, Phone, UserPlus, LocateFixed } from 'lucide-react';

export default function AddWorker({ t, darkMode }) {
  const navigate = useNavigate();

  // 👉 Check karein: Agar worker pehle se logged-in hai toh redirect kar dein
  useEffect(() => {
    const loggedInWorker = localStorage.getItem('currentWorker');
    if (loggedInWorker) {
      navigate('/worker-dashboard', { replace: true });
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    category: 'Electrician',
    charges: '500',
    status: 'Free',
    isBooked: false
  });

  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);

  // 📍 Current GPS Location detect karne ka function
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Aapka browser Geolocation ko support nahi karta hai.");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // OpenStreetMap Nominatim API se lat/lng ko readable address me convert karna
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          
          if (data && data.display_name) {
            // Chota aur saaf address extract karna
            const addressParts = data.display_name.split(',');
            const shortAddress = `${addressParts[0] || ''}, ${addressParts[1] || ''}, ${addressParts[3] || 'Jabalpur'}`.trim();
            
            setFormData(prev => ({ ...prev, address: shortAddress }));
          } else {
            setFormData(prev => ({ ...prev, address: `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}` }));
          }
        } catch (error) {
          console.error("Location fetch error:", error);
          setFormData(prev => ({ ...prev, address: `Jabalpur (GPS Coord: ${latitude.toFixed(2)}, ${longitude.toFixed(2)})` }));
        } finally {
          setLocating(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Location access karne ki anumati nahi mili. Kripya apna pata manually type karein.");
        setLocating(false);
      },
      { enableHighAccuracy: true }
    );
  };

  const handleWorkerRegister = (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.name || !formData.address) {
      alert("Kripya sabhi anivarya jankari (Name, Phone, Address) bharein.");
      return;
    }

    setLoading(true);
    
    try {
      const existingWorkers = JSON.parse(localStorage.getItem('workersList')) || [];
      const workerExists = existingWorkers.some(w => w.phone === formData.phone);

      let workerDataToStore;

      if (workerExists) {
        alert("Yeh mobile number pehle se registered hai! Aapke dashboard par login ho rahe hain.");
        workerDataToStore = existingWorkers.find(w => w.phone === formData.phone);
      } else {
        workerDataToStore = {
          ...formData,
          createdAt: new Date().toISOString()
        };
        existingWorkers.push(workerDataToStore);
        localStorage.setItem('workersList', JSON.stringify(existingWorkers));
        alert("Worker successfully registered & saved locally!");
      }

      // Session save karein taaki jab तक logout na ho, yeh yaad rahe
      localStorage.setItem('currentWorker', JSON.stringify(workerDataToStore));
      
      navigate('/worker-dashboard', { replace: true });
    } catch (error) {
      console.error("Local storage error: ", error);
      alert("Data save karne me kuch error aayi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`max-w-md mx-auto p-8 rounded-[2.5xl] shadow-2xl mt-6 mb-10 border transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'
    }`}>
      
      <button onClick={() => navigate('/')} className={`flex items-center gap-1 mb-6 text-xs font-bold transition ${darkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-700'}`}>
        <ArrowLeft size={18} /> Back to Home
      </button>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md">
          <UserPlus size={20} />
        </div>
        <h2 className="text-2xl font-black">Add Worker (कामगार जोड़ें)</h2>
      </div>
      <p className={`text-xs mb-6 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        Apna kaam, daily charges aur location daal kar turant register karein.
      </p>

      <form onSubmit={handleWorkerRegister} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Poora Naam (Full Name)</label>
          <div className="relative">
            <User className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <input
              type="text"
              required
              className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Mobile Number (Phone)</label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <input
              type="tel"
              required
              className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Apna Kaam Chunein (Category)</label>
          <div className="relative">
            <Briefcase className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <select
              className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
              value={formData.category}
              onChange={e => setFormData({...formData, category: e.target.value})}
            >
              <option value="Electrician" className={darkMode ? 'bg-slate-900 text-white' : ''}>Electrician & Plumber</option>
              <option value="Contractor" className={darkMode ? 'bg-slate-900 text-white' : ''}>Contractor & Mason (राजमिस्त्री)</option>
              <option value="Agriculture" className={darkMode ? 'bg-slate-900 text-white' : ''}>Agriculture Worker / Tractor Driver</option>
              <option value="Health" className={darkMode ? 'bg-slate-900 text-white' : ''}>Home Nurse / Caretaker</option>
              <option value="Education" className={darkMode ? 'bg-slate-900 text-white' : ''}>School Teacher / Tutor</option>
            </select>
          </div>
        </div>

        {/* Charges */}
        <div>
          <label className={`block text-xs font-bold mb-1 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pratidin Shulk (Charges ₹ / day)</label>
          <div className="relative">
            <IndianRupee className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <input
              type="number"
              required
              className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
              placeholder="e.g. 500"
              value={formData.charges}
              onChange={e => setFormData({...formData, charges: e.target.value})}
            />
          </div>
        </div>

        {/* Address with Live GPS Button */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className={`block text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pata / Location (Address)</label>
            <button
              type="button"
              onClick={handleGetCurrentLocation}
              disabled={locating}
              className="text-[11px] font-bold text-emerald-500 hover:underline flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20"
            >
              <LocateFixed size={12} /> {locating ? 'Detecting...' : 'Use Current GPS'}
            </button>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <input
              type="text"
              required
              className={`w-full border rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
              placeholder="e.g. Civil Lines, Jabalpur"
              value={formData.address}
              onChange={e => setFormData({...formData, address: e.target.value})}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold transition shadow-md mt-2 text-sm disabled:bg-gray-400"
        >
          {loading ? 'Saving locally...' : 'Register Worker (पंजीयन करें)'}
        </button>
      </form>
    </div>
  );
}