
import React, { useState, useEffect } from 'react';
import { useTranslations } from '../../hooks/useTranslations';

export default function CreatorBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    // Using a short timeout to make the animation more noticeable after page load
    const timer = setTimeout(() => {
        const isDismissed = sessionStorage.getItem('creatorBannerDismissed');
        if (!isDismissed) {
            setIsVisible(true);
        }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('creatorBannerDismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-primary-50 dark:bg-secondary-800 p-4 text-center overflow-hidden animate-slide-down shadow-md">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 dark:opacity-5" aria-hidden="true"></div>
      <div className="relative z-10 container mx-auto flex items-center justify-center sm:justify-between space-x-4 rtl:space-x-reverse">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <img src="https://i.pravatar.cc/150?u=a-passionate-developer" alt={t('creatorName')} className="w-12 h-12 rounded-full border-2 border-primary/50 shadow-lg hidden sm:block object-cover"/>
          <div>
            <p className="text-sm text-secondary-600 dark:text-secondary-300">
              {t('createdBy')}{' '}
              <span className="font-bold text-secondary-800 dark:text-white">{t('SADAOUI SAID')}</span>
            </p>
            <p className="text-xs text-secondary-500 dark:text-secondary-400">{t('creatorBio')}</p>
          </div>
        </div>
        <button 
          onClick={handleDismiss} 
          className="absolute top-1/2 -translate-y-1/2 right-4 sm:relative sm:right-auto sm:top-auto sm:translate-y-0 p-1 rounded-full text-secondary-500 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          aria-label="Dismiss"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
       <style>{`
        @keyframes slideDown {
          from { 
            transform: translateY(-100%); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        .animate-slide-down {
          animation: slideDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(52, 211, 153, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(52, 211, 153, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .bg-grid-pattern {
           background-image: linear-gradient(rgba(209, 250, 229, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(209, 250, 229, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
}
