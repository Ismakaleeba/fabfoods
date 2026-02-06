import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';
import serviceFood from '../assets/food/service_food.jpg';
import serviceCatering from '../assets/food/service_catering.jpg';
import serviceEvents from '../assets/food/service_events.jpg';
import servicePrototype from '../assets/food/service_prototype.jpg';

const Services = () => {
    const categories = [
        {
            title: "Food & Beverage",
            description: "We provide high-quality meals and snacks to fuel innovation.",
            items: ["Lunch meals", "Pizza & Snacks", "Specialty Coffee", "Office Supply"],
            image: serviceFood,
            buttonText: "Order Now"
        },
        {
            title: "Catering & Delivery",
            description: "Professional catering for corporate events and daily deliveries.",
            items: ["Office Lunch Delivery", "Building & Mall Supply", "Corporate Event Catering", "Training Institute Support"],
            image: serviceCatering,
            buttonText: "Book Service"
        },
        {
            title: "Event Management",
            description: "Complete event support from logistics to food.",
            items: ["Hackathon Organization", "Workshop Logistics", "Venue Setup", "End-to-end Support"],
            image: serviceEvents,
            buttonText: "Book Service"
        },
        {
            title: "Prototype Platform",
            description: "Connecting young people to opportunities through events.",
            items: ["Curated Networking", "TED-style Talks", "Mentorship Programs", "Opportunity Matching"],
            image: servicePrototype,
            buttonText: "Join Prototype"
        }
    ];

    const getTemplateMessage = (title: string): string => {
        if (title.includes("Food")) return WHATSAPP_TEMPLATES.ORDER;
        if (title.includes("Catering")) return WHATSAPP_TEMPLATES.CATERING;
        if (title.includes("Event")) return WHATSAPP_TEMPLATES.EVENT;
        return WHATSAPP_TEMPLATES.PROTOTYPE;
    };

    return (
        <>
            {/* ... hero section remains same ... */}
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Services</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Comprehensive food, event, and community solutions tailored for the innovation ecosystem.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <h3 className="absolute bottom-4 left-6 text-2xl font-bold font-display text-white">{category.title}</h3>
                            </div>
                            <div className="p-8 flex-grow">
                                <p className="text-slate-600 mb-6 text-lg font-medium leading-relaxed">{category.description}</p>

                                <ul className="space-y-3">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-primary/60 mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-8 py-6 bg-accent/5 border-t border-accent/10">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-slate-300 hover:bg-white hover:border-primary hover:text-primary transition-colors"
                                    onClick={() => openWhatsApp(getTemplateMessage(category.title))}
                                >
                                    {category.buttonText}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section background="gray" className="text-center">
                <h2 className="text-3xl font-bold font-display mb-6">Need a custom solution?</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    We specialize in tailoring our services to meet the unique needs of innovation hubs, hackathons, and corporate events.
                </p>
                <Button size="lg" onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL)}>Contact Us for a Quote</Button>
            </Section>
        </>
    );
};

export default Services;
