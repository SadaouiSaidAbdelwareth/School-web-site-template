import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PlusIcon, MinusIcon } from '../icons/Icons';

const FaqItem: React.FC<{ faq: { question: string; answer: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-secondary-200 dark:border-secondary-700 py-6">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-start focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-secondary-800 dark:text-white">
                    {faq.question}
                </h3>
                <span className="flex-shrink-0 ml-4">
                    {isOpen ? <MinusIcon className="w-6 h-6 text-primary" /> : <PlusIcon className="w-6 h-6 text-secondary-500" />}
                </span>
            </button>
            <div
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
                <p className="pt-4 text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {faq.answer}
                </p>
            </div>
            <style>{`
                .transition-max-height {
                    transition: max-height 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default function FAQ() {
    const { schoolData } = useData();
    const t = useTranslations();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 lg:py-28 bg-secondary-50 dark:bg-secondary-950">
            <div className="container mx-auto px-6" ref={containerRef}>
                <div className={`max-w-4xl mx-auto text-center mb-16 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                        {t('faqTitle')}
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-300">
                        {t('faqSubtitle')}
                    </p>
                </div>

                <div className={`max-w-3xl mx-auto animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
                    {schoolData.faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}