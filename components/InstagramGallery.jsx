import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const posts = [
    { id: 1, image: "/images/insta-post-1.jpg", link: "https://www.instagram.com/sigma_wedding_cars_trivandrum/" },
    { id: 2, image: "/images/suzuki-swift.jpg", link: "https://www.instagram.com/sigma_wedding_cars_trivandrum/" },
    { id: 3, image: "/images/bmw-3series.jpg", link: "https://www.instagram.com/sigma_wedding_cars_trivandrum/" },
    { id: 4, image: "/images/insta-post-4.jpg", link: "https://www.instagram.com/sigma_wedding_cars_trivandrum/" },
    { id: 5, image: "/images/suzuki-ertiga.jpg", link: "https://www.instagram.com/sigma_wedding_cars_trivandrum/" },
    { id: 6, image: "/images/mahindra-thar.jpg", link: "https://www.instagram.com/sigma_wedding_cars_trivandrum/" },
];

export default function InstagramGallery() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container px-4 md:px-6 text-center">
                <div className="flex flex-col items-center mb-12 space-y-4">
                    <Instagram className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Real Weddings, Real Moments
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Follow <Link href="https://www.instagram.com/sigma_wedding_cars_trivandrum/" target="_blank" className="text-primary font-medium hover:underline">@sigma_wedding_cars_trivandrum</Link> for daily inspiration.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-12">
                    {posts.map((post) => (
                        <Link key={post.id} href={post.link} target="_blank" className="relative group aspect-square overflow-hidden block">
                            <Image
                                src={post.image}
                                alt="Instagram Wedding Moment"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 16vw"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="text-white h-8 w-8" />
                            </div>
                        </Link>
                    ))}
                </div>

                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black">
                    <Link href="https://www.instagram.com/sigma_wedding_cars_trivandrum/" target="_blank">
                        View More on Instagram
                    </Link>
                </Button>
            </div>
        </section>
    );
}
