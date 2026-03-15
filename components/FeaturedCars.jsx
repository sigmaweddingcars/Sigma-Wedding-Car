import CarCard from "@/components/CarCard";

const cars = [
    {
        name: "BMW 3 Series",
        model: "BMW 3 Series (F30) – 2.0L TwinPower Turbo",
        category: "Luxury Sedan",
        description: "An iconic luxury sports sedan that blends athletic elegance with refined comfort. Its sleek black exterior and decorated bonnet make for a dramatic and unforgettable wedding arrival.",
        image: "/images/bmw-3series.jpg",
        seats: 5,
        decoration: true,
        features: ["Panoramic Sunroof", "Leather Interior", "Harman Kardon Sound"],
    },
    {
        name: "Maruti Suzuki Swift",
        model: "Maruti Suzuki Swift (4th Gen, 2023) – 1.2L DualJet",
        category: "Sport Hatchback",
        description: "Bold, sporty, and vibrant — the all-new Swift in striking Solid Fire Red turns heads at every corner. Perfect for couples who love a fun, youthful, and stylish entry.",
        image: "/images/suzuki-swift.jpg",
        seats: 5,
        decoration: true,
        features: ["Sport Body Kit", "9-inch SmartPlay Pro+", "LED Projector Headlamps", "Sporty Alloys"],
    },
    {
        name: "Maruti Suzuki Ertiga",
        model: "Maruti Suzuki Ertiga (2nd Gen) – 1.5L K15C Smart Hybrid",
        category: "Premium MPV",
        description: "Spacious, elegant, and beautifully presented in Pearl Arctic White. Ideal for family groups and grand processions, offering a regal arrival without compromising on comfort.",
        image: "/images/suzuki-ertiga.jpg",
        seats: 7,
        decoration: true,
        features: ["Smart Hybrid Technology", "3-Row Spacious Cabin", "Touchscreen Infotainment", "Auto Climate Control"],
    },
    {
        name: "Mahindra Thar",
        model: "Mahindra Thar (2nd Gen, 2023) – 2.0L mStallion Turbo",
        category: "Luxury SUV / Off-Roader",
        description: "Bold, rugged, and absolutely unforgettable. This custom-wrapped Thar creates a uniquely powerful and adventurous wedding entry unlike any other.",
        image: "/images/mahindra-thar-new.jpg",
        seats: 4,
        decoration: true,
        features: ["4x4 Low Range", "Custom Exterior Wrap", "Turbo Petrol"],
    },
];

export default function FeaturedCars() {
    return (
        <section id="cars" className="py-16 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Our Fleet</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Premium Wedding Collection
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Choose from our exclusive fleet of luxury and vintage vehicles to make your special day truly unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cars.map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
}
