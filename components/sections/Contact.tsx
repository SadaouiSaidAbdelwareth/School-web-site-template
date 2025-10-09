import React from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Contact() {
  const { schoolData } = useData();
  const t = useTranslations();
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary-50 dark:bg-secondary-950">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className={`max-w-4xl mx-auto text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('getInTouch')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Nous sommes là pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`bg-white dark:bg-secondary-900 p-8 rounded-xl shadow-lg animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <h3 className="text-2xl font-bold text-secondary-800 dark:text-white mb-6">{t('contactUs')}</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-secondary-700 dark:text-secondary-300 mb-2">{t('name')}</label>
                <input type="text" id="name" className="w-full px-4 py-2 bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-secondary-700 dark:text-secondary-300 mb-2">{t('email')}</label>
                <input type="email" id="email" className="w-full px-4 py-2 bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-secondary-700 dark:text-secondary-300 mb-2">{t('message')}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                {t('sendMessage')}
              </button>
            </form>
          </div>
          <div className={`space-y-6 animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">Nos Coordonnées</h3>
            <div>
              <h4 className="font-semibold text-primary">Adresse</h4>
              <p>{schoolData.contact.address}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Téléphone</h4>
              <p>{schoolData.contact.phone}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Email</h4>
              <p>{schoolData.contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}