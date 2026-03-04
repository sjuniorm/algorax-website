import { siteConfig } from "@/config/site";

export default function DisclaimerPage() {
  const { name, colors: c } = siteConfig;
  return (
    <main className="min-h-screen" style={{ background: c.bgPrimary }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Disclaimer</h1>
        <p className="text-sm mb-10" style={{ color: c.textMuted }}>Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: c.textSecondary }}>
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">No Financial Advice</h2>
            <p>The information provided by {name} is for general informational and educational purposes only. Nothing on this website, within the indicator, or in any related communications constitutes financial, investment, trading, or any other type of professional advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Trading Risk</h2>
            <p>Trading financial instruments — including forex, cryptocurrencies, stocks, commodities, and indices — involves substantial risk of loss. Markets are volatile and unpredictable. You should never trade with money you cannot afford to lose. A significant percentage of retail traders lose money.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Past Performance</h2>
            <p>Any past performance figures, win rates, or results shown on this website are hypothetical or historical and do not guarantee future performance. Simulated or backtested results have inherent limitations and may not reflect actual trading conditions including slippage, liquidity, and market impact.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Independent Decision Making</h2>
            <p>All trading decisions are made solely by you. {name} does not control, direct, or execute any trades on your behalf. You are fully responsible for evaluating any signals, tools, or information provided and for all resulting outcomes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">No Guarantee of Results</h2>
            <p>{name} makes no representations or warranties that the use of this indicator will result in profits. Individual results will vary significantly based on market conditions, account size, risk management, and trader behavior.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Third-Party Platforms</h2>
            <p>{name} operates as a TradingView indicator. We are not affiliated with TradingView, any broker, or any financial institution. Use of third-party platforms is subject to their own terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Seek Professional Advice</h2>
            <p>Before making any investment or trading decisions, we strongly recommend consulting a qualified and regulated financial advisor who understands your personal financial situation and risk tolerance.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, {name} and its owners, operators, and affiliates shall not be liable for any trading losses, financial damages, or other losses of any kind arising from the use of or reliance on this website or its tools.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>If you have questions about this disclaimer, please contact us at <a href={siteConfig.links.contact} className="underline" style={{ color: c.accentLight }}>{siteConfig.links.contact.replace("mailto:", "")}</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-sm hover:text-white transition-colors" style={{ color: c.accentLight }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
