
import { motion } from 'framer-motion';

const achievements = [
    { title: "Learnathon 2024", image: "https://via.placeholder.com/400x300/00E5FF/000000?text=Learnathon" },
    { title: "MongoDB Certification", image: "https://via.placeholder.com/400x300/00E5FF/000000?text=MongoDB" },
    { title: "UiPath Automation", image: "https://via.placeholder.com/400x300/00E5FF/000000?text=UiPath" },
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Milestones</h2>
                    <p className="text-gray-400">Snapshots of my journey through learning and innovation.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="relative group rounded-2xl overflow-hidden aspect-video glass border border-white/5"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
