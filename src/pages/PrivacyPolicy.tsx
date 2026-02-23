import { Leaf, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-[hsl(215,15%,90%)] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-[hsl(215,50%,23%)] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl tracking-tight font-semibold text-[hsl(215,50%,23%)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Verdalis
            </span>
          </a>
          <a href="/" className="flex items-center gap-1.5 text-sm font-medium text-[hsl(215,25%,35%)] hover:text-[hsl(215,50%,23%)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[hsl(215,10%,50%)] mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>Last updated: August 2025</p>

        <div className="prose prose-slate max-w-none space-y-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">1. Introduction</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Verdalis Ltd ("Verdalis", "we", "us", or "our") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">2. Data Controller</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              The data controller responsible for your personal data is:<br />
              <strong>Verdalis Ltd</strong><br />
              Dept 2, 43 Owston Road, Carcroft, Doncaster DN6 8DA, England<br />
              Company No: 04542138<br />
              Managing Director: Razvan Alecu<br />
              Phone: <a href="tel:+40754900900" className="text-[hsl(152,35%,40%)] hover:underline">+40 754 900 900</a><br />
              Email: <a href="mailto:office@verdalis.eu" className="text-[hsl(152,35%,40%)] hover:underline">office@verdalis.eu</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">3. Personal Data We Collect</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li><strong>Identity Data:</strong> Full name, job title, company name.</li>
              <li><strong>Contact Data:</strong> Email address, phone number, postal address.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system, and platform.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website.</li>
              <li><strong>Communication Data:</strong> Any information you provide when contacting us via our contact form, email, or phone.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">4. How We Use Your Data</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">We process your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li>To respond to your inquiries and provide consulting services.</li>
              <li>To send you relevant information about our services when you have given consent.</li>
              <li>To improve our website and services based on usage analytics.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To establish, exercise, or defend legal claims.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">5. Legal Basis for Processing</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">We process your personal data on the following legal bases under GDPR Article 6(1):</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li><strong>Consent (Art. 6(1)(a)):</strong> When you voluntarily submit a contact form or subscribe to communications.</li>
              <li><strong>Contractual necessity (Art. 6(1)(b)):</strong> When processing is necessary for the performance of a contract or pre-contractual measures.</li>
              <li><strong>Legitimate interest (Art. 6(1)(f)):</strong> For website analytics and service improvement.</li>
              <li><strong>Legal obligation (Art. 6(1)(c)):</strong> When we are required to process data to comply with UK law or applicable regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">6. Data Retention</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Contact form submissions are retained for a maximum of 24 months unless an ongoing business relationship exists.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">7. Your Rights</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li><strong>Right of access</strong> — to request a copy of your personal data.</li>
              <li><strong>Right to rectification</strong> — to request correction of inaccurate data.</li>
              <li><strong>Right to erasure</strong> — to request deletion of your personal data.</li>
              <li><strong>Right to restrict processing</strong> — to request limitation of processing.</li>
              <li><strong>Right to data portability</strong> — to receive your data in a structured, machine-readable format.</li>
              <li><strong>Right to object</strong> — to object to processing based on legitimate interests.</li>
              <li><strong>Right to withdraw consent</strong> — at any time, without affecting the lawfulness of prior processing.</li>
            </ul>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mt-3">
              To exercise any of these rights, please contact us at <a href="mailto:office@verdalis.eu" className="text-[hsl(152,35%,40%)] hover:underline">office@verdalis.eu</a> or call <a href="tel:+40754900900" className="text-[hsl(152,35%,40%)] hover:underline">+40 754 900 900</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">8. Data Security</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL/TLS encryption for data in transit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">9. Third-Party Services</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We may use third-party services (such as Google Maps for our office location) that have their own privacy policies. We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">10. Supervisory Authority</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) if you believe your data protection rights have been violated:<br />
              <strong>Information Commissioner's Office</strong><br />
              Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF, United Kingdom<br />
              Website: <span className="text-[hsl(152,35%,40%)]">www.ico.org.uk</span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">11. Changes to This Policy</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
