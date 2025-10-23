import React from 'react';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../icons/Icons';

interface FooterProps {
    openDashboard: () => void;
}

export default function Footer({ openDashboard }: FooterProps) {
  const { schoolData } = useData();
  const t = useTranslations();
  const scrollTo = useSmoothScroll();
  
  return (
    <footer className="bg-secondary-100 dark:bg-secondary-800 relative z-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <Logo url={schoolData.logoUrl} className="h-10 w-10 text-primary" />
                <span className="text-xl font-bold text-secondary-800 dark:text-white">{schoolData.schoolName}</span>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400">{schoolData.slogan}</p>
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
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-400">
              <li><a href="#about" onClick={scrollTo} className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('about')}</a></li>
              <li><a href="#school-life" onClick={scrollTo} className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('schoolLife')}</a></li>
              <li><a href="#programs" onClick={scrollTo} className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('programs')}</a></li>
              <li><a href="#faq" onClick={scrollTo} className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('faq')}</a></li>
              <li><a href="#contact" onClick={scrollTo} className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('contact')}</a></li>
              <li><a href="#map" onClick={scrollTo} className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('ourLocation')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-secondary-800 dark:text-white mb-4">{t('contactUs')}</h3>
            <address className="not-italic space-y-3 text-secondary-600 dark:text-secondary-400">
                <p>{schoolData.contact.address}</p>
                <p><a href={`tel:${schoolData.contact.phone.replace(/\s/g, '')}`} className="hover:text-primary">{schoolData.contact.phone}</a></p>
                <p><a href={`mailto:${schoolData.contact.email}`} className="hover:text-primary">{schoolData.contact.email}</a></p>
            </address>
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