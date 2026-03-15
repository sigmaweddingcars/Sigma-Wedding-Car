"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Car, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    const pathname = usePathname();
    const isBookingPage = pathname === "/booking";
    const isCarsPage = pathname === "/cars";
    const isContactPage = pathname === "/contact";
    const isDarkLogoPage = isBookingPage || isCarsPage || isContactPage;
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Our Cars", href: "/cars" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className={cn("text-2xl font-serif font-bold flex items-center gap-2", 
                    isDarkLogoPage 
                        ? "text-gray-900" 
                        : isScrolled ? "text-foreground" : "text-white"
                )}>
                    <Car className="h-6 w-6 text-primary" />
                    <span>Sigma<span className="text-primary">Wedding</span>Cars</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 transition-all duration-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-all hover:text-primary relative group active:scale-95",
                                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4 transition-all duration-700">
                    <Button asChild variant={isScrolled ? "default" : "secondary"} className="font-semibold">
                        <Link href="/booking">Book Now</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={cn("h-6 w-6", isScrolled || mobileMenuOpen || isDarkLogoPage ? "text-foreground" : "text-white")} />
                    ) : (
                        <Menu className={cn("h-6 w-6", isScrolled || isDarkLogoPage ? "text-foreground" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
