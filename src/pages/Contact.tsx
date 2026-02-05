import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Contact Us</h1>
                    <p className="text-xl text-slate-300">
                        Get in force for catering, events, or just to say hello.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold font-display text-secondary mb-8">Get in Touch</h2>
                        <div className="space-y-6">
                            <a href="https://wa.me/250781050726" className="flex items-center p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors">
                                <div className="bg-green-500 text-white p-3 rounded-lg mr-4">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">WhatsApp Order</h4>
                                    <p className="text-green-700">Chat with us for quick orders</p>
                                </div>
                            </a>

                            <div className="flex items-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="bg-slate-100 text-slate-600 p-3 rounded-lg mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Phone</h4>
                                    <p className="text-slate-600">+250 781 050 726</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="bg-slate-100 text-slate-600 p-3 rounded-lg mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Email</h4>
                                    <p className="text-slate-600">fabcaferw@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="bg-slate-100 text-slate-600 p-3 rounded-lg mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Location</h4>
                                    <p className="text-slate-600">Fab Lab Kigali Hub, Kigali, Rwanda</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-bold font-display text-secondary mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50">
                                    <option>General Inquiry</option>
                                    <option>Catering Request</option>
                                    <option>Event Hosting</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
