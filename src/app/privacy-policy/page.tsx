import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-fraunces text-midnight-slate mb-8">
            Privacy Policy
          </h1>
          <p className="text-slate-600 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                JC Arbitrations, LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when contacting us or using our services.</li>
                <li><strong>Financial Information:</strong> Claim data, payment information, and other financial details necessary to provide our IDR and revenue recovery services.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Process and manage your claims and disputes</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">4. Disclosure of Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                <li><strong>With Your Consent:</strong> When you have given us permission to share your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">6. HIPAA Compliance</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                As a business associate handling protected health information (PHI), we comply with the Health Insurance Portability and Accountability Act (HIPAA) and maintain appropriate safeguards to protect the privacy and security of PHI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">7. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to or restrict processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-midnight-slate mb-4">9. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us at:
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
