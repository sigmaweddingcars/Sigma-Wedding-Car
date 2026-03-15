import { Star } from "lucide-react";

export default function SocialProof() {
    return (
        <section className="py-16 bg-white border-y">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="p-4 flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">100+</span>
                        <p className="text-lg font-medium text-foreground">Happy Wedding Rides</p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <div className="flex items-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-6 w-6 md:h-8 md:w-8 fill-primary text-primary" />
                            ))}
                        </div>
                        <span className="text-4xl md:text-5xl font-serif font-bold text-primary sr-only">5.0</span>
                        <p className="text-lg font-medium text-foreground">Average Rating</p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">2025</span>
                        <p className="text-lg font-medium text-foreground">Serving Trivandrum Since</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
