import { Leaf, ArrowLeft } from "lucide-react";

export default function GDPRCompliance() {
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
        <h1 className="text-3xl lg:text-4xl font-bold text-[hsl(215,50%,23%)] mb-2">GDPR Compliance</h1>
        <p className="text-sm text-[hsl(215,10%,50%)] mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>Last updated: August 2025</p>

        <div className="prose prose-slate max-w-none space-y-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">1. Our Commitment to GDPR</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              Verdalis Ltd is fully committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We have implemented comprehensive measures to ensure that all personal data processing activities are lawful, fair, and transparent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">2. Data Protection Principles</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">We adhere to the following GDPR principles in all our data processing activities:</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li><strong>Lawfulness, fairness, and transparency:</strong> We process personal data lawfully and in a transparent manner.</li>
              <li><strong>Purpose limitation:</strong> Data is collected for specified, explicit, and legitimate purposes only.</li>
              <li><strong>Data minimization:</strong> We collect only the data that is necessary for the specified purposes.</li>
              <li><strong>Accuracy:</strong> We take reasonable steps to ensure personal data is accurate and kept up to date.</li>
              <li><strong>Storage limitation:</strong> Personal data is retained only as long as necessary for the purposes of processing.</li>
              <li><strong>Integrity and confidentiality:</strong> We implement appropriate security measures to protect personal data.</li>
              <li><strong>Accountability:</strong> We are responsible for and able to demonstrate compliance with GDPR.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">3. Data Processing Activities</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">We process personal data in the following contexts:</p>
            <ul className="list-disc pl-6 space-y-2 text-[hsl(215,10%,42%)]">
              <li><strong>Website contact forms:</strong> When you submit an inquiry through our website, we collect your name, email, phone number, company name, and message content.</li>
              <li><strong>Client relationships:</strong> When providing consulting services, we process client contact details and project-related information.</li>
              <li><strong>Website analytics:</strong> We may collect anonymized usage data to improve our website.</li>
              <li><strong>Employment:</strong> We process applicant and employee data in accordance with UK employment law and GDPR.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">4. Your Rights Under GDPR</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed mb-3">As a data subject, you have the following rights under GDPR:</p>
            <div className="space-y-4">
              {[
                { right: "Right of Access (Art. 15)", desc: "You may request a copy of the personal data we hold about you." },
                { right: "Right to Rectification (Art. 16)", desc: "You may request correction of any inaccurate or incomplete personal data." },
                { right: "Right to Erasure (Art. 17)", desc: "You may request deletion of your personal data, subject to legal retention requirements." },
                { right: "Right to Restriction (Art. 18)", desc: "You may request that we limit the processing of your personal data in certain circumstances." },
                { right: "Right to Data Portability (Art. 20)", desc: "You may request to receive your data in a structured, machine-readable format." },
                { right: "Right to Object (Art. 21)", desc: "You may object to processing based on legitimate interests or for direct marketing purposes." },
                { right: "Right to Withdraw Consent (Art. 7(3))", desc: "Where processing is based on consent, you may withdraw it at any time." },
              ].map((item) => (
                <div key={item.right} className="bg-[hsl(210,20%,97%)] rounded-lg p-4">
                  <h4 className="font-semibold text-[hsl(215,50%,23%)] text-sm mb-1">{item.right}</h4>
                  <p className="text-sm text-[hsl(215,10%,42%)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">5. How to Exercise Your Rights</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              To exercise any of your GDPR rights, please contact our data protection team:<br /><br />
              <strong>Verdalis Ltd</strong><br />
              Dept 2, 43 Owston Road, Carcroft, Doncaster DN6 8DA, England<br />
              Phone: <a href="tel:+40754900900" className="text-[hsl(152,35%,40%)] hover:underline">+40 754 900 900</a><br />
              Email: <a href="mailto:office@verdalis.eu" className="text-[hsl(152,35%,40%)] hover:underline">office@verdalis.eu</a><br /><br />
              We will respond to your request within 30 days. In complex cases, this period may be extended by an additional 60 days, in which case we will inform you of the extension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">6. Data Breach Notification</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              In the event of a personal data breach that is likely to result in a risk to the rights and freedoms of individuals, we will notify the Information Commissioner's Office (ICO) within 72 hours of becoming aware of the breach. If the breach is likely to result in a high risk, we will also notify the affected individuals without undue delay.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">7. International Data Transfers</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              We primarily process and store data within the European Economic Area (EEA). In the event that personal data is transferred outside the EEA, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(215,50%,23%)] mb-3">8. Supervisory Authority</h2>
            <p className="text-[hsl(215,10%,42%)] leading-relaxed">
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with:<br /><br />
              <strong>Information Commissioner's Office (ICO)</strong><br />
              Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF, United Kingdom<br />
              Website: <span className="text-[hsl(152,35%,40%)]">www.ico.org.uk</span>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
