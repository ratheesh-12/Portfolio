
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm">© 2025 RATHEESH SEKAR. All rights reserved.</p>
                    <p className="text-gray-600 text-xs mt-1">Built with 💙 by Ratheesh Sekar</p>
                </div>

                <Link
                    to="hero"
                    smooth={true}
                    className="p-3 bg-white/5 rounded-full text-primary hover:bg-primary hover:text-black transition-all cursor-pointer"
                >
                    <ArrowUp size={20} />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
