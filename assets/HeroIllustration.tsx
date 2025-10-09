
import React from 'react';

export const HeroIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Background elements */}
    <rect x="0" y="0" width="800" height="500" fill="transparent" />
    
    {/* Desk */}
    <rect x="100" y="380" width="350" height="20" rx="5" fill="#4B5563" />
    <rect x="120" y="400" width="10" height="80" fill="#4B5563" />
    <rect x="420" y="400" width="10" height="80" fill="#4B5563" />
    <rect x="125" y="470" width="300" height="5" fill="#6B7280" />

    {/* Chair */}
    <path d="M 230 480 L 230 400" stroke="#6B7280" strokeWidth="10" />
    <rect x="205" y="400" width="50" height="10" rx="5" fill="#6B7280" />
    <rect x="180" y="310" width="100" height="100" rx="10" fill="#1F2937" />
    <path d="M 180 340 C 170 360, 170 380, 180 400" stroke="#1F2937" strokeWidth="15" fill="none" />
    
    {/* Student */}
    <g transform="translate(0, -10)">
        <rect x="200" y="270" width="120" height="120" rx="20" fill="#6EE7B7" /> {/* Torso */}
        <circle cx="260" cy="220" r="40" fill="#FDE68A" /> {/* Head */}
        <path d="M 240 210 Q 245 200 250 210 M 270 210 Q 275 200 280 210" stroke="#374151" strokeWidth="3" fill="none" /> {/* Eyebrows */}
        <circle cx="245" cy="220" r="3" fill="#374151" /> {/* Eye */}
        <circle cx="275" cy="220" r="3" fill="#374151" /> {/* Eye */}
        <path d="M 255 235 Q 260 245 265 235" stroke="#374151" strokeWidth="2" fill="none" /> {/* Mouth */}
        <path d="M 220 180 C 240 170, 280 170, 300 185 C 280 200, 240 200, 225 220 Z" fill="#111827" /> {/* Hair */}
        <path d="M 290 310 L 330 310 C 340 310, 350 320, 350 330 L 350 360" stroke="#6EE7B7" strokeWidth="25" fill="none" strokeLinecap="round" /> {/* Right Arm */}
        <path d="M 205 310 L 160 360 C 150 370, 150 380, 160 390 L 180 370" stroke="#6EE7B7" strokeWidth="25" fill="none" strokeLinecap="round" /> {/* Left Arm */}
        <path d="M 160 280 L 150 260 C 145 250, 160 240, 165 245 Z" fill="#FDE68A" stroke="#374151" strokeWidth="2" /> {/* Raised hand */}
    </g>

    {/* Laptop */}
    <path d="M 330 380 L 335 320 L 415 320 L 420 380 Z" fill="#E5E7EB" />
    <rect x="325" y="380" width="100" height="5" rx="2" fill="#D1D5DB" />
    
    {/* Question mark bubble */}
    <circle cx="150" cy="240" r="25" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2"/>
    <text x="145" y="248" fontFamily="Arial, sans-serif" fontSize="20" fill="#34D399" fontWeight="bold">?</text>
    <circle cx="178" cy="260" r="5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2"/>
    <circle cx="190" cy="270" r="3" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2"/>

    {/* Whiteboard */}
    <rect x="500" y="150" width="10" height="320" fill="#4B5563" />
    <rect x="680" y="150" width="10" height="320" fill="#4B5563" />
    <rect x="490" y="120" width="210" height="300" fill="white" stroke="#6B7280" strokeWidth="5" rx="10"/>
    <rect x="510" y="180" width="150" height="8" fill="#E5E7EB" />
    <rect x="510" y="220" width="120" height="8" fill="#E5E7EB" />
    <rect x="510" y="232" width="80" height="8" fill="#1F2937" />
    <rect x="510" y="280" width="160" height="8" fill="#E5E7EB" />

    {/* Teacher */}
    <g transform="translate(0, 10)">
        <path d="M 600 470 C 580 350, 680 350, 660 470 Z" fill="#1F2937" /> {/* Trousers */}
        <rect x="580" y="240" width="100" height="130" rx="20" fill="#6EE7B7" /> {/* Torso */}
        <circle cx="630" cy="200" r="35" fill="#FDE68A" /> {/* Head */}
        <path d="M 600 165 C 620 155, 660 160, 670 180 C 650 200, 610 200, 600 210 C 610 190, 590 180, 600 165 Z" fill="#111827" /> {/* Hair */}
        <circle cx="620" cy="200" r="2" fill="#374151" /> {/* Eye */}
        <circle cx="640" cy="200" r="2" fill="#374151" /> {/* Eye */}
        <path d="M 625 215 Q 630 220 635 215" stroke="#374151" strokeWidth="2" fill="none" /> {/* Mouth */}
        
        {/* Teacher's Arms */}
        <path d="M 585 270 C 560 290, 560 320, 580 330" stroke="#6EE7B7" strokeWidth="20" fill="none" strokeLinecap="round" />
        <path d="M 675 270 C 690 290, 620 280, 600 235" stroke="#6EE7B7" strokeWidth="20" fill="none" strokeLinecap="round" />
        <rect x="590" y="230" width="10" height="4" fill="#374151" />
    </g>

    {/* Speech Bubbles */}
    <circle cx="720" cy="180" r="20" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2"/>
    <circle cx="710" cy="183" r="1.5" fill="#6B7280"/>
    <circle cx="720" cy="183" r="1.5" fill="#6B7280"/>
    <circle cx="730" cy="183" r="1.5" fill="#6B7280"/>

    {/* Background Decorations */}
    <rect x="710" y="350" width="80" height="150" fill="transparent" />
    <path d="M 750 480 L 750 380" stroke="#9CA3AF" strokeWidth="2" />
    <path d="M 750 380 C 730 370, 770 370, 750 380" fill="none" stroke="#9CA3AF" strokeWidth="2" />
    <path d="M 750 380 C 730 390, 720 360, 730 350" stroke="#9CA3AF" strokeWidth="2" fill="none" />
    <path d="M 750 380 C 770 390, 780 360, 770 350" stroke="#9CA3AF" strokeWidth="2" fill="none" />
    
    <rect x="300" y="80" width="150" height="5" fill="#E5E7EB" />
    <rect x="320" y="90" width="100" height="5" fill="#D1D5DB" />
    <rect x="330" y="100" width="80" height="5" fill="#9CA3AF" />
</svg>
);
