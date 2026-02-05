import { Users, Zap, Target, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import bgProcess from '../assets/food/service_prototype.jpg';

const Prototype = () => {
    return (
        <>
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                {/* Subtle pattern or overlay could go here if needed */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4 backdrop-blur-sm border border-primary/30">
                            Powered by Fab Foods
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                            Prototype Platform
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            A digital platform and event series that connects young people to real opportunities, mentors, and innovation communities.
                        </p>
                        <Button className="bg-primary text-white hover:bg-orange-700 border-none transition-all shadow-lg hover:shadow-primary/25">
                            Join the Community <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-display text-secondary mb-6">Why Prototype?</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            We noticed that many young innovators attend events for the free food, but leave without real value. **Prototype changes that.**
                        </p>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            We blend food, networking, and talks to create an environment where opportunities are accessible to everyone.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start">
                                <div className="bg-orange-50 p-2 rounded-lg mr-4 text-primary">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Curated Networking</h4>
                                    <p className="text-slate-600">Connect with mentors and peers who matter.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-50 p-2 rounded-lg mr-4 text-primary">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Opportunity Access</h4>
                                    <p className="text-slate-600">Direct links to jobs, internships, and programs.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-50 p-2 rounded-lg mr-4 text-primary">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">Skill Building</h4>
                                    <p className="text-slate-600">Workshops and talks that teach real-world skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-slate-200 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop"
                            alt="Prototype Event"
                            className="relative rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </Section>

            <Section background="gray" className="relative overflow-hidden min-h-[600px] flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={bgProcess} alt="Process Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-secondary/90 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 w-full text-white">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How it Works</h2>
                        <p className="text-lg text-slate-300">Empowering your journey from concept to reality at Fab Lab Kigali Hub.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { step: '01', title: 'Sign Up', desc: 'Create your profile on the Prototype digital platform.' },
                            { step: '02', title: 'Attend Events', desc: 'Join our curated TED-style talks and mixers.' },
                            { step: '03', title: 'Get Matched', desc: 'Connect with opportunities that fit your skills.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all shadow-2xl">
                                <span className="text-7xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110 tracking-tighter">{item.step}</span>
                                <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                                <p className="text-slate-300 relative z-10 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Call to Action - Visual Break from Footer */}
            <Section className="text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-secondary mb-6">Ready to Prototype Your Future?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Join Kigali's fastest-growing community of young innovators and start your journey today.
                    </p>
                    <Button size="lg" className="px-12 py-4 text-lg shadow-xl hover:shadow-primary/30 transition-all">
                        Join the Community Now <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </div>
            </Section>
        </>
    );
};

export default Prototype;
