export const metadata = {
  title: "Privacy Policy - Sigma Wedding Cars Trivandrum",
  description: "Learn how Sigma Wedding Cars collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gray-950 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Your privacy matters to us. Here&apos;s how we handle your information.
        </p>

      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none space-y-10">

          <Section title="1. Introduction">
            <p>
              Sigma Wedding Cars (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your personal information and your
              right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when
              you visit our website or make a booking with us.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, phone number, email address</li>
              <li><strong>Booking Details:</strong> Event date, time, pick-up/drop-off locations, vehicle preference</li>
              <li><strong>Communication Data:</strong> Messages sent via WhatsApp, email, or our contact form</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited (collected automatically via analytics)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and confirm your booking requests</li>
              <li>Send booking confirmations, reminders, and updates</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our website and service offerings</li>
              <li>Send occasional promotional messages (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share
              your information only in the following limited circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted partners who assist in operating our business (e.g., payment processors), bound by confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required to comply with applicable law or a valid legal process</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new entity</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Cookies &amp; Tracking">
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and
              analyze site usage. You can control cookies through your browser settings. Disabling cookies may affect
              certain features of the website.
            </p>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              Our website may contain links to third-party websites (e.g., WhatsApp, Instagram, Google Maps). We are
              not responsible for the privacy practices of those websites. We encourage you to review their privacy
              policies separately.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details below.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from minors. If you believe we have inadvertently collected such information, please contact
              us and we will promptly delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page
              reflects the most recent revision. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
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
