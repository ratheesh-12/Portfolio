
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    { name: "Excel Bootcamp", issuer: "Udemy" },
    { name: "MongoDB Java Developer Path", issuer: "MongoDB" },
    { name: "Introduction to MongoDB, AI & Vector Search", issuer: "ICT Academy" },
    { name: "UiPath Automation Explorer Training", issuer: "UiPath" },
    { name: "Learnathon 2024", issuer: "ICT Academy" },
    { name: "Introduction to Soft Skills", issuer: "TCS iON" },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-ocean to-water-light">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent via-ocean to-water-light mx-auto rounded-full shadow-water"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-3 md:p-6 ios-card group cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-4">
                                <div className="p-2 md:p-3 bg-gradient-to-br from-accent/20 to-ocean/20 rounded-xl text-accent group-hover:from-accent group-hover:to-ocean group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                                    <Award size={18} className="md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xs md:text-lg font-bold text-white mb-0.5 md:mb-1 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                                        {cert.name}
                                    </h3>
                                    <p className="text-gray-400 text-[10px] md:text-sm truncate">{cert.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
