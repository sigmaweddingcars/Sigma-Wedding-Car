"use client";
import { useState, useEffect } from "react";
import { Star, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const INITIAL_REVIEWS = [
    {
        id: 1,
        name: "Arjun S.",
        rating: 5,
        comment: "Excellent service! The car was pristine and the chauffeur was very professional. Made our wedding day even more special.",
        date: "2025-11-20"
    },
    {
        id: 2,
        name: "Meera Nair",
        rating: 5,
        comment: "Beautifully decorated car and timely arrival. Highly recommended for premium weddings in Trivandrum.",
        date: "2026-01-15"
    }
];

export default function Testimonials() {
    const [reviews, setReviews] = useState(INITIAL_REVIEWS);
    const [mounted, setMounted] = useState(false);
    const [newReview, setNewReview] = useState({
        name: "",
        rating: 5,
        comment: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [msg, setMsg] = useState("");

    // Handle initial mount and load from localStorage
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const saved = localStorage.getItem("sigma_reviews");
        if (saved) {
            try {
                setReviews(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse reviews", e);
            }
        }
    }, []);

    // Save reviews to localStorage when they change
    const saveToLocal = (updatedReviews) => {
        localStorage.setItem("sigma_reviews", JSON.stringify(updatedReviews));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newReview.name.trim() || !newReview.comment.trim()) {
            return;
        }

        setIsSubmitting(true);

        const reviewToAdd = {
            id: Date.now(),
            ...newReview,
            date: new Date().toISOString().split('T')[0]
        };

        const updated = [reviewToAdd, ...reviews];
        setReviews(updated);
        saveToLocal(updated);

        // Reset form
        setNewReview({ name: "", rating: 5, comment: "" });

        setTimeout(() => {
            setIsSubmitting(false);
            setMsg("Thank you! Your review has been posted.");
            setTimeout(() => setMsg(""), 3000);
        }, 800);
    };

    const handleStarClick = (rating) => {
        setNewReview(prev => ({ ...prev, rating }));
    };

    // If not mounted, render a skeleton/placeholder to prevent hydration mismatch
    if (!mounted) {
        return (
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto animate-pulse">
                    <div className="h-4 w-24 bg-gray-200 mx-auto mb-4" />
                    <div className="h-10 w-64 bg-gray-200 mx-auto mb-16" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
                        <div className="h-64 bg-gray-100 rounded-2xl" />
                        <div className="lg:col-span-2 space-y-6">
                            <div className="h-32 bg-gray-50 rounded-2xl" />
                            <div className="h-32 bg-gray-50 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white" id="reviews">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase mb-2">Testimonials</h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        What Our Clients Say
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Review Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
                            <h4 className="text-2xl font-serif font-bold mb-6 text-foreground">Leave a Review</h4>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="rev-name" className="text-foreground">Your Name</Label>
                                    <Input
                                        id="rev-name"
                                        required
                                        placeholder="Enter your name"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                                        className="bg-white border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-foreground">Rating</Label>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleStarClick(star)}
                                                className="focus:outline-none transition-transform active:scale-90 hover:scale-110"
                                            >
                                                <Star
                                                    className={cn(
                                                        "h-8 w-8",
                                                        star <= newReview.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"
                                                    )}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="rev-comment" className="text-foreground">Your Experience</Label>
                                    <Textarea
                                        id="rev-comment"
                                        required
                                        placeholder="Tell us about your ride..."
                                        rows={4}
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                                        className="bg-white border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#D4AF37] hover:bg-[#b8952b] text-white py-6 text-lg transition-all active:scale-95"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            Posting... <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Post Review <Send className="h-4 w-4" />
                                        </span>
                                    )}
                                </Button>
                                {msg && <p className="text-green-600 text-sm text-center font-medium animate-bounce">{msg}</p>}
                            </form>
                        </div>
                    </div>

                    {/* Review List */}
                    <div className="lg:col-span-2 space-y-6">
                        {reviews.length === 0 ? (
                            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
                            </div>
                        ) : (
                            reviews.map((rev) => (
                                <div key={rev.id} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                <User className="text-primary h-6 w-6" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-lg text-foreground">{rev.name}</h5>
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((s) => (
                                                        <Star
                                                            key={s}
                                                            className={cn(
                                                                "h-4 w-4",
                                                                s <= rev.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-200"
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm text-muted-foreground font-medium">
                                            {new Date(rev.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -top-2 -left-2 text-4xl text-[#D4AF37]/20 font-serif">&quot;</span>
                                        <p className="text-gray-600 leading-relaxed italic pl-4 pr-2">
                                            {rev.comment}
                                        </p>
                                        <span className="absolute -bottom-4 -right-2 text-4xl text-[#D4AF37]/20 font-serif">&quot;</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
