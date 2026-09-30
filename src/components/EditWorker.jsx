import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditWorker({ darkMode }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    phone: '',
    address: '',
    charges: ''
  });

  useEffect(() => {
    // Current worker ki details load karein taaki form pre-fill ho sake
    const savedWorker = JSON.parse(localStorage.getItem('currentWorker'));
    if (!savedWorker) {
      navigate('/add-worker'); // Agar login nahi hai toh redirect karein
    } else {
      setFormData(savedWorker);
    }
  }, [navigate]);

  // Input changes handle karne ke liye
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit karke updates save karna
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Update currentWorker in localStorage
    localStorage.setItem('currentWorker', JSON.stringify(formData));

    // 2. Update global workersList as well taaki marketplace/search mein bhi updated data dikhe
    const workersList = JSON.parse(localStorage.getItem('workersList')) || [];
    const updatedList = workersList.map(w => w.phone === formData.phone ? formData : w);
    localStorage.setItem('workersList', JSON.stringify(updatedList));

    alert('Profile updated successfully! (प्रोफाइल सफलतापूर्वक अपडेट हो گئی है)');
    navigate('/worker-dashboard');
  };

  return (
    <div className={`max-w-md mx-auto p-6 rounded-[2.5xl] shadow-2xl mt-6 mb-10 border transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-900'
    }`}>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => navigate('/worker-dashboard')}
          className="p-2 rounded-xl bg-slate-500/10 hover:bg-slate-500/20 transition flex items-center gap-1 text-xs font-bold"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 className="text-xl font-black">Edit Profile Details</h2>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-bold opacity-80 mb-1 block">Full Name (पूरा नाम)</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required
            className={`w-full p-3.5 rounded-2xl border text-sm font-medium outline-none transition ${
              darkMode ? 'bg-slate-950 border-slate-800 focus:border-emerald-500' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'
            }`}
          />
        </div>

        <div>
          <label className="text-xs font-bold opacity-80 mb-1 block">Category / Skill (कार्य श्रेणी)</label>
          <input 
            type="text" 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            required
            className={`w-full p-3.5 rounded-2xl border text-sm font-medium outline-none transition ${
              darkMode ? 'bg-slate-950 border-slate-800 focus:border-emerald-500' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'
            }`}
          />
        </div>

        <div>
          <label className="text-xs font-bold opacity-80 mb-1 block">Phone Number (मोबाइल नंबर - Non-editable)</label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            disabled
            className={`w-full p-3.5 rounded-2xl border text-sm font-medium opacity-60 cursor-not-allowed ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}
          />
        </div>

        <div>
          <label className="text-xs font-bold opacity-80 mb-1 block">Address / Location (पता)</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange}
            required
            className={`w-full p-3.5 rounded-2xl border text-sm font-medium outline-none transition ${
              darkMode ? 'bg-slate-950 border-slate-800 focus:border-emerald-500' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'
            }`}
          />
        </div>

        <div>
          <label className="text-xs font-bold opacity-80 mb-1 block">Daily Charges (₹ प्रति दिन)</label>
          <input 
            type="number" 
            name="charges" 
            value={formData.charges} 
            onChange={handleChange}
            required
            className={`w-full p-3.5 rounded-2xl border text-sm font-medium outline-none transition ${
              darkMode ? 'bg-slate-950 border-slate-800 focus:border-emerald-500' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'
            }`}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-4 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center justify-center gap-2 text-sm shadow-md mt-6"
        >
          <Save size={18} /> Save Changes (बदलाव सहेजें)
        </button>
      </form>
    </div>
  );
}