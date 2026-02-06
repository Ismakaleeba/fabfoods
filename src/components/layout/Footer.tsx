import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-display text-white">Fab Foods</h3>
                        <p className="text-sm">
                            Fueling innovation with food, events and opportunities within Fab Lab Kigali Hub.
                        </p>
                        <div className="flex space-x-4">
                            {/* Socials - placeholders */}
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/prototype" className="hover:text-primary transition-colors">Prototype Platform</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li className="text-sm">Food & Beverage</li>
                            <li className="text-sm">Catering & Events</li>
                            <li className="text-sm">Office Supply</li>
                            <li className="text-sm">Event Management</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-primary mt-1" />
                                <span className="text-sm">Fab Lab Kigali Hub, Kigali, Rwanda</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-primary" />
                                <span className="text-sm">+250 781 050 726</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-primary" />
                                <span className="text-sm">fabcaferw@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Fab Foods. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
