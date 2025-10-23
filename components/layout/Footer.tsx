import React from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../icons/Icons';

interface FooterProps {
    openDashboard: () => void;
}

export default function Footer({ openDashboard }: FooterProps) {
  const { schoolData } = useData();
  const t = useTranslations();
  
  return (
    <footer className="bg-secondary-100 dark:bg-secondary-800 relative z-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <Logo url={schoolData.logoUrl} className="h-10 w-10 text-primary" />
                <span className="text-xl font-bold text-secondary-800 dark:text-white">{schoolData.schoolName}</span>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400">{t('slogan')}</p>
             <div className="mt-6">
                <h3 className="font-bold text-secondary-800 dark:text-white mb-3">{t('followUs')}</h3>
                <div className="flex space-x-4">
                    <a href={schoolData.contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary"><FacebookIcon className="w-6 h-6"/></a>
                    <a href={schoolData.contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary"><TwitterIcon className="w-6 h-6"/></a>
                    <a href={schoolData.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary"><InstagramIcon className="w-6 h-6"/></a>
                    <a href={schoolData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary"><LinkedInIcon className="w-6 h-6"/></a>
                </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-secondary-800 dark:text-white mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary dark:hover:text-primary transition-colors">{t('about')}</a></li>
              <li><a href="#school-life" className="hover:text-primary dark:hover:text-primary transition-colors">{t('schoolLife')}</a></li>
              <li><a href="#programs" className="hover:text-primary dark:hover:text-primary transition-colors">{t('programs')}</a></li>
              <li><a href="#testimonials" className="hover:text-primary dark:hover:text-primary transition-colors">{t('testimonials')}</a></li>
              <li><a href="#faq" className="hover:text-primary dark:hover:text-primary transition-colors">{t('faq')}</a></li>
              <li><a href="#contact" className="hover:text-primary dark:hover:text-primary transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-secondary-800 dark:text-white mb-4">Notre Emplacement</h3>
             <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-primary/20">
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
        </div>

        <div className="mt-12 border-t border-secondary-200 dark:border-secondary-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-500 dark:text-secondary-400 text-sm">© {new Date().getFullYear()} {schoolData.schoolName}. Tous droits réservés.</p>
          <button onClick={openDashboard} className="mt-4 sm:mt-0 text-xs text-secondary-500 hover:text-primary dark:hover:text-primary transition-colors">
            {t('adminPanel')}
          </button>
        </div>
      </div>
    </footer>
  );
}