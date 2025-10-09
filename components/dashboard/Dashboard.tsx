import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import type { SchoolData } from '../../types';
import { Logo } from '../ui/Logo';

interface DashboardProps {
  closeDashboard: () => void;
}

export default function Dashboard({ closeDashboard }: DashboardProps) {
  const { schoolData, setSchoolData } = useData();
  const [formData, setFormData] = useState<SchoolData>(schoolData);

  useEffect(() => {
    setFormData(schoolData);
  }, [schoolData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    setFormData(prev => {
      const newData = JSON.parse(JSON.stringify(prev)); // Deep copy
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };
  
  const handleTestimonialChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
        const newTestimonials = [...prev.testimonials];
        newTestimonials[index] = { ...newTestimonials[index], [name]: value };
        return { ...prev, testimonials: newTestimonials };
    });
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, logoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setSchoolData(formData);
    alert('Content saved!');
    closeDashboard();
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-secondary-900 z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Admin Dashboard</h1>
          <button onClick={closeDashboard} className="text-2xl">&times;</button>
        </div>
        
        <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg space-y-6">
          
          {/* General Info */}
          <fieldset className="border p-4 rounded-md border-secondary-300 dark:border-secondary-600">
            <legend className="px-2 font-semibold">General</legend>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">School Name</label>
                    <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} className="mt-1 block w-full input-style" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Slogan</label>
                    <input type="text" name="slogan" value={formData.slogan} onChange={handleChange} className="mt-1 block w-full input-style" />
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium mb-1">School Logo</label>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-secondary-700 rounded-md flex items-center justify-center border border-secondary-200 dark:border-secondary-600">
                        <Logo url={formData.logoUrl} className="h-10 w-10 text-primary" />
                    </div>
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="block w-full text-sm text-secondary-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 dark:file:bg-primary-900/50 file:text-primary dark:file:text-primary-300 hover:file:bg-primary-100 dark:hover:file:bg-primary-900"
                    />
                </div>
            </div>
          </fieldset>
          
          {/* About Section */}
          <fieldset className="border p-4 rounded-md border-secondary-300 dark:border-secondary-600">
            <legend className="px-2 font-semibold">About Section</legend>
            <div>
              <label className="block text-sm font-medium">About Text</label>
              <textarea name="about.text" value={formData.about.text} onChange={handleChange} rows={4} className="mt-1 block w-full input-style" />
            </div>
          </fieldset>

          {/* Programs Section */}
          <fieldset className="border p-4 rounded-md border-secondary-300 dark:border-secondary-600">
            <legend className="px-2 font-semibold">Programs</legend>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Primary Text</label>
                    <textarea name="programs.primary.text" value={formData.programs.primary.text} onChange={handleChange} rows={2} className="mt-1 block w-full input-style" />
                </div>
                <div>
                    <label className="block text-sm font-medium">College Text</label>
                    <textarea name="programs.college.text" value={formData.programs.college.text} onChange={handleChange} rows={2} className="mt-1 block w-full input-style" />
                </div>
                 <div>
                    <label className="block text-sm font-medium">Lycée Text</label>
                    <textarea name="programs.lycee.text" value={formData.programs.lycee.text} onChange={handleChange} rows={2} className="mt-1 block w-full input-style" />
                </div>
            </div>
          </fieldset>

          {/* Testimonials */}
           <fieldset className="border p-4 rounded-md border-secondary-300 dark:border-secondary-600">
              <legend className="px-2 font-semibold">Testimonials</legend>
              {formData.testimonials.map((testimonial, index) => (
                  <div key={index} className="border-b dark:border-secondary-700 py-4 last:border-b-0">
                      <label className="block text-sm font-medium">Quote {index + 1}</label>
                      <textarea name="quote" value={testimonial.quote} onChange={(e) => handleTestimonialChange(index, e)} rows={2} className="mt-1 block w-full input-style" />
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                           <label className="block text-sm font-medium">Author</label>
                           <input type="text" name="author" value={testimonial.author} onChange={(e) => handleTestimonialChange(index, e)} className="mt-1 block w-full input-style" />
                        </div>
                         <div>
                           <label className="block text-sm font-medium">Relation</label>
                           <input type="text" name="relation" value={testimonial.relation} onChange={(e) => handleTestimonialChange(index, e)} className="mt-1 block w-full input-style" />
                        </div>
                      </div>
                  </div>
              ))}
           </fieldset>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button onClick={closeDashboard} className="px-6 py-2 bg-secondary-200 dark:bg-secondary-700 rounded-md hover:bg-secondary-300 dark:hover:bg-secondary-600">Cancel</button>
          <button onClick={handleSave} className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-600">Save Changes</button>
        </div>
      </div>
      <style>{`
        .input-style {
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
        }
        .dark .input-style {
          background-color: #1f2937;
          border-color: #4b5563;
          color: #d1d5db;
        }
        .input-style:focus {
          outline: none;
          --tw-ring-color: #34d399;
          box-shadow: 0 0 0 2px var(--tw-ring-color);
        }
      `}</style>
    </div>
  );
}