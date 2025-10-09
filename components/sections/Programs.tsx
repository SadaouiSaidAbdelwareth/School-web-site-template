import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CrayonIcon, CompassIcon, FlaskIcon, CheckCircleIcon } from '../icons/Icons';

type ProgramKey = 'primary' | 'college' | 'lycee';

export default function Programs() {
  const { schoolData } = useData();
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<ProgramKey>('primary');
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const programs = [
    { id: 'primary', title: t('primary'), data: schoolData.programs.primary, icon: <CrayonIcon className="w-6 h-6 mr-2" /> },
    { id: 'college', title: t('college'), data: schoolData.programs.college, icon: <CompassIcon className="w-6 h-6 mr-2" /> },
    { id: 'lycee', title: t('lycee'), data: schoolData.programs.lycee, icon: <FlaskIcon className="w-6 h-6 mr-2" /> },
  ];

  const activeProgram = programs.find(p => p.id === activeTab)?.data;

  return (
    <section id="programs" className="py-20 lg:py-28 bg-secondary-50 dark:bg-secondary-950">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className={`max-w-4xl mx-auto text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('ourPrograms')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Un cursus complet du primaire au baccalauréat, conçu pour l'épanouissement de chaque élève.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{transitionDelay: '150ms'}}>
            <div className="flex justify-center border-b border-secondary-200 dark:border-secondary-700 mb-8">
                {programs.map(program => (
                    <button 
                        key={program.id} 
                        onClick={() => setActiveTab(program.id as ProgramKey)}
                        className={`flex items-center px-4 py-3 md:px-8 text-lg font-semibold transition-colors duration-300 focus:outline-none ${activeTab === program.id ? 'border-b-2 border-primary text-primary' : 'text-secondary-500 hover:text-primary'}`}
                        aria-selected={activeTab === program.id}
                        role="tab"
                    >
                        {program.icon}
                        {program.title}
                    </button>
                ))}
            </div>
            
            <div key={activeTab} className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg overflow-hidden animate-fade-in">
                 {activeProgram && (
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 lg:p-12">
                            <h3 className="text-2xl font-bold text-secondary-800 dark:text-white mb-4">{activeProgram.title}</h3>
                            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">{activeProgram.text}</p>
                            <ul className="space-y-3">
                                {activeProgram.details.map((detail, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                        <span className="text-secondary-600 dark:text-secondary-300">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-64 md:h-full">
                           <img src={activeProgram.imageUrl} alt={activeProgram.title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}