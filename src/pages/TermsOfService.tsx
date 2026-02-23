import { Leaf, ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
        <h1 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-2">Terms of Service</h1>
        <p className="text-sm text-[hsl(215,10%,50%)] mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>Last updated: August 2025</p>

        <div className="prose prose-slate max-w-none space-y-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">1. General Information</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              These Terms of Service ("Terms") govern your use of the website operated by Verdalis Environmental Consulting S.R.L. ("Verdalis", "we", "us"), a company registered in Romania, with its registered office at 47 Calea Victoriei, Bucharest 010063, Romania. By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">2. Services</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Verdalis provides environmental consulting services including, but not limited to, Environmental Impact Assessments, regulatory compliance auditing, water and waste management consulting, air quality monitoring, biodiversity assessments, and sustainability strategy development. The specific scope, terms, and fees for any consulting engagement are defined in individual service agreements between Verdalis and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">3. Website Use</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">By using this website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li>Use the website only for lawful purposes and in accordance with these Terms.</li>
              <li>Not engage in any activity that could damage, disable, or impair the website.</li>
              <li>Not attempt to gain unauthorized access to any part of the website or its systems.</li>
              <li>Provide accurate and truthful information when submitting forms or inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">4. Intellectual Property</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              All content on this website — including text, graphics, logos, images, and software — is the property of Verdalis Environmental Consulting S.R.L. or its licensors and is protected by Romanian and international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">5. Disclaimer of Warranties</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              The information provided on this website is for general informational purposes only and does not constitute professional environmental, legal, or regulatory advice. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information. Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">6. Limitation of Liability</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              To the fullest extent permitted by Romanian law, Verdalis shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the website. Our total liability for any claim arising from the use of this website shall not exceed the amount paid by you, if any, for accessing the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">7. Third-Party Links</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by Verdalis. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">8. Governing Law</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Romania. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Bucharest, Romania.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">9. Modifications</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">10. Contact</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              For questions about these Terms, please contact us at:<br />
              <strong>Verdalis Environmental Consulting S.R.L.</strong><br />
              47 Calea Victoriei, Bucharest 010063, Romania<br />
              Phone: <a href="tel:+40754900900" className="text-[hsl(152,35%,40%)] hover:underline">+40 754 900 900</a><br />
              Email: <a href="mailto:office@verdalis.eu" className="text-[hsl(152,35%,40%)] hover:underline">office@verdalis.eu</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
