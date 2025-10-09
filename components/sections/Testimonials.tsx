import React, { useState, useEffect, useCallback } from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { QuoteIcon } from '../icons/Icons';

export default function Testimonials() {
  const { schoolData } = useData();
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % schoolData.testimonials.length);
  }, [schoolData.testimonials.length]);

  useEffect(() => {
    if (schoolData.testimonials.length > 1) {
      const timer = setInterval(nextTestimonial, 5000);
      return () => clearInterval(timer);
    }
  }, [nextTestimonial, schoolData.testimonials.length]);
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + schoolData.testimonials.length) % schoolData.testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  }

  if (!schoolData.testimonials || schoolData.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className={`max-w-4xl mx-auto text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('whatParentsSay')}
          </h2>
        </div>

        <div className={`relative max-w-3xl mx-auto animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {schoolData.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center px-4 flex flex-col items-center">
                  <img src={testimonial.photoUrl} alt={testimonial.author} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20" />
                  <QuoteIcon className="w-10 h-10 text-primary/50 mb-4" />
                  <p className="text-xl italic text-secondary-600 dark:text-secondary-300 mb-6 max-w-2xl">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-bold text-secondary-800 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-secondary-500">{testimonial.relation}</div>
                </div>
              ))}
            </div>
          </div>
          
          {schoolData.testimonials.length > 1 && (
            <>
              <button onClick={prevTestimonial} aria-label="Previous testimonial" className="absolute top-1/2 -translate-y-1/2 start-0 transform -translate-x-4 md:-translate-x-8 p-2 rounded-full bg-white dark:bg-secondary-800 shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600 dark:text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextTestimonial} aria-label="Next testimonial" className="absolute top-1/2 -translate-y-1/2 end-0 transform translate-x-4 md:translate-x-8 p-2 rounded-full bg-white dark:bg-secondary-800 shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600 dark:text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

           <div className="flex justify-center space-x-2 mt-8">
              {schoolData.testimonials.map((_, index) => (
                  <button key={index} onClick={() => goToTestimonial(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-secondary-300 dark:bg-secondary-600 hover:bg-primary/50'}`} aria-label={`Go to testimonial ${index + 1}`}></button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}