
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">Hi, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        RATHEESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">SEKAR</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-400 mb-8 h-8">
                        <Typewriter
                            words={['Web Developer', 'Cyber Security Enthusiast', 'Problem Solver', 'Full-Stack Learner']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>

                    <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Building secure, high-performance web solutions blending creativity, precision, and protection.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            className="px-8 py-3 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/10 transition-all cursor-pointer flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex gap-8 border-t border-gray-800 pt-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white">20+</h3>
                            <p className="text-gray-500 text-sm">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">5+</h3>
                            <p className="text-gray-500 text-sm">Certifications</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">1000+</h3>
                            <p className="text-gray-500 text-sm">Hours Learning</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-2xl opacity-20"></div>
                        <div className="relative w-full h-full rounded-2xl glass overflow-hidden border border-white/10 flex items-center justify-center">
                            {/* Placeholder for Avatar if no image provided, or use a generic one */}
                            <div className="text-9xl text-white/10 font-bold">RS</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
