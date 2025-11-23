
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
        <section id="certifications" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 glass rounded-xl border border-white/5 hover:border-primary/50 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
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
