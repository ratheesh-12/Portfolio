import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 md:py-4' : 'py-4 md:py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-lg flex-shrink-0">
                        RS
                    </div>
                    <div className="text-base md:text-xl font-bold tracking-tighter whitespace-nowrap">
                        <span className="text-white">RATHEESH </span>
                        <span className="text-primary hidden sm:inline">SEKAR</span>
                        <span className="text-primary sm:hidden">S</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="text-white hover:text-primary cursor-pointer transition-all text-base font-semibold tracking-wide hover:underline decoration-primary underline-offset-4 hover:scale-105"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-gray-800 shadow-lg">
                    <div className="flex flex-col items-center py-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-primary text-lg font-semibold w-full text-center py-2 transition-all hover:scale-105"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
