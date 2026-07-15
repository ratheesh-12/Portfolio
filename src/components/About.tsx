
import { motion } from 'framer-motion';
import { Code, Shield } from 'lucide-react';
import aboutImage from '../Resource/Hero Pic.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 border-2 border-accent/40 rounded-full animate-spin-slow shadow-water"></div>
                        <div className="absolute inset-4 border-2 border-ocean/40 rounded-full animate-spin-slow shadow-water" style={{ animationDirection: 'reverse' }}></div>
                        <div className="absolute -inset-1 bg-gradient-to-tr from-accent/20 via-ocean/20 to-water-light/20 rounded-full blur-xl"></div>
                        <div className="absolute inset-0 rounded-full overflow-hidden ios-card flex items-center justify-center">
                            <img
                                src={aboutImage}
                                alt="Ratheesh Sekar About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-ocean to-water-light">Who I Am</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        I’m a passionate developer pursuing my Bachelor of Engineering in Cyber Security at Nandha Engineering College.
                        My mission is to create impactful web applications that are fast, intuitive, and secure.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        With a strong base in JAVA programming, I love combining logic and design to build experiences that protect and perform.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-5 ios-card group cursor-default">
                            <Code className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
                            <h3 className="text-white font-bold mb-1">Web Dev</h3>
                            <p className="text-gray-400 text-sm">Modern & Responsive</p>
                        </div>
                        <div className="p-5 ios-card group cursor-default">
                            <Shield className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
                            <h3 className="text-white font-bold mb-1">Security</h3>
                            <p className="text-gray-400 text-sm">Secure by Design</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {['#CyberSecurity', '#WebDevelopment', '#ReactJS', '#EthicalHacking'].map((tag) => (
                            <span key={tag} className="text-accent text-sm font-medium bg-gradient-to-r from-accent/10 to-ocean/10 px-4 py-2 rounded-full border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
