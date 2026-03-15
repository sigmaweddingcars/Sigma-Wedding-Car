import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Car } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-car.png"
                    alt="Luxury Wedding Car in Trivandrum"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container px-4 sm:px-6 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                <div className="space-y-2">
                    <h2 className="text-primary font-medium tracking-wider uppercase text-sm md:text-base">
                        Premium Wedding Car Rentals
                    </h2>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-tight">
                        Arrive Like <span className="text-primary">Royalty</span>
                    </h1>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl font-sans font-light leading-relaxed">
                    Experience the elegance of Trivandrum&apos;s finest luxury fleet. <br className="hidden sm:block" />
                    Make your wedding entry unforgettable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0">
                    <Button asChild size="lg" className="h-14 text-lg px-8 font-semibold w-full sm:w-auto shadow-lg shadow-primary/20">
                        <Link href="#cars">
                            <Car className="mr-2 h-5 w-5" />
                            View Our Fleet
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-14 text-lg px-8 font-semibold w-full sm:w-auto bg-white/10 text-white border-white/40 hover:bg-white hover:text-black hover:border-white backdrop-blur-sm transition-all duration-300">
                        <Link href="/booking">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Book Your Ride
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
