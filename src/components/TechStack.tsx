
import { motion } from 'framer-motion';

const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "C Programming", "Git", "GitHub", "Linux", "Cybersecurity", "Ethical Hacking"
];

const TechStack = () => {
    return (
        <section id="skills" className="py-20 bg-black/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack & Skills</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="flex overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-8 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="px-8 py-4 glass rounded-full text-gray-300 border border-white/5 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all cursor-default text-xl font-medium whitespace-nowrap"
                        >
                            {skill}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
