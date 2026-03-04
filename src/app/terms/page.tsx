import { siteConfig } from "@/config/site";

export default function TermsPage() {
  const { name, colors: c } = siteConfig;
  return (
    <main className="min-h-screen" style={{ background: c.bgPrimary }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm mb-10" style={{ color: c.textMuted }}>Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: c.textSecondary }}>
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using {name} ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. Description of Service</h2>
            <p>{name} provides a TradingView indicator tool designed to assist traders with market analysis. The Service is provided for educational and informational purposes only and does not constitute financial advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. No Financial Advice</h2>
            <p>All content, signals, and tools provided by {name} are for informational and educational purposes only. Nothing on this platform constitutes financial, investment, or trading advice. You are solely responsible for your own trading decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">4. Risk Disclaimer</h2>
            <p>Trading financial instruments involves substantial risk of loss and is not suitable for every investor. Past performance is not indicative of future results. You may lose some or all of your invested capital.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">5. Account & Access</h2>
            <p>Access to {name} is granted upon purchase and is personal and non-transferable. You may not share, resell, or distribute your access credentials. We reserve the right to revoke access for violations of these terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">6. Payments & Refunds</h2>
            <p>All purchases are subject to our refund policy. Due to the digital nature of the product, refunds may be granted at our sole discretion within 7 days of purchase if the product has not performed as described.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">7. Intellectual Property</h2>
            <p>All content, code, and materials provided by {name} are the intellectual property of {name} and may not be copied, reproduced, or distributed without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">8. Limitation of Liability</h2>
            <p>{name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service, including any trading losses incurred based on signals or tools provided.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">10. Contact</h2>
            <p>For any questions regarding these Terms, please contact us at <a href={siteConfig.links.contact} className="underline" style={{ color: c.accentLight }}>{siteConfig.links.contact.replace("mailto:", "")}</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-sm hover:text-white transition-colors" style={{ color: c.accentLight }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
