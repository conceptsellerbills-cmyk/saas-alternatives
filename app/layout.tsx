import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "SaaS Alternatives";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saas-alternatives.com"),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "Expert guides, reviews and tips.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <style>{`
          .site-header{background:#08060f;border-bottom:1px solid rgba(255,255,255,0.07);padding:14px 0;position:sticky;top:0;z-index:100}
          .header-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;gap:24px}
          .site-brand{font-size:1.1rem;font-weight:800;color:#fff;text-decoration:none;white-space:nowrap}
          .site-brand:hover{color:#8b5cf6}
          .cat-nav{position:relative}
          .cat-btn{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#e2e8f0;font-size:0.875rem;font-weight:600;padding:8px 16px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;transition:background 0.15s,border-color 0.15s}
          .cat-btn:hover,.cat-nav:focus-within .cat-btn{background:rgba(255,255,255,0.1);border-color:#8b5cf6;color:#8b5cf6}
          .cat-btn svg{transition:transform 0.2s}
          .cat-nav:hover .cat-btn svg,.cat-nav:focus-within .cat-btn svg{transform:rotate(180deg)}
          .cat-dropdown{display:none;position:absolute;top:calc(100% + 8px);left:0;background:#1a1d2e;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:8px;min-width:220px;box-shadow:0 16px 48px rgba(0,0,0,0.5);z-index:200;max-height:70vh;overflow-y:auto}
          .cat-nav:hover .cat-dropdown,.cat-nav:focus-within .cat-dropdown{display:block}
          .cat-dropdown a{display:block;padding:9px 14px;border-radius:8px;color:#c8cad8;font-size:0.875rem;text-decoration:none;transition:background 0.1s,color 0.1s;white-space:nowrap}
          .cat-dropdown a:hover{background:rgba(255,255,255,0.06);color:#8b5cf6}
          .site-footer{border-top:1px solid rgba(255,255,255,0.07);padding:24px 0;margin-top:60px}
          .site-footer p{color:#6b7280;font-size:0.82rem;text-align:center}
        `}</style>
        <header className="site-header">
          <div className="header-inner">
            <a href="/" className="site-brand">{SITE_NAME}</a>
            <nav className="cat-nav" tabIndex={0}>
              <button className="cat-btn" aria-haspopup="true">
                Categories
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4"/></svg>
              </button>
              <div className="cat-dropdown" role="menu">
              <a href="/category/notion-alternatives">🔁 Notion Alternatives</a>
              <a href="/category/slack-alternatives">💬 Slack Alternatives</a>
              <a href="/category/figma-alternatives">🎨 Figma Alternatives</a>
              <a href="/category/airtable-alternatives">📊 Airtable Alternatives</a>
              <a href="/category/zapier-alternatives">🔗 Zapier Alternatives</a>
              <a href="/category/shopify-alternatives">🛒 Shopify Alternatives</a>
              <a href="/category/mailchimp-alternatives">📧 Mailchimp Alternatives</a>
              <a href="/category/zoom-alternatives">📹 Zoom Alternatives</a>
              <a href="/category/dropbox-alternatives">📁 Dropbox Alternatives</a>
              <a href="/category/hubspot-alternatives">📈 HubSpot Alternatives</a>
              <a href="/category/asana-alternatives">🎯 Asana Alternatives</a>
              <a href="/category/stripe-alternatives">💳 Stripe Alternatives</a>
              </div>
            </nav>
          </div>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
