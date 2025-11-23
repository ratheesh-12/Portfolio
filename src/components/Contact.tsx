
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Twitter, MessageCircle, Code2 } from 'lucide-react';

const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ratheeshsekar12", color: "hover:text-blue-500" },
    { name: "GitHub", icon: Github, url: "https://github.com/ratheesh-12", color: "hover:text-gray-400" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-500" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/ratheesh1226", color: "hover:text-blue-400" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.link/s42xsc", color: "hover:text-green-500" },
    { name: "LeetCode", icon: Code2, url: "https://leetcode.com/u/ratheesh1226/", color: "hover:text-yellow-500" },
];

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black/50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let’s Connect & Collaborate</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join me as I build, secure, and share the future of the web. Whether you have a project in mind or just want to say hi, I'm always open to new opportunities.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 glass rounded-full text-gray-400 border border-white/5 transition-all hover:scale-110 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] ${social.color}`}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 p-8 glass rounded-2xl max-w-3xl mx-auto border border-white/5">
                        <form className="grid gap-6 text-left">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Message"></textarea>
                            </div>
                            <button className="bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors w-full md:w-auto self-start">
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
