import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';
import { ArrowRight } from 'lucide-react';
import food2 from '../assets/food/cafe_4.jpg';
import fablab_integration from '../assets/fablab_integration.jpg';

const About = () => {
    return (
        <>
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">About Fab Foods</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We are the culinary heart of innovation at Fab Lab Kigali Hub.
                    </p>
                </div>
            </div>

            <Section>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <img
                            src={food2}
                            alt="The culinary heart of Fab Lab"
                            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold font-display text-secondary mb-6">Our Mission</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Fab Foods is more than just a kitchen. We are a youth-driven food and experience brand designed to support innovation events.
                        </p>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Our mission is to fuel the creators, makers, and innovators of Kigali with quality food and meaningful connections. By integrating food with event experiences, we create a ecosystem where ideas can flourish.
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="gray" className="relative overflow-hidden min-h-[500px] flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={fablab_integration}
                        alt="Fab Lab Kigali Workspace"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 w-full text-white">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Fab Lab Integration</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Being part of the Fab Lab Kigali Hub gives us a unique perspective on what innovators need. Our integration allows us to serve the community where they create, making food a natural part of the innovation process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation Support", desc: "We understand the rhythm of hackathons and intense workshops." },
                            { title: "Community First", desc: "We are built by and for the community of makers." },
                            { title: "Prototype Platform", desc: "We use our space to experiment with new food and event concepts." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all shadow-2xl">
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-slate-300 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Call to Action - Visual Break from Footer */}
            <Section className="text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-secondary mb-6">Want to Collaborate?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Whether you're planning an event or looking for the perfect creative workspace, we're here to fuel your innovation.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="px-12 py-4 text-lg shadow-xl hover:shadow-primary/30 transition-all bg-primary hover:bg-primary/90 border-none"
                            onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL)}
                        >
                            Get in Touch <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
