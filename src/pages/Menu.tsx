import { motion } from 'framer-motion';
import { ChefHat, Leaf, HeartPulse } from 'lucide-react';
import Section from '../components/ui/Section';
import dish1 from '../assets/food/gallery_lunch.jpg';
import dish2 from '../assets/food/gallery_dinner.jpg';
import dish3 from '../assets/food/gallery_specialties.jpg';
import dish4 from '../assets/food/gallery_snacks.jpg';
import dish5 from '../assets/food/dish_5.jpg';
import food3 from '../assets/food/IMG_0689.jpg';
import coffeeImg from '../assets/food/gallery_coffee.jpg';
import cafe1 from '../assets/food/cafe_1.jpg';
import cafe3 from '../assets/food/cafe_3.jpg';
import cafe4 from '../assets/food/cafe_4.jpg';
import cafe5 from '../assets/food/cafe_5.jpg';
import atmosphere1 from '../assets/food/unnamed (2).webp';

const Menu = () => {
    const signatureDishes = [
        {
            name: "Innovation Power Bowl",
            description: "A balanced mix of roasted sweet potatoes, quinoa, fresh greens, and citrus-tahini dressing.",
            price: "RWF 4,500",
            tags: ["Vegan", "Gluten-Free"],
            image: dish1
        },
        {
            name: "The Maker's Platter",
            description: "Signature grilled protein served with seasonal vegetables and homemade spicy sauce.",
            price: "RWF 6,000",
            tags: ["Protein Rich"],
            image: dish2
        },
        {
            name: "Prototype Pasta",
            description: "Fresh pasta with sundried tomatoes, basil pesto, and Parmigiano-Reggiano.",
            price: "RWF 5,500",
            tags: ["Vegetarian"],
            image: dish3
        },
        {
            name: "Kigali Stack",
            description: "A towering assembly of local flavors, grilled to perfection.",
            price: "RWF 5,200",
            tags: ["New"],
            image: dish4
        }
    ];

    const menuCategories = [
        {
            category: "Innovation Lunches",
            image: dish1,
            items: [
                { name: "Tech Tacos (Set of 3)", price: "4,000", desc: "Corn tortillas with pulled chicken or black beans.", tags: ["GF"] },
                { name: "Developer's Delight Salad", price: "3,500", desc: "Mixed greens, avocado, and toasted seeds.", tags: ["Vegan", "GF"] },
                { name: "Creative Curry", price: "5,000", desc: "Mild coconut curry with seasonal veggies and rice.", tags: ["Vegan"] }
            ]
        },
        {
            category: "Maker Snacks & Sides",
            image: dish4,
            items: [
                { name: "Hand-Cut Fries", price: "1,500", desc: "Served with house-made rosemary aioli.", tags: ["V"] },
                { name: "Energy Bites (3pcs)", price: "2,000", desc: "Oats, dates, cocoa, and peanut butter.", tags: ["Vegan", "GF"] },
                { name: "Seasonal Soup", price: "3,000", desc: "Ask our servers for today's creation.", tags: ["V"] }
            ]
        },
        {
            category: "Specialty Beverages",
            image: coffeeImg,
            items: [
                { name: "The Kigali Cold Brew", price: "2,500", desc: "12-hour steeped local beans.", tags: [] },
                { name: "Innovation Hibiscus Tea", price: "1,800", desc: "Chilled with ginger and honey.", tags: ["Natural"] },
                { name: "Flat White", price: "2,200", desc: "Espresso with micro-foam milk.", tags: [] }
            ]
        }
    ];

    const cafeGallery = [cafe1, cafe3, cafe4, cafe5, dish5, atmosphere1];

    return (
        <>
            {/* Hero & Philosophy */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src={food3} alt="Philosophy Background" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ChefHat className="w-16 h-16 mx-auto mb-6 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Our Culinary Philosophy</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed italic">
                            "We believe that great ideas are fueled by great food. By blending fresh, local ingredients with innovative culinary techniques, we create dishes that nourish both the body and the mind of Kigali's innovation community."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Signature Dishes */}
            <Section title="Signature Dishes" subtitle="Experience the best of Fab Foods' culinary creations.">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {signatureDishes.map((dish, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-6 h-64 shadow-lg">
                                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-secondary font-bold text-sm">
                                    {dish.price}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-display text-secondary mb-2">{dish.name}</h3>
                            <p className="text-sm text-slate-600 mb-4">{dish.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {dish.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md border border-slate-200 uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Cafe Experience Gallery */}
            <Section background="gray" title="Experience the Cafe" subtitle="Where innovation meets appetite at Fab Lab Kigali Hub.">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {cafeGallery.map((img, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="aspect-square rounded-xl overflow-hidden shadow-md"
                        >
                            <img src={img} alt={`Cafe ${idx + 1}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Interactive Menu Grid */}
            <Section title="Main Menu" subtitle="Handcrafted meals and drinks served daily at Fab Lab Kigali Hub.">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {menuCategories.map((cat, idx) => (
                        <div key={idx} className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 min-h-[500px] flex flex-col">
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img src={cat.image} alt={cat.category} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[1px]"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 flex-grow flex flex-col text-white">
                                <h3 className="text-3xl font-bold font-display mb-8 pb-4 border-b border-white/20">{cat.category}</h3>
                                <div className="space-y-10 flex-grow">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-start group">
                                            <div className="flex-1 pr-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h4 className="font-bold text-xl group-hover:text-primary transition-colors">{item.name}</h4>
                                                    <div className="flex gap-1">
                                                        {item.tags.map(tag => (
                                                            <span key={tag} className="text-[10px] font-black px-1.5 py-0.5 bg-primary text-secondary rounded uppercase tracking-tighter">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-300 italic font-medium">{item.desc}</p>
                                            </div>
                                            <div className="text-primary font-black text-lg">
                                                {item.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Freshly Prepared Daily</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Dietary Info */}
            <Section className="bg-secondary text-white py-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="flex items-center gap-3">
                        <Leaf className="text-green-400 w-8 h-8" />
                        <div>
                            <p className="font-bold">Plant-Based Options</p>
                            <p className="text-sm text-slate-400">Available daily across our menu.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <HeartPulse className="text-red-400 w-8 h-8" />
                        <div>
                            <p className="font-bold">Allergen Friendly</p>
                            <p className="text-sm text-slate-400">Specify requirements to our team.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Menu;
