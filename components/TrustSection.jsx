import { UserCheck, Sparkles, Clock, Gem } from "lucide-react";

const features = [
    {
        icon: UserCheck,
        title: "Professional Chauffeurs",
        description: "Experienced, courteous drivers for your special day",
    },
    {
        icon: Sparkles,
        title: "Pristine & Decorated",
        description: "Immaculately maintained and elegantly decorated vehicles",
    },
    {
        icon: Clock,
        title: "On-Time Guarantee",
        description: "We arrive 30 minutes early, every time",
    },
    {
        icon: Gem,
        title: "Affordable Packages",
        description: "Luxury service tailored to fit your budget",
    },
];

export default function TrustSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-serif font-semibold">{feature.title}</h3>
                            <p className="text-muted-foreground font-sans">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
