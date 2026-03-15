import Link from "next/link";
import { Car, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-serif font-bold flex items-center gap-2">
                            <Car className="h-6 w-6 text-primary" />
                            <span>Sigma<span className="text-primary">Wedding</span>Cars</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your Royal Ride Awaits. Premium wedding car rental service in Trivandrum, ensuring you arrive in style and elegance on your special day.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="https://www.instagram.com/sigma_wedding_cars_trivandrum/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-serif font-semibold text-primary">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/cars" className="hover:text-white transition-colors">Our Fleet</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-serif font-semibold text-primary">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <Link
                                    href="https://maps.app.goo.gl/N74WdE7Dt4x8N8aT6?g_st=aw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Law College, Thiruvananthapuram
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+917012469588" className="hover:text-white transition-colors">+91 7012469588</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:Sigmaweddingcars24@gmail.com" className="hover:text-white transition-colors">Sigmaweddingcars24@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-serif font-semibold text-primary">Service Areas</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Trivandrum City</li>
                            <li>Kovalam & Varkala</li>
                            <li>Kollam</li>
                            <li>Kochi</li>
                            <li>Kanyakumari</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 Sigma Wedding Cars Trivandrum. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
