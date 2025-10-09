import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  url?: string;
}

export const Logo: React.FC<LogoProps> = ({ url, className, ...props }) => {
  if (url) {
    return <img src={url} alt="School Logo" className={className} style={{ objectFit: 'contain' }} />;
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v15H6.5A2.5 2.5 0 014 14.5v-10A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7.5c1 .5 2.5 1 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10.5c1 .5 2.5 1 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
