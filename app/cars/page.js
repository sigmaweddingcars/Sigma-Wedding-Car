import CarCard from "@/components/CarCard";

// Sigma Wedding Cars — Real Fleet
const allCars = [
    {
        name: "BMW 3 Series",
        model: "BMW 3 Series (F30) – 2.0L TwinPower Turbo",
        category: "Luxury Sedan",
        description: "An iconic luxury sports sedan that blends athletic elegance with refined comfort. Its sleek black exterior and decorated bonnet make for a dramatic and unforgettable wedding arrival.",
        image: "/images/bmw-3series.jpg",
        seats: 5,
        decoration: true,
        features: ["Panoramic Sunroof", "Leather Interior", "Harman Kardon Sound", "BMW iDrive"],
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
        description: "Bold, rugged, and absolutely unforgettable. This custom-wrapped Thar with its dramatic black finish and vivid floral decoration creates a uniquely powerful and adventurous wedding entry.",
        image: "/images/mahindra-thar-new.jpg",
        seats: 4,
        decoration: true,
        features: ["mStallion Petrol Turbo", "4x4 with Low Range", "7-inch Touchscreen", "Custom Exterior Wrap"],
    },
];

export const metadata = {
    title: "Our Fleet | Sigma Wedding Cars Trivandrum",
    description: "Browse our premium collection of luxury, vintage, and modern wedding cars in Trivandrum.",
};

export default function CarsPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-10 md:py-20 pt-24 md:pt-28">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Our Luxury Fleet
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        From vintage classics to modern luxury, we have the perfect car to match your wedding style.
                        All our cars come with professional chauffeurs and optional decoration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allCars.map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
}
