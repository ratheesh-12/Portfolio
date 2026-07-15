
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-accent/20 relative bg-gradient-to-b from-transparent to-ocean/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm font-medium">© 2025 <span className="text-accent">RATHEESH SEKAR</span>. All rights reserved.</p>
                    <p className="text-gray-500 text-xs mt-1">Built by Ratheesh Sekar</p>
                </div>

                <Link
                    to="hero"
                    smooth={true}
                    className="p-3 frosted-glass rounded-2xl text-accent hover:bg-accent hover:text-white transition-all cursor-pointer border border-accent/30 hover:border-accent hover:shadow-water hover:scale-110 duration-300"
                >
                    <ArrowUp size={20} />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
