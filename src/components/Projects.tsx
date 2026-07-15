
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Hostel Management System",
        description: "Full-stack management app with admin control for managing hostel operations efficiently.",
        tech: ["Java", "PostgreSQL"],
        github: "https://github.com/ratheesh-12",
        live: "#"
    },
    {
        title: "Cyber Attack Simulator",
        description: "Demonstrates basic vulnerabilities and penetration testing logic for educational purposes.",
        tech: ["Python", "Security Tools"],
        github: "https://github.com/ratheesh-12",
        live: "#"
    },
    {
        title: "Stock Alert Dashboard",
        description: "Real-time price alerts using Node.js, MySQL, and React for tracking market trends.",
        tech: ["Node.js", "MySQL", "React"],
        github: "https://github.com/ratheesh-12",
        live: "#"
    },
    {
        title: "Portfolio V1",
        description: "Previous version of personal portfolio showcasing early development skills.",
        tech: ["HTML", "CSS", "JS"],
        github: "https://github.com/ratheesh-12",
        live: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 text-lg">Turning ideas into secure digital experiences.</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent via-ocean to-water-light mx-auto rounded-full shadow-water mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="ios-card overflow-hidden group"
                        >
                            <div className="h-48 bg-gradient-to-br from-dark-card via-ocean/20 to-dark-card relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-ocean/10 to-water-dark/20 group-hover:from-accent/30 group-hover:via-ocean/20 group-hover:to-water-dark/30 transition-all duration-500"></div>
                                <div className="absolute inset-0 backdrop-blur-sm"></div>
                                {/* Placeholder for project thumbnail */}
                                <div className="absolute inset-0 flex items-center justify-center text-accent/60 font-bold text-xl group-hover:scale-110 group-hover:text-accent transition-all duration-500">
                                    {project.title}
                                </div>
                                {/* Water ripple effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium text-accent bg-gradient-to-r from-accent/10 to-ocean/10 px-3 py-1.5 rounded-full border border-accent/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors font-medium">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors font-medium">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/ratheesh-12?tab=repositories"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 frosted-glass border-2 border-accent/50 text-accent font-semibold rounded-2xl hover:bg-accent/10 hover:border-accent transition-all hover:scale-105 duration-300 shadow-ios"
                    >
                        View All Projects <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
