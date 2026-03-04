import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  const { name, colors: c } = siteConfig;
  return (
    <main className="min-h-screen" style={{ background: c.bgPrimary }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm mb-10" style={{ color: c.textMuted }}>Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: c.textSecondary }}>
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h2>
            <p>When you use {name}, we may collect the following information:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Name and email address (when you make a purchase or sign up)</li>
              <li>TradingView username (required to grant indicator access)</li>
              <li>Payment information (processed securely by our payment provider)</li>
              <li>Usage data and analytics (pages visited, time on site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Provide and manage your access to the Service</li>
              <li>Process payments and send purchase confirmations</li>
              <li>Respond to support requests</li>
              <li>Send important updates about the Service</li>
              <li>Improve the website and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers (e.g., payment processors, email platforms) solely to operate the Service. These providers are contractually bound to keep your data confidential.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">4. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Disabling cookies may affect certain features of the site.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide the Service and comply with legal obligations. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at the email below. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites (e.g., TradingView, Discord). We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">10. Contact</h2>
            <p>For privacy-related questions, contact us at <a href={siteConfig.links.contact} className="underline" style={{ color: c.accentLight }}>{siteConfig.links.contact.replace("mailto:", "")}</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-sm hover:text-white transition-colors" style={{ color: c.accentLight }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
