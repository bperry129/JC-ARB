import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-8">
            Terms of Service
          </h1>
          <p className="text-slate-600 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using the services provided by JC Arbitrations, LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">2. Services Provided</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                JC Arbitrations provides Independent Dispute Resolution (IDR) services, revenue recovery, denial management, and related healthcare billing services for out-of-network providers. Our services include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Federal IDR filing and representation</li>
                <li>New York State IDR filings</li>
                <li>Denial management and appeals</li>
                <li>Out-of-network negotiations</li>
                <li>Provider credentialing</li>
                <li>Revenue cycle management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">3. Client Responsibilities</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Provide accurate and complete information regarding claims and disputes</li>
                <li>Respond promptly to requests for documentation or information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees as agreed upon in your service agreement</li>
                <li>Maintain the confidentiality of any login credentials or access information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">4. Fees and Payment</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fees for our services will be outlined in your individual service agreement. Payment terms may include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Contingency-based fees (percentage of recovered amounts)</li>
                <li>Flat fees for specific services</li>
                <li>Hybrid fee structures</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                All fees are non-refundable unless otherwise specified in your service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">5. Confidentiality</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We maintain strict confidentiality of all client information and comply with HIPAA regulations. We will not disclose your information except as required by law or as necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">6. No Guarantee of Results</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                While we strive to achieve the best possible outcomes for our clients, we cannot guarantee specific results. The success of any claim or dispute depends on various factors, including the merits of the case, payer policies, and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, JC Arbitrations shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability shall not exceed the fees paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">8. Termination</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Either party may terminate the service agreement with written notice as specified in your individual agreement. Upon termination, you remain responsible for any fees incurred prior to termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">9. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">10. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the updated terms on our website and updating the "Effective Date" at the top of this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">11. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="text-slate-600 mb-2"><strong>JC Arbitrations, LLC</strong></p>
                <p className="text-slate-600 mb-2">Email: <a href="mailto:info@jcarbitrations.com" className="text-recovery-teal hover:underline">info@jcarbitrations.com</a></p>
                <p className="text-slate-600">Phone: <a href="tel:631-601-5219" className="text-recovery-teal hover:underline">631-601-5219</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
