"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "+91 ",
        fromDate: "",
        toDate: "",
        pickupTime: "",
        pickup: "",
        destination: "",
        notes: ""
    });

    // Get today's date in YYYY-MM-DD format for min constraint
    const today = useMemo(() => {
        const d = new Date();
        return d.toISOString().split('T')[0];
    }, []);

    // Generate time slots in 12-hour format (AM/PM)
    const timeSlots = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 30) {
            const hour = i;
            const minute = j;
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const hour12 = hour % 12 || 12;
            const minuteStr = minute === 0 ? '00' : minute;
            timeSlots.push(`${hour12}:${minuteStr} ${ampm}`);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const prevValue = formData[name];

        if (name === "mobile") {
            let val = value;

            // Ensure first character is always '+'
            if (val.length > 0 && !val.startsWith("+")) {
                val = "+" + val;
            }

            // Only allow digits, plus, and spaces
            val = val.replace(/[^+0-9\s]/g, "");

            // Detect if user is deleting
            const isDeleting = prevValue && prevValue.length > val.length;

            if (!isDeleting) {
                // Auto-append space after common country codes
                if (val === "+91") val = "+91 ";
                if (val === "+1") val = "+1 ";

                // Formatting for +91 (India)
                if (val.startsWith("+91 ")) {
                    const digits = val.substring(4).replace(/\D/g, "");
                    if (digits.length > 5) {
                        val = "+91 " + digits.slice(0, 5) + " " + digits.slice(5, 10);
                    } else {
                        val = "+91 " + digits.slice(0, 10);
                    }
                }
                // Formatting for +1 (USA)
                else if (val.startsWith("+1 ")) {
                    const digits = val.substring(3).replace(/\D/g, "").slice(0, 10);
                    if (digits.length > 3 && digits.length <= 6) {
                        val = "+1 " + digits.slice(0, 3) + " " + digits.slice(3);
                    } else if (digits.length > 6) {
                        val = "+1 " + digits.slice(0, 3) + " " + digits.slice(3, 6) + " " + digits.slice(6);
                    } else {
                        val = "+1 " + digits;
                    }
                }
            }

            setFormData(prev => ({ ...prev, [name]: val }));
            return;
        }

        if (name === "name") {
            // Only alphabets and spaces
            const cleanValue = value.replace(/[^a-zA-Z\s]/g, "");
            setFormData(prev => ({ ...prev, [name]: cleanValue }));
            return;
        }

        if (name === "pickup" || name === "destination") {
            // Allow alphabets, digits, spaces, commas, dots, and hyphens for addresses
            const cleanValue = value.replace(/[^a-zA-Z0-9\s,.-]/g, "");
            setFormData(prev => ({ ...prev, [name]: cleanValue }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation for mobile (at least 10 characters for prefix + number)
        const digitsOnly = formData.mobile.replace(/\D/g, "");
        if (digitsOnly.length < 10) {
            alert("Please enter a valid 10-digit mobile number with country code.");
            return;
        }

        const fromDateObj = new Date(formData.fromDate);
        const toDateObj = new Date(formData.toDate);
        const currentYear = new Date().getFullYear();
        const fromYear = fromDateObj.getFullYear();
        const toYear = toDateObj.getFullYear();

        // Strict Year Validation
        if (isNaN(fromYear) || isNaN(toYear) || fromYear < currentYear || toYear < currentYear || fromYear > 2030 || toYear > 2030) {
            alert(`Please enter a valid year between ${currentYear} and 2030.`);
            return;
        }

        // Validation for Date range
        if (toDateObj < fromDateObj) {
            alert("The 'To Date' cannot be before the 'From Date'.");
            return;
        }

        // Format dates to be readable (e.g., 28 Jan 2026)
        const formatDateReadable = (dateStr) => {
            if (!dateStr) return "";
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        const formattedFrom = formatDateReadable(formData.fromDate);
        const formattedTo = formatDateReadable(formData.toDate);

        const message = `*New Booking Inquiry*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Mobile:* ${formData.mobile}\n` +
            `*From:* ${formattedFrom}\n` +
            `*To:* ${formattedTo}\n` +
            `*Time:* ${formData.pickupTime}\n` +
            `*Pickup:* ${formData.pickup}\n` +
            `*Destination:* ${formData.destination}\n` +
            `*Notes:* ${formData.notes || "None"}`;

        window.open(`https://wa.me/917012469588?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 md:py-20 pt-24 md:pt-28 relative overflow-hidden">
            {/* Background pattern or subtle accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <style jsx global>{`
                input[type="date"]::-webkit-datetime-edit-text,
                input[type="date"]::-webkit-datetime-edit-month-field,
                input[type="date"]::-webkit-datetime-edit-day-field,
                input[type="date"]::-webkit-datetime-edit-year-field {
                    color: transparent;
                }
                input[type="date"]:focus::-webkit-datetime-edit-text,
                input[type="date"]:focus::-webkit-datetime-edit-month-field,
                input[type="date"]:focus::-webkit-datetime-edit-day-field,
                input[type="date"]:focus::-webkit-datetime-edit-year-field,
                input[type="date"]:valid::-webkit-datetime-edit-text,
                input[type="date"]:valid::-webkit-datetime-edit-month-field,
                input[type="date"]:valid::-webkit-datetime-edit-day-field,
                input[type="date"]:valid::-webkit-datetime-edit-year-field {
                    color: inherit;
                }
            `}</style>
            <div className="container px-4 md:px-6 max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Book Your Ride
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Complete the form below to receive a custom quote via WhatsApp.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-xl overflow-hidden border p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile Number</Label>
                                <Input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    placeholder="+91 7012469588"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fromDate">From Date</Label>
                                <Input
                                    id="fromDate"
                                    name="fromDate"
                                    type="date"
                                    required
                                    min={today}
                                    max="2030-12-31"
                                    value={formData.fromDate}
                                    onChange={handleChange}
                                    className="placeholder:text-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="toDate">To Date</Label>
                                <Input
                                    id="toDate"
                                    name="toDate"
                                    type="date"
                                    required
                                    min={formData.fromDate || today}
                                    max="2030-12-31"
                                    value={formData.toDate}
                                    onChange={handleChange}
                                    className="placeholder:text-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pickupTime">Pickup Time</Label>
                                <select
                                    id="pickupTime"
                                    name="pickupTime"
                                    required
                                    value={formData.pickupTime}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="" disabled>Select Time</option>
                                    {timeSlots.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pickup">Pickup Location</Label>
                            <Input
                                id="pickup"
                                name="pickup"
                                placeholder="e.g. Trivandrum Airport"
                                required
                                value={formData.pickup}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="destination">Destination</Label>
                            <Input
                                id="destination"
                                name="destination"
                                placeholder="e.g. Taj Green Cove, Kovalam"
                                required
                                value={formData.destination}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Requirements (Optional)</Label>
                            <Textarea
                                id="notes"
                                name="notes"
                                placeholder="e.g. Specific car preference, decoration needed..."
                                value={formData.notes}
                                onChange={handleChange}
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full text-lg h-12">
                            Send Enquiry via WhatsApp
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    );
}
