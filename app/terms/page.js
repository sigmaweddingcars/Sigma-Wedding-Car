export const metadata = {
  title: "Terms & Conditions - Sigma Wedding Cars Trivandrum",
  description: "Read the Terms and Conditions for using Sigma Wedding Cars rental services in Trivandrum.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gray-950 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Terms &amp; <span className="text-primary">Conditions</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Please read these terms carefully before booking with Sigma Wedding Cars.
        </p>

      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none space-y-10">

          <Section title="1. Acceptance of Terms">
            <p>
              By booking any vehicle through Sigma Wedding Cars (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you (&quot;the Customer&quot;) agree to be
              bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not
              proceed with a booking.
            </p>
          </Section>

          <Section title="2. Booking &amp; Confirmation">
            <ul>
              <li>All bookings must be confirmed at least <strong>7 days</strong> in advance of the event date.</li>
              <li>A booking is considered confirmed only after a written confirmation (via WhatsApp or email) is sent by Sigma Wedding Cars.</li>
              <li>We reserve the right to decline any booking at our sole discretion.</li>
              <li>The Customer must provide accurate event details including date, time, pick-up and drop-off locations.</li>
            </ul>
          </Section>

          <Section title="3. Payment Policy">
            <ul>
              <li>An advance payment of <strong>30%–50%</strong> of the total booking amount is required to confirm a reservation.</li>
              <li>The remaining balance must be paid on or before the event day, prior to departure.</li>
              <li>We accept payments via bank transfer, UPI, or cash.</li>
              <li>All prices are inclusive of driver charges but exclusive of any fuel surcharges beyond the agreed route, if applicable.</li>
            </ul>
          </Section>

          <Section title="4. Cancellation &amp; Refund Policy">
            <ul>
              <li><strong>Cancellation 7+ days before the event:</strong> Full refund of the advance payment.</li>
              <li><strong>Cancellation 3–6 days before the event:</strong> 50% of the advance payment will be refunded.</li>
              <li><strong>Cancellation within 48 hours:</strong> No refund will be provided.</li>
              <li>Cancellations must be communicated in writing via WhatsApp or email.</li>
              <li>In exceptional circumstances (natural disasters, government restrictions), rescheduling will be offered with no additional charge.</li>
            </ul>
          </Section>

          <Section title="5. Vehicle Usage">
            <ul>
              <li>All vehicles are provided with a professional driver. Self-driving is not permitted.</li>
              <li>Smoking, consumption of alcohol, and any illegal activities inside the vehicle are strictly prohibited.</li>
              <li>Decoration of vehicles (e.g., flowers, ribbons) is allowed but must be arranged through us. No adhesives or tape may be applied directly to paintwork.</li>
              <li>The Customer is liable for any damage to the vehicle caused by themselves or their guests.</li>
              <li>Overtime charges will apply if the agreed service duration is exceeded.</li>
            </ul>
          </Section>

          <Section title="6. Our Responsibilities">
            <ul>
              <li>We will make every effort to provide the booked vehicle on time and in excellent condition.</li>
              <li>In the unlikely event of a vehicle breakdown, we will arrange an alternative vehicle of equal or higher class at no additional charge.</li>
              <li>We are not liable for delays caused by traffic, weather, or other unforeseen circumstances beyond our control.</li>
            </ul>
          </Section>

          <Section title="7. Liability">
            <p>
              Sigma Wedding Cars shall not be held liable for any indirect, incidental, or consequential damages arising
              from the use of our services. Our liability is limited to the value of the booking amount paid.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India.
              Any disputes arising shall be subject to the jurisdiction of the courts in Thiruvananthapuram, Kerala.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions about these Terms &amp; Conditions, please contact us:</p>
            <ul>
              <li>📞 Phone: <a href="tel:+917012469588" className="text-primary hover:underline">+91 7012469588</a></li>
              <li>📧 Email: <a href="mailto:Sigmaweddingcars24@gmail.com" className="text-primary hover:underline">Sigmaweddingcars24@gmail.com</a></li>
              <li>📍 Location: Law College, Thiruvananthapuram, Kerala</li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-l-4 border-primary pl-6 py-2">
      <h2 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-2 [&_a]:text-primary [&_a:hover]:underline">
        {children}
      </div>
    </div>
  );
}
