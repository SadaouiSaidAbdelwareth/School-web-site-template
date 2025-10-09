import React from 'react';

const BackgroundAnimations: React.FC = () => {
    // Increased number of shapes for a more dynamic feel
    const shapes = Array.from({ length: 20 });

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
            <ul className="circles">
                {shapes.map((_, i) => {
                    // Wider range of sizes for more visual variety
                    const size = random(20, 150);
                    const position = random(5, 95);
                    const delay = random(0, 20); // Increased delay range for more randomness
                    // Wider range of duration for slower, more ambient movement
                    const duration = random(20, 50);
                    const isSquare = Math.random() > 0.5;

                    return (
                        <li
                            key={i}
                            // Increased opacity and added a blur effect for better visibility and aesthetics
                            className={`absolute block list-none bg-primary/15 dark:bg-primary/10 will-change-transform blur-sm ${isSquare ? 'rounded-xl' : 'rounded-full'}`}
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${position}%`,
                                bottom: `-${size}px`, // Start off-screen
                                animationDelay: `${delay}s`,
                                animationDuration: `${duration}s`,
                                animationName: 'animate',
                                animationTimingFunction: 'linear',
                                animationIterationCount: 'infinite'
                            }}
                        />
                    );
                })}
            </ul>
            <style>{`
                @keyframes animate {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default BackgroundAnimations;
