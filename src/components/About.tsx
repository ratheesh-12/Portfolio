
import { motion } from 'framer-motion';
import { Code, Shield } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-4 border-2 border-blue-500/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                        <div className="absolute inset-0 rounded-full overflow-hidden glass flex items-center justify-center">
                            {/* Placeholder image */}
                            <div className="text-8xl text-white/10">RS</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who I Am</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        I’m a passionate developer pursuing my Bachelor of Engineering in Cyber Security at Nandha Engineering College.
                        My mission is to create impactful web applications that are fast, intuitive, and secure.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        With a strong base in C programming, I love combining logic and design to build experiences that protect and perform.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 glass rounded-xl border border-white/5">
                            <Code className="text-primary mb-2" size={32} />
                            <h3 className="text-white font-bold">Web Dev</h3>
                            <p className="text-gray-500 text-sm">Modern & Responsive</p>
                        </div>
                        <div className="p-4 glass rounded-xl border border-white/5">
                            <Shield className="text-primary mb-2" size={32} />
                            <h3 className="text-white font-bold">Security</h3>
                            <p className="text-gray-500 text-sm">Secure by Design</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {['#CyberSecurity', '#WebDevelopment', '#ReactJS', '#EthicalHacking'].map((tag) => (
                            <span key={tag} className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
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
