
import React from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { HeroIllustration } from '../../assets/HeroIllustration';

interface HeroProps {
    openRegistration: () => void;
}

export default function Hero({ openRegistration }: HeroProps) {
  const { schoolData } = useData();
  const t = useTranslations();

  return (
    <section id="home" className="relative bg-secondary-50 dark:bg-secondary-900 overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 dark:text-white leading-tight">
              {schoolData.schoolName}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl mx-auto">
              {schoolData.slogan}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={openRegistration}
                className="bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
              >
                {t('registerNow')}
              </button>
              <a href="#about" className="bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg border border-secondary-200 dark:border-secondary-700">
                {t('about')}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-64 lg:h-auto">
            <HeroIllustration 
              aria-label="An animated illustration showing a classroom setting with a student and teacher." 
              className="w-full max-w-md lg:max-w-lg h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}