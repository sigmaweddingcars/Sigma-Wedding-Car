import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CarCard({ car }) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-primary backdrop-blur-md">
                    {car.category}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-foreground">{car.name}</h3>
                        {car.model && (
                            <p className="text-xs text-muted-foreground mt-0.5">{car.model}</p>
                        )}
                    </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                    {car.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10">
                        {car.seats} Seater
                    </span>
                    {car.decoration && (
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Decoration Charges May Apply
                        </span>
                    )}
                    {car.name === "Mahindra Thar" && (
                        <>
                            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                Fully Modified
                            </span>
                            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                Babas Horn
                            </span>
                        </>
                    )}
                </div>
                <div className="mt-6 flex justify-center">
                    <Button asChild className="w-full max-w-xs">
                        <Link href={`https://wa.me/917012469588?text=I'm%20interested%20in%20${car.name}`} target="_blank">
                            Book Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
