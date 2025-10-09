import React from 'react';
import { useData } from '../../context/DataContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { GraduationCapIcon, GrowthIcon, GlobeIcon } from '../icons/Icons';

export default function About() {
  const { schoolData } = useData();
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      title: "Excellence Académique",
      description: "Des programmes rigoureux pour un succès garanti.",
      icon: <GraduationCapIcon className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Développement Personnel",
      description: "Forger le caractère et la confiance en soi.",
      icon: <GrowthIcon className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Citoyenneté Mondiale",
      description: "Ouvrir les esprits sur le monde de demain.",
      icon: <GlobeIcon className="w-12 h-12 text-primary mb-4" />
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className={`max-w-4xl mx-auto text-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
            {schoolData.about.title}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
            {schoolData.about.text}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          {features.map((feature, index) => (
            <div key={feature.title} className={`p-8 bg-secondary-50 dark:bg-secondary-800 rounded-xl flex flex-col items-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
              {feature.icon}
              <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}