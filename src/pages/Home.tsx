import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';
import gallerySnacks from '../assets/food/gallery_snacks.jpg';
import galleryLunch from '../assets/food/gallery_lunch.jpg';
import galleryDinner from '../assets/food/gallery_dinner.jpg';
import galleryCoffee from '../assets/food/gallery_coffee.jpg';
import galleryDrinks from '../assets/food/gallery_drinks.jpg';
import gallerySpecialties from '../assets/food/gallery_specialties.jpg';
import kitchenImg from '../assets/food/IMG_0687.jpg';
import whoWeServeImg from '../assets/who_we_serve.jpg';
import serviceFood from '../assets/food/service_food.jpg';
import serviceCatering from '../assets/food/service_catering.jpg';
import serviceEvents from '../assets/food/service_events.jpg';
import servicePrototype from '../assets/food/service_prototype.jpg';

const Home = () => {
    const galleryItems = [
        { img: gallerySnacks, label: 'Gourmet Snacks', sub: 'Chef-crafted bites' },
        { img: galleryLunch, label: 'Innovation Lunch', sub: 'Balanced & fresh' },
        { img: galleryDinner, label: 'Event Dinner', sub: 'Gourmet plating' },
        { img: galleryCoffee, label: 'Specialty Coffee', sub: 'Artisanal brews' },
        { img: galleryDrinks, label: 'Fresh Drinks', sub: 'Natural juices' },
        { img: gallerySpecialties, label: 'Fab Specialties', sub: 'Signature creations' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
                                Fueling innovation with <span className="text-primary">food</span>, <span className="text-primary">events</span> and <span className="text-primary">opportunities</span>.
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                Fab Foods is an innovative food and experience brand within Fab Lab Kigali Hub, serving meals, catering events and creating opportunity-driven communities through Prototype.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="group">
                                    Order Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Link to="/services">
                                    <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Section
                title="What We Do"
                subtitle="Fueling the ecosystem with culinary excellence and professional event support services."
                background="gray"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Food & Snacks", desc: "Lunch meals, pizza and specialty coffee for innovators.", img: serviceFood },
                        { title: "Catering & Deliveries", desc: "Professional catering for offices and corporate buildings.", img: serviceCatering },
                        { title: "Event Management", desc: "End-to-end support for hackathons and workshops.", img: serviceEvents },
                        { title: "Prototype Platform", desc: "Curated networking and opportunity matching.", img: servicePrototype }
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl group border border-white/10"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold text-white mb-2 font-display">{service.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {service.desc}
                                </p>
                                <div className="w-8 h-1 bg-primary mt-2 group-hover:w-16 transition-all duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Why Fab Foods */}
            <Section>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src={kitchenImg}
                            alt="Fab Foods Culinary Creation"
                            className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-secondary">More than just a kitchen.</h2>
                        <div className="text-lg text-slate-600 space-y-4">
                            <p>
                                We are a youth-driven food and experience brand inside Fab Lab Kigali Hub, designed to support innovation events.
                            </p>
                            <p>
                                Our unique value proposition is that one team handles food, logistics, catering, event experience, and community networking.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {['Food', 'Logistics', 'Catering', 'Event Experience', 'Community Networking'].map((item) => (
                                <div key={item} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="font-medium text-secondary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Food Gallery */}
            <Section title="Our Culinary Creations" subtitle="A glimpse into what we prepare for the innovation community.">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg h-72"
                        >
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-white font-bold text-xl">{item.label}</h4>
                                <p className="text-slate-200 text-sm">{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Who We Serve */}
            <Section className="relative h-[600px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src={whoWeServeImg}
                        alt="Who We Serve Background"
                        className="w-full h-full object-cover opacity-20 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900"></div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold font-display text-white mb-12"
                        >
                            Who We Serve
                        </motion.h2>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                            {['Offices & Companies', 'Innovation Hubs', 'NGOs & Institutions', 'Event Organizers', 'Young Innovators'].map((client, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 text-white font-bold"
                                >
                                    {client}
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                            We take pride in powering the innovation ecosystem with reliable, high-quality culinary support tailored to the unique needs of Kigali's most dynamic organizations.
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="!bg-slate-900 text-white rounded-3xl mx-4 my-16 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src={galleryDinner} alt="CTA Background" className="w-full h-full object-cover" />
                </div>
                <div className="text-center max-w-4xl mx-auto py-12 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to fuel your next event?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Whether you need daily lunch supply, catering for a hackathon, or event management support, we've got you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="bg-primary hover:bg-orange-600 text-white border-none px-10 shadow-lg shadow-primary/20">
                            Contact for Catering
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white px-10">
                            Join Prototype
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Home;
