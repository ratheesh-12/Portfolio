
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import ksrPhoto from '../Resource/Achievements/KSR Photo.jpeg';
import nandha24 from '../Resource/Achievements/Nandha 24.jpeg';
import nandha25 from '../Resource/Achievements/Nandha 25.jpeg';
import nandhaCoding from '../Resource/Achievements/Nandha Coding.jpeg';
import skcet from '../Resource/Achievements/SKCET.jpeg';

const achievements = [
    { title: "Photograpy 1st Prize at KSR", image: ksrPhoto },
    { title: "Best Co-Curricular Activity 2024", image: nandha24 },
    { title: "Best Co-Curricular Activity 2025", image: nandha25 },
    { title: "1st Prize in Coding Competition", image: nandhaCoding },
    { title: "2nd Prize in Paper Presentation at SKCET", image: skcet },
];

const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % achievements.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);



    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-ocean to-water-light">Achievements & Milestones</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Snapshots of my journey through learning and innovation.</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent via-ocean to-water-light mx-auto rounded-full shadow-water mt-4"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-ios-lg border-2 border-accent/30 ios-card">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {/* Blurred Background for Fill Effect */}
                                <div className="absolute inset-0">
                                    <img
                                        src={achievements[currentIndex].image}
                                        alt="background"
                                        className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
                                    />
                                </div>

                                {/* Main Image - No Crop */}
                                <img
                                    src={achievements[currentIndex].image}
                                    alt={achievements[currentIndex].title}
                                    className="relative w-full h-full object-contain z-10"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Achievement Title Below Image */}
                    <div className="text-center mt-6 mb-4">
                        <AnimatePresence mode='wait'>
                            <motion.h3
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-base md:text-lg font-bold text-white"
                            >
                                {achievements[currentIndex].title}
                            </motion.h3>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {achievements.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`text-2xl leading-none transition-all duration-300 ${index === currentIndex
                                        ? 'text-primary drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]'
                                        : 'text-gray-600 hover:text-gray-500'
                                    }`}
                            >
                                •
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
