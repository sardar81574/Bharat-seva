import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Phone, Search, LogOut } from 'lucide-react';

export default function SearchWorker({ t, darkMode }) {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  // 👉 Check karein: Agar client pehle se logged-in hai toh seedha client-search page par bhej dein
  useEffect(() => {
    const savedClient = localStorage.getItem('currentClient');
    if (savedClient) {
      navigate('/client-search', { replace: true });
    }
  }, [navigate]);

  const handleClientSubmit = (e) => {
    e.preventDefault();
    if (!clientData.name || !clientData.phone || !clientData.address) {
      alert("Kripya apna Naam, Contact Number aur Address poora bharein.");
      return;
    }

    // Client ki details ko localStorage me save karna
    localStorage.setItem('currentClient', JSON.stringify(clientData));
    
    // Seedha Client Search / Departments page par redirect karna
    navigate('/client-search', { replace: true });
  };

  return (
    <div className={`max-w-md mx-auto p-8 rounded-[2.5xl] shadow-2xl mt-10 mb-10 border transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'
    }`}>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        className={`flex items-center gap-1 mb-6 text-xs font-bold transition ${
          darkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-700'
        }`}
      >
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md">
          <Search size={20} />
        </div>
        <h2 className="text-2xl font-black">Search Worker (काम ढूंढें)</h2>
      </div>
      <p className={`text-xs mb-8 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        Apna naam, contact number aur address daal kar aage badhein aur live workers ki list dekhein.
      </p>

      <form onSubmit={handleClientSubmit} className="space-y-5">
        
        {/* Name */}
        <div>
          <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Aapka Naam (Your Name)
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              required
              className={`w-full border rounded-2xl pl-10 pr-4 py-3 outline-none text-sm transition ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
              placeholder="e.g. Rahul Sharma"
              value={clientData.name}
              onChange={e => setClientData({...clientData, name: e.target.value})}
            />
          </div>
        </div>

        {/* Contact Number */}
        <div>
          <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Contact Number (Phone)
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input
              type="tel"
              required
              className={`w-full border rounded-2xl pl-10 pr-4 py-3 outline-none text-sm transition ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
              placeholder="e.g. 9876543210"
              value={clientData.phone}
              onChange={e => setClientData({...clientData, phone: e.target.value})}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Aapka Pata (Address)
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              required
              className={`w-full border rounded-2xl pl-10 pr-4 py-3 outline-none text-sm transition ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
              placeholder="e.g. Civil Lines, Jabalpur"
              value={clientData.address}
              onChange={e => setClientData({...clientData, address: e.target.value})}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-sm transition shadow-lg shadow-blue-600/30 mt-3 flex items-center justify-center gap-2"
        >
          <Search size={18} /> Proceed to Worker Directory
        </button>

      </form>
    </div>
  );
}