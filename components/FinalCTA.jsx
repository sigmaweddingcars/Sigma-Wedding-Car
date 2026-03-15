import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
    return (
        <section className="py-20 md:py-32 bg-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-car.png')] bg-cover bg-center opacity-5" />
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                    Make Your Wedding Entry <span className="text-primary">Unforgettable</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Limited availability for the upcoming wedding season. Secure your dream car today to avoid disappointment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="h-14 text-lg px-10 shadow-xl w-full sm:w-auto">
                        <Link href="/booking">
                            Book Your Dream Car Now
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 text-lg px-10 bg-white/50 backdrop-blur-sm w-full sm:w-auto">
                        <Link href="https://wa.me/917012469588" target="_blank">
                            Chat with Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
