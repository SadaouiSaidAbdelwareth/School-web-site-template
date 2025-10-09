import React from 'react';

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 16a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const WorldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12v-.008zm0-2.25h.008v.008H12v-.008zM9.75 15.75l-1.31-1.31M12 10.5l-1.31-1.31m0 0l-1.875 1.875M10.69 9.19l-1.875 1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.966 8.966 0 006.852-3.147.937.937 0 011.336 1.336 10.5 10.5 0 01-16.372 0 .937.937 0 011.336-1.336A8.966 8.966 0 0012 21z" />
    </svg>
);

export const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 14.75C6 11.022 8.477 8 12.25 8h.5v3.75h-.5C10.59 11.75 10 12.899 10 14.75v1.5H6v-1.5zm13 0C19 11.022 21.477 8 25.25 8h.5v3.75h-.5C23.59 11.75 23 12.899 23 14.75v1.5h-4v-1.5z" />
    </svg>
);

export const GraduationCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.376 3.376a1.125 1.125 0 000 1.591l9.562 9.562a1.125 1.125 0 001.591 0l3.376-3.376m-1.414-1.414l-1.59-1.59a1.125 1.125 0 00-1.591 0L12 10.5l-1.59-1.59a1.125 1.125 0 00-1.591 0l-1.59 1.59m-1.414-1.414l-1.06-1.061a1.125 1.125 0 010-1.591l7.424-7.425a1.125 1.125 0 011.591 0l7.424 7.425a1.125 1.125 0 010 1.591l-1.06 1.061m-1.414-1.414l-1.59 1.59a1.125 1.125 0 01-1.59 0l-1.59-1.59a1.125 1.125 0 010-1.59l1.59-1.59a1.125 1.125 0 011.59 0l1.59 1.59a1.125 1.125 0 010 1.59l-1.59 1.59m-1.414-1.414" />
  </svg>
);

export const GrowthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94l-3.94 3.94" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.243-4.257-9.5-9.5-9.5S.5 6.757.5 12s4.257 9.5 9.5 9.5 9.5-4.257 9.5-9.5z" />
  </svg>
);

export const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.75 9h16.5M3.75 15h16.5M9.75 3.75c.496 2.053 1.34 3.75 2.25 5.25m0 0c.91-1.5 1.754-3.197 2.25-5.25m-4.5 5.25c-1.333 1.333-3.045 2.25-5.25 2.25" />
  </svg>
);

export const CrayonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

export const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l4 4m-4-4l-4 4m4-4V4m0 8l-4-4m4 4l4-4" />
  </svg>
);

export const FlaskIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.07c0 .562.45 1.012 1.012 1.012h2.476c.562 0 1.012-.45 1.012-1.012V3.104M14.25 3.104L12 1.75 9.75 3.104m4.5 0v3.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3.104M9.75 3.104H7.5c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h2.25M9.75 12.75v6.525A2.25 2.25 0 0012 21.525a2.25 2.25 0 002.25-2.25V12.75" />
  </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04zm2.63 8.32h-1.6v6.62h-2.1v-6.62H9.86V9.22h1.07V8.3c0-1.1.53-2.78 2.78-2.78l1.4.02v1.9h-1.04c-.1 0-.25.04-.25.27v1.51h1.65l-.23 2.1z"></path></svg>
);

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.1 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z"></path></svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m-1.39 9.94v-8.37H8.27v8.37H5.49z"></path></svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);