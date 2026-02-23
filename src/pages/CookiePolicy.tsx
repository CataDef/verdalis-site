import { Leaf, ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
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
        <h1 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-2">Cookie Policy</h1>
        <p className="text-sm text-[hsl(215,10%,50%)] mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>Last updated: August 2025</p>

        <div className="prose prose-slate max-w-none space-y-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">1. What Are Cookies?</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">2. How We Use Cookies</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Verdalis Environmental Consulting uses cookies and similar technologies on our website. We use cookies to ensure the website functions correctly, to improve your browsing experience, and to understand how visitors use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div className="border border-[hsl(215,15%,90%)] rounded-lg overflow-hidden">
                <div className="bg-[hsl(210,20%,97%)] px-4 py-3 border-b border-[hsl(215,15%,90%)]">
                  <h4 className="font-semibold text-[hsl(215,50%,23%)] text-sm">Strictly Necessary Cookies</h4>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-[hsl(215,10%,42%)]">
                    These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as the website cannot function without them.
                  </p>
                </div>
              </div>

              <div className="border border-[hsl(215,15%,90%)] rounded-lg overflow-hidden">
                <div className="bg-[hsl(210,20%,97%)] px-4 py-3 border-b border-[hsl(215,15%,90%)]">
                  <h4 className="font-semibold text-[hsl(215,50%,23%)] text-sm">Analytics Cookies</h4>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-[hsl(215,10%,42%)]">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve the structure and content of our website. These cookies are only placed with your consent.
                  </p>
                </div>
              </div>

              <div className="border border-[hsl(215,15%,90%)] rounded-lg overflow-hidden">
                <div className="bg-[hsl(210,20%,97%)] px-4 py-3 border-b border-[hsl(215,15%,90%)]">
                  <h4 className="font-semibold text-[hsl(215,50%,23%)] text-sm">Functional Cookies</h4>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-[hsl(215,10%,42%)]">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences (language, region). They may be set by us or by third-party providers whose services we use on our pages. These cookies are only placed with your consent.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">4. Third-Party Cookies</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Some cookies on our website are set by third-party services. Specifically, we use Google Maps to display our office location on the contact page. Google may set cookies through this embedded content. We have no control over these third-party cookies. Please refer to Google's privacy policy for more information on their cookie practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">5. Managing Cookies</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li><strong>Browser settings:</strong> Most browsers allow you to view, manage, delete, and block cookies. Note that deleting or blocking cookies may affect your browsing experience and some features may not function properly.</li>
              <li><strong>Opt-out links:</strong> For analytics cookies, you can opt out by using the cookie consent mechanism on our website.</li>
            </ul>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mt-3">
              To manage cookies in your browser, please consult the help section of your browser or visit the browser manufacturer's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">6. Cookie Retention</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period of time or until you delete them manually. The retention period varies depending on the type and purpose of the cookie, but does not exceed 12 months for analytics cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">7. Legal Basis</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Strictly necessary cookies are placed based on our legitimate interest in providing a functioning website (GDPR Art. 6(1)(f)). All other cookies are placed only with your explicit consent (GDPR Art. 6(1)(a)), in accordance with the EU ePrivacy Directive and Romanian Law no. 506/2004.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">8. Changes to This Policy</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">9. Contact</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              If you have questions about our use of cookies, please contact us:<br /><br />
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
