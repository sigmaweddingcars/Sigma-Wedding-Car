import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Contact Us | Sigma Wedding Cars Trivandrum",
    description: "Get in touch with us to book your wedding car. We serve Trivandrum, Kollam, and nearby districts.",
};

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-24 md:pt-28">
            <div className="bg-primary/5 py-12 md:py-20 text-center">
                <div className="container px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let&apos;s Plan Your Perfect Ride</h1>
                    <p className="text-lg text-muted-foreground">We typically respond within 1 hour during business hours</p>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-12 md:py-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Methods */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h2>
                            <div className="flex flex-col gap-6">

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 text-green-600 rounded-full">
                                        <MessageCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">WhatsApp (Recommended)</h3>
                                        <p className="text-muted-foreground mb-2">Quickest response for availability & quotes</p>
                                        <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E]" asChild>
                                            <Link href="https://wa.me/917012469588" target="_blank">Chat on WhatsApp</Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-full">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground mb-2">Mon-Sun, 9 AM - 8 PM</p>
                                        <a href="tel:+917012469588" className="text-lg font-medium hover:text-primary transition-colors">
                                            +91 7012469588
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 text-gray-600 rounded-full">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground mb-2">For detailed inquiries</p>
                                        <a href="mailto:Sigmaweddingcars24@gmail.com" className="font-medium hover:text-primary transition-colors">
                                            Sigmaweddingcars24@gmail.com
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-semibold mb-6">Our Location</h2>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 text-gray-600 rounded-full">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <Link
                                        href="https://maps.app.goo.gl/N74WdE7Dt4x8N8aT6?g_st=aw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg leading-relaxed text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        Sigma Wedding Cars,<br />
                                        Law College,<br />
                                        Thiruvananthapuram,<br />
                                        Kerala, India
                                    </Link>
                                    <p className="mt-4 text-sm text-primary font-medium">Serving: Trivandrum, Kollam, Kochi, Kanyakumari</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Map Placeholder */}
                    {/* Map Link */}
                    <div className="h-[400px] lg:h-auto bg-gray-100 rounded-xl overflow-hidden relative border group">
                        <div className="absolute inset-0 bg-[url('/images/hero-car.png')] bg-cover bg-center opacity-20 transition-opacity duration-300 group-hover:opacity-30" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200/50 p-6 text-center">
                            <MapPin className="h-12 w-12 text-primary mb-4 animate-bounce" />
                            <h3 className="text-xl font-bold font-serif mb-2">Visit Our Office</h3>
                            <p className="text-gray-600 mb-6 max-w-xs">
                                Law College, Thiruvananthapuram, Kerala
                            </p>
                            <Button asChild size="lg" className="shadow-xl">
                                <Link
                                    href="https://maps.app.goo.gl/N74WdE7Dt4x8N8aT6?g_st=aw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open in Google Maps
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
