import { motion } from 'framer-motion';
import { Code2, Palette, Braces, Atom, Server, Database, FileCode, GitBranch, Github, Terminal, Shield, Bug } from 'lucide-react';

const skills = [
    { name: "HTML", icon: Code2, color: "from-orange-500 via-red-400 to-red-500" },
    { name: "CSS", icon: Palette, color: "from-accent via-ocean to-water-dark" },
    { name: "JavaScript", icon: Braces, color: "from-yellow-400 via-yellow-500 to-yellow-600" },
    { name: "React.js", icon: Atom, color: "from-accent via-water-light to-ocean" },
    { name: "Node.js", icon: Server, color: "from-green-500 via-emerald-500 to-emerald-600" },
    { name: "MongoDB", icon: Database, color: "from-green-600 via-green-500 to-emerald-600" },
    { name: "C Programming", icon: FileCode, color: "from-ocean via-water-dark to-indigo-600" },
    { name: "Git", icon: GitBranch, color: "from-orange-600 via-orange-500 to-red-600" },
    { name: "GitHub", icon: Github, color: "from-gray-600 via-gray-700 to-gray-800" },
    { name: "Linux", icon: Terminal, color: "from-yellow-500 via-orange-400 to-orange-500" },
    { name: "Cybersecurity", icon: Shield, color: "from-accent via-water-light to-ocean" },
    { name: "Ethical Hacking", icon: Bug, color: "from-red-500 via-rose-500 to-rose-600" }
];

const TechStack = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack & Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent via-ocean to-water-light mx-auto rounded-full shadow-water"></div>
            </div>

            <div className="flex overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-6 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...skills, ...skills].map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -8 }}
                                className="group relative px-6 py-4 ios-card cursor-default whitespace-nowrap min-w-[180px]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-ios group-hover:shadow-ios-lg transition-all duration-300 group-hover:scale-110`}>
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-200 group-hover:text-accent transition-colors">
                                        {skill.name}
                                    </span>
                                </div>

                                {/* iOS Water glow effect on hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-accent/10 via-ocean/10 to-water-light/10 pointer-events-none"></div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
