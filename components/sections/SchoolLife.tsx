import React from 'react';
import { useData } from '../../context/DataContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useTranslations } from '../../hooks/useTranslations';

export default function SchoolLife() {
  const { schoolData } = useData();
  const t = useTranslations();
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="school-life" className="py-20 lg:py-28 bg-secondary-50 dark:bg-secondary-950">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} order-2 lg:order-1`}>
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={schoolData.schoolLife.imageUrl}
                alt={t('schoolLife')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} order-1 lg:order-2`} style={{ transitionDelay: '150ms' }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {schoolData.schoolLife.title}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed whitespace-pre-line">
              {schoolData.schoolLife.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
