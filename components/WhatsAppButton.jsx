import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/917012469588?text=Hi,%20I%20am%20interested%20in%20booking%20a%20wedding%20car"
            target="_blank"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-in fade-in slide-in-from-bottom-10"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-8 w-8 fill-current" />
            <span className="absolute right-full mr-4 bg-white text-black text-sm font-medium px-3 py-1 rounded shadow-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                Chat with us
            </span>
        </Link>
    );
}
