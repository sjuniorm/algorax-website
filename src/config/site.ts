// ============================================================
//  ALGORAX — SITE CONFIGURATION
//  Edit this single file to change ALL text, colors, images,
//  videos, links, and pricing across the entire website.
// ============================================================

export const siteConfig = {
  // ── BRAND ──────────────────────────────────────────────────
  name: "AlgoraX",

  // ── LINKS — replace with your real URLs ────────────────────
  links: {
    discord: "https://discord.gg/YOUR_INVITE",      // Your Discord invite
    getAccess: "#pricing",                           // Scrolls to pricing
    contact: "mailto:support@algorax.com",           // Your support email
  },

  // ── COLORS — change these 3 values to re-theme everything ─
  colors: {
    gradientFrom: "#3b82f6",   // Start of gradient  (blue)
    gradientVia:  "#7c3aed",   // Middle of gradient  (violet)
    gradientTo:   "#a855f7",   // End of gradient     (purple)

    bgPrimary:    "#030014",   // Page background
    bgSecondary:  "#080525",   // Alternating section bg
    bgCard:       "#0c0a2a",   // Card backgrounds
    bgCardHover:  "#14103a",   // Card hover state

    textPrimary:   "#ffffff",
    textSecondary: "#94a3b8",
    textMuted:     "#475569",

    accent:      "#7c3aed",
    accentLight: "#a78bfa",
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    badge: "NOW IN EARLY ACCESS",
    headline: "Stop Guessing.\nStart Trading with Clarity.",
    subtitle:
      "AlgoraX gives you real-time entries, automated TP & SL, and trend detection — directly on your TradingView chart.",
    // Paste a URL to your own background video or image (or leave "" for gradient-only)
    backgroundVideo: "",
    backgroundImage: "",
    stats: [
      { value: "8,200+", label: "Active Traders" },
      { value: "93%", label: "Satisfaction" },
      { value: "24/7", label: "Support" },
    ],
  },

  // ── SIGNAL PREVIEW (chart screenshot area) ─────────────────
  preview: {
    label: "SEE IT LIVE",
    title: "Every Signal. Right on Your Chart.",
    subtitle:
      "Real-time buy/sell entries, dynamic stop-loss, and auto take-profit levels — displayed the moment they appear.",
    // Replace with your own chart screenshot URL
    image: "",
  },

  // ── TRADING MODES (Zynalgo-inspired dual cards) ────────────
  tradingModes: {
    label: "TRADING STYLES",
    title: "Built for Every Market Condition",
    modes: [
      {
        name: "Trend Following",
        tagline: "Ride explosive moves",
        features: [
          "Early trend detection algorithms",
          "Multi-timeframe confirmation",
          "Momentum-based entry signals",
          "Smart trailing stop levels",
        ],
      },
      {
        name: "Range Trading",
        tagline: "Profit from consolidation",
        features: [
          "Precise support & resistance zones",
          "Range breakout alerts",
          "False breakout filtering",
          "Buy-low / sell-high signals",
        ],
      },
    ],
  },

  // ── FEATURES ───────────────────────────────────────────────
  features: {
    label: "WHAT YOU GET",
    title: "Professional Tools. Zero Complexity.",
    items: [
      {
        title: "Buy & Sell Signals",
        desc: "Precise entries on any market, any timeframe — no interpretation needed.",
        icon: "TrendingUp",
      },
      {
        title: "Auto TP & SL",
        desc: "Risk management drawn on your chart automatically so you always know your exit.",
        icon: "Shield",
      },
      {
        title: "Trend Dashboard",
        desc: "See real-time direction and momentum at a glance before placing any trade.",
        icon: "BarChart3",
      },
      {
        title: "Backtesting Engine",
        desc: "Find the optimal settings for any asset and timeframe with one click.",
        icon: "FlaskConical",
      },
      {
        title: "Phone Alerts",
        desc: "Get notified the instant a new signal fires — never miss another setup.",
        icon: "Bell",
      },
      {
        title: "Video Guides",
        desc: "Step-by-step tutorials to get you set up and profitable as fast as possible.",
        icon: "BookOpen",
      },
    ],
  },

  // ── HOW IT WORKS ───────────────────────────────────────────
  howItWorks: {
    label: "3 SIMPLE STEPS",
    title: "From Signal to Profit",
    steps: [
      {
        step: 1,
        title: "Spot the Setup",
        desc: "AlgoraX highlights a signal on your chart. Decide in seconds if it fits your plan.",
      },
      {
        step: 2,
        title: "Place Your Levels",
        desc: "Stop Loss and Take Profit are drawn for you — just place the trade.",
      },
      {
        step: 3,
        title: "Secure Your Gains",
        desc: "Close at your target. Repeat. Build consistency with every trade.",
      },
    ],
  },

  // ── TESTIMONIALS ───────────────────────────────────────────
  reviews: {
    label: "HEAR FROM TRADERS",
    title: "Don't Take Our Word for It",
    items: [
      {
        name: "Marcus T.",
        role: "Forex Trader",
        text: "The signals are incredibly clean. My entries improved within the first week.",
        rating: 5,
      },
      {
        name: "Sarah L.",
        role: "Crypto Trader",
        text: "The backtesting engine alone was worth it. I finally stopped second-guessing my strategy.",
        rating: 5,
      },
      {
        name: "David K.",
        role: "Day Trader",
        text: "Trend dashboard saves me hours. I know where momentum is headed before I even open a chart.",
        rating: 5,
      },
      {
        name: "Elena R.",
        role: "Swing Trader",
        text: "Setup took 5 minutes. Results showed up the same day. Genuinely impressed.",
        rating: 5,
      },
      {
        name: "James W.",
        role: "Index Trader",
        text: "No repainting, no BS. What appears on the chart stays there. Finally an honest tool.",
        rating: 5,
      },
      {
        name: "Ana P.",
        role: "Gold Trader",
        text: "The auto TP/SL feature changed everything for me. Risk management on autopilot.",
        rating: 5,
      },
    ],
  },

  // ── PRICING ────────────────────────────────────────────────
  pricing: {
    label: "PRICING",
    title: "One Investment. Unlimited Potential.",
    subtitle: "Choose the plan that fits your trading journey.",
    plans: [
      {
        name: "Monthly",
        price: "$67",
        period: "/mo",
        desc: "Flexible month-to-month access.",
        badge: "",
        features: [
          "Full indicator suite",
          "Video guide library",
          "Regular updates",
          "Community access",
          "Team support",
          "Cancel anytime",
        ],
        cta: "Start Trading",
        ctaLink: "#",
        highlighted: false,
      },
      {
        name: "Quarterly",
        price: "$179",
        period: "/quarter",
        desc: "Most popular — save 11% and stay committed.",
        badge: "BEST VALUE",
        features: [
          "Everything in Monthly",
          "Save 11% vs monthly",
          "Priority onboarding",
          "Exclusive strategy ideas",
          "Priority support",
          "Cancel anytime",
        ],
        cta: "Start Trading",
        ctaLink: "#",
        highlighted: true,
      },
      {
        name: "Lifetime",
        price: "$799",
        period: "/once",
        desc: "Pay once. Trade forever. Every future update included.",
        badge: "",
        features: [
          "Everything in Quarterly",
          "One-time payment",
          "All future features free",
          "VIP support",
          "Early access to new tools",
          "Lifetime community access",
        ],
        cta: "Get Lifetime Access",
        ctaLink: "#",
        highlighted: false,
      },
    ],
  },

  // ── FAQ ────────────────────────────────────────────────────
  faq: {
    label: "FAQ",
    title: "Quick Answers",
    items: [
      {
        q: "What happens after I purchase?",
        a: "Immediately after checkout you'll receive a confirmation with a link to your personal setup page. Add your TradingView username, and AlgoraX will appear under your Invite-Only Scripts within minutes.",
      },
      {
        q: "Does AlgoraX repaint?",
        a: "Never. Once a signal appears on your chart, it stays permanently. No hidden changes, no retroactive edits.",
      },
      {
        q: "What markets does it work on?",
        a: "Every market on TradingView — forex pairs, crypto, stocks, indices, commodities, and more.",
      },
      {
        q: "Does it work on all timeframes?",
        a: "Yes. From 1-minute scalps to weekly swing setups — AlgoraX adapts to any timeframe.",
      },
      {
        q: "Do I need to configure anything?",
        a: "It works out of the box. But you can fine-tune every setting, and the backtesting engine helps you find the best config for any market.",
      },
      {
        q: "Can I use it on mobile?",
        a: "Yes — AlgoraX runs on TradingView, which has a full mobile app for iOS and Android.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Absolutely. Cancel with one click, no questions asked. Lifetime plans never need cancellation.",
      },
    ],
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    disclaimer:
      "Trading involves substantial risk. This site and the products AlgoraX offers are for informational and educational purposes only. All content should be considered hypothetical and not construed as financial advice. Past performance does not guarantee future results.",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
};
