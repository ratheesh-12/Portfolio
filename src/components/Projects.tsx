
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
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400">Turning ideas into secure digital experiences.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
                                {/* Placeholder for project thumbnail */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                                    {project.title}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
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
                        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
                    >
                        View All Projects <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
