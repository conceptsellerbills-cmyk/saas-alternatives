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
          .site-brand{font-size:1.1rem;font-weight:800;color:#fff;text-decoration:none;white-space:nowrap;display:flex;align-items:center;gap:9px;transition:color 0.15s}
          .site-brand:hover{color:#8b5cf6}
          .site-logo{flex-shrink:0;display:block}
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
            <a href="/" className="site-brand">
              <svg className="site-logo" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
              </svg>
              {SITE_NAME}
            </a>
            <nav className="cat-nav" tabIndex={0}>
              <button className="cat-btn" aria-haspopup="true">
                Categories
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4"/></svg>
              </button>
              <div className="cat-dropdown" role="menu">
              <a href="/category/analytics">📊 Analytics</a>
              <a href="/category/messaging">💬 Messaging</a>
              <a href="/category/email-marketing">📧 Email Marketing</a>
              <a href="/category/design">🎨 Design Tools</a>
              <a href="/category/project-management">📋 Project Management</a>
              <a href="/category/ecommerce">🛒 E-commerce</a>
              <a href="/category/crm">👥 CRM</a>
              <a href="/category/hr-payroll">👔 HR & Payroll</a>
              <a href="/category/customer-support">🎧 Customer Support</a>
              <a href="/category/marketing-automation">⚡ Marketing Automation</a>
              <a href="/category/accounting">💳 Accounting</a>
              <a href="/category/developer-tools">💻 Developer Tools</a>
              <a href="/category/cloud-storage">☁️ Cloud Storage</a>
              <a href="/category/password-manager">🔑 Password Manager</a>
              <a href="/category/social-media">📱 Social Media</a>
              <a href="/category/seo-tools">🔍 SEO Tools</a>
              <a href="/category/lms">🏫 LMS</a>
              <a href="/category/surveys-forms">📝 Survey & Forms</a>
              <a href="/category/video-hosting">🎥 Video Hosting</a>
              <a href="/category/time-tracking">⏱️ Time Tracking</a>
              <a href="/category/website-builder">🌐 Website Builder</a>
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
