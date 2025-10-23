
import React from 'react';
import { useData } from '../../context/DataContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useTranslations } from '../../hooks/useTranslations';

export default function Map() {
  const { schoolData } = useData();
  const t = useTranslations();
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="map" className="py-20 lg:py-28 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className={`max-w-4xl mx-auto text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('mapTitle')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            {t('mapSubtitle')}
          </p>
        </div>
        <div 
          className={`h-[500px] max-h-[70vh] rounded-xl overflow-hidden border-4 border-primary/20 shadow-2xl animate-on-scroll ${isVisible ? 'is-visible' : ''}`} 
          style={{ transitionDelay: '150ms' }}
        >
          <iframe
            src={schoolData.contact.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[50%] hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
