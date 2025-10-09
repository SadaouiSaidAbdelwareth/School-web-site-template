import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage, Language } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { useTranslations } from '../../hooks/useTranslations';
import { SunIcon, MoonIcon, WorldIcon } from '../icons/Icons';
import { Logo } from '../ui/Logo';

interface HeaderProps {
    openRegistration: () => void;
}

export default function Header({ openRegistration }: HeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProgramsOpen, setProgramsOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { schoolData } = useData();
  const t = useTranslations();

  const navLinks = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { 
      label: t('programs'), 
      subLinks: [
        { href: '#programs-primary', label: t('primary') },
        { href: '#programs-college', label: t('college') },
        { href: '#programs-lycee', label: t('lycee') },
      ]
    },
    { href: '#testimonials', label: t('testimonials') },
    { href: '#contact', label: t('contact') },
  ];

  const languages: { code: Language, name: string }[] = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <header className="bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 rtl:space-x-reverse">
          <Logo url={schoolData.logoUrl} className="h-10 w-10 text-primary" />
          <span className="text-xl font-bold text-secondary-800 dark:text-white">{schoolData.schoolName}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
                link.subLinks ? (
                    <div key={link.label} className="relative" onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)}>
                        <button className="font-medium text-secondary-600 dark:text-secondary-300 hover:text-primary dark:hover:text-primary transition-colors">
                            {link.label}
                        </button>
                        {isProgramsOpen && (
                            <div className="absolute top-full start-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-md shadow-lg py-1">
                                {link.subLinks.map(subLink => (
                                    <a key={subLink.label} href={subLink.href} className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700">{subLink.label}</a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <a key={link.label} href={link.href} className="font-medium text-secondary-600 dark:text-secondary-300 hover:text-primary dark:hover:text-primary transition-colors">{link.label}</a>
                )
            ))}
        </div>
        
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="relative">
             <button onClick={() => setLangOpen(!isLangOpen)} className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800">
                <WorldIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
            </button>
            {isLangOpen && (
                <div className="absolute top-full end-0 mt-2 w-36 bg-white dark:bg-secondary-800 rounded-md shadow-lg py-1">
                    {languages.map(lang => (
                        <button key={lang.code} onClick={() => { setLanguage(lang.code); setLangOpen(false); }} className={`w-full text-start px-4 py-2 text-sm ${language === lang.code ? 'font-bold text-primary' : 'text-secondary-700 dark:text-secondary-200'} hover:bg-secondary-100 dark:hover:bg-secondary-700`}>
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
          </div>
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800">
            {theme === 'light' ? <MoonIcon className="w-6 h-6 text-secondary-600" /> : <SunIcon className="w-6 h-6 text-secondary-300" />}
          </button>
          
          <button onClick={openRegistration} className="hidden sm:inline-block bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
            {t('register')}
          </button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-secondary-600 dark:text-secondary-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 pb-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
                link.subLinks ? (
                    <div key={link.label}>
                        <span className="font-medium text-secondary-600 dark:text-secondary-300">{link.label}</span>
                        <div className="flex flex-col ms-4 mt-2 space-y-2">
                           {link.subLinks.map(subLink => (
                                <a key={subLink.label} href={subLink.href} className="text-secondary-500 dark:text-secondary-400 hover:text-primary dark:hover:text-primary" onClick={() => setMenuOpen(false)}>{subLink.label}</a>
                           ))}
                        </div>
                    </div>
                ) : (
                    <a key={link.label} href={link.href} className="font-medium text-secondary-600 dark:text-secondary-300 hover:text-primary dark:hover:text-primary" onClick={() => setMenuOpen(false)}>{link.label}</a>
                )
            ))}
            <button onClick={() => { openRegistration(); setMenuOpen(false); }} className="sm:hidden w-full bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                {t('register')}
            </button>
        </div>
      )}
    </header>
  );
}