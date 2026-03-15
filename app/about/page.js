import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
    title: "About Us | Sigma Wedding Cars Trivandrum",
    description: "Learn about our journey, our family values, and our commitment to making your wedding day royalty.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <Image src="/images/about-hero.jpg" alt="A couple in a Sigma Wedding Car" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Story</h1>
                    <p className="text-xl md:text-2xl font-light">Your Wedding Deserves the Royal Treatment</p>
                </div>
            </section>


            {/* Main Content */}
            <section className="py-16 md:py-24 container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="prose prose-lg mx-auto text-muted-foreground">
                    <p className="lead text-2xl font-serif text-foreground font-medium mb-8 text-center text-balance">
                        &quot;Sigma Wedding Cars Trivandrum was born from a simple belief: every couple deserves to feel like royalty on their wedding day.&quot;
                    </p>
                    <p>
                        As a family rooted in Trivandrum for generations, we understand the deep significance of Kerala weddings.
                        We know that every detail matters—from the grand entry to the final send-off.
                        That&apos;s why we started Sigma Wedding Cars: to ensure that one of the most visible and memorable moments of your wedding—your arrival—is nothing short of perfect.
                    </p>
                    <p>
                        What began with a single luxury car for a close friend&apos;s wedding has blossomed into a carefully curated fleet of premium vehicles.
                        Each car is chosen for its elegance, maintained to perfection, and presented with the care your special day deserves.
                    </p>
                    <p>
                        We&apos;re not just a car rental service. We&apos;re storytellers, dream-makers, and partners in your celebration.
                        Our professional chauffeurs don&apos;t just drive—they ensure your comfort, timeliness, and peace of mind.
                    </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="text-primary h-6 w-6" /> Our Mission
                        </h3>
                        <p>
                            To create magical, stress-free wedding experiences by providing the finest luxury cars and impeccable service to couples in Trivandrum and beyond.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="text-primary h-6 w-6" /> Why Choose Us
                        </h3>
                        <ul className="space-y-2">
                            <li>• Excellence maintained standards</li>
                            <li>• Reliability in every journey</li>
                            <li>• Personalization for your unique day</li>
                            <li>• Built on Trust and Transparency</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
