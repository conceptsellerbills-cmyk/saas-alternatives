import { getAllPosts } from '../../../lib/posts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ category: string }> }

const CATEGORY_MAP: Record<string, { label: string; desc: string; keywords: string[] }> = {
  'analytics':             { label: 'Analytics',            desc: 'Best Google Analytics alternatives',            keywords: ['analytics','matomo','plausible'] },
  'messaging':             { label: 'Messaging',            desc: 'Best Slack & team chat alternatives',           keywords: ['slack','mattermost','discord','chat'] },
  'email-marketing':       { label: 'Email Marketing',      desc: 'Best Mailchimp & email tool alternatives',      keywords: ['mailchimp','email','brevo','sendinblue'] },
  'design':                { label: 'Design Tools',         desc: 'Best Figma & Canva alternatives',               keywords: ['figma','canva','design'] },
  'project-management':    { label: 'Project Management',   desc: 'Best Asana, Jira & Monday alternatives',        keywords: ['notion','asana','jira','monday','project'] },
  'ecommerce':             { label: 'E-commerce',           desc: 'Best Shopify & BigCommerce alternatives',       keywords: ['shopify','woocommerce','ecommerce','bigcommerce'] },
  'crm':                   { label: 'CRM',                  desc: 'Best HubSpot & Salesforce CRM alternatives',   keywords: ['hubspot','salesforce','crm'] },
  'hr-payroll':            { label: 'HR & Payroll',         desc: 'Best BambooHR & HR software alternatives',     keywords: ['bamboohr','hr','payroll','gusto'] },
  'customer-support':      { label: 'Customer Support',     desc: 'Best Zendesk & helpdesk alternatives',          keywords: ['zendesk','helpdesk','support','freshdesk'] },
  'marketing-automation':  { label: 'Marketing Automation', desc: 'Best ActiveCampaign & email automation alts',  keywords: ['activecampaign','automation','klaviyo'] },
  'accounting':            { label: 'Accounting',           desc: 'Best QuickBooks & accounting software alts',   keywords: ['quickbooks','accounting','xero','freshbooks'] },
  'developer-tools':       { label: 'Developer Tools',      desc: 'Best GitHub & DevOps platform alternatives',   keywords: ['github','gitlab','gitea','devops'] },
  'cloud-storage':         { label: 'Cloud Storage',        desc: 'Best Dropbox & cloud storage alternatives',    keywords: ['dropbox','cloud','storage','nextcloud'] },
  'password-manager':      { label: 'Password Manager',     desc: 'Best LastPass & password manager alternatives', keywords: ['lastpass','password','bitwarden','1password'] },
  'social-media':          { label: 'Social Media',         desc: 'Best Hootsuite & social media tool alts',      keywords: ['hootsuite','social','buffer','sprout'] },
  'seo-tools':             { label: 'SEO Tools',            desc: 'Best SEMrush & Ahrefs alternatives',           keywords: ['semrush','ahrefs','seo','moz'] },
  'lms':                   { label: 'LMS',                  desc: 'Best Teachable & online course platform alts', keywords: ['teachable','thinkific','course','lms'] },
  'surveys-forms':         { label: 'Survey & Forms',       desc: 'Best Typeform & form builder alternatives',    keywords: ['typeform','survey','jotform','form'] },
  'video-hosting':         { label: 'Video Hosting',        desc: 'Best Vimeo & video hosting alternatives',      keywords: ['vimeo','video','wistia','hosting'] },
  'time-tracking':         { label: 'Time Tracking',        desc: 'Best Toggl & time tracking alternatives',      keywords: ['toggl','time','clockify','harvest'] },
  'website-builder':       { label: 'Website Builder',      desc: 'Best Webflow & website builder alternatives',  keywords: ['webflow','framer','website','builder'] },
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = CATEGORY_MAP[category]
  if (!cat) return {}
  return {
    title: `${cat.label} Alternatives 2025 — Best SaaS Alternatives`,
    description: cat.desc,
    alternates: { canonical: `/category/${category}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = CATEGORY_MAP[category]
  if (!cat) notFound()

  const all = getAllPosts()
  const kw = cat.keywords
  const matched = all.filter((p) => {
    const text = ((p.keyword || '') + ' ' + (p.title || '') + ' ' + (p.slug || '')).toLowerCase()
    return kw.some((k) => text.includes(k))
  })
  const posts = matched.length > 0 ? matched : all

  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--bg:#080b14;--surface:#0f1420;--border:#1e2535;--text:#e4e8f4;--muted:#7a82a0;--accent:#8b5cf6;--accent2:#ec4899;--radius:12px}
        body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}
        a{text-decoration:none;color:inherit}
        .container{max-width:1100px;margin:0 auto;padding:0 24px}
        .cat-hero{padding:60px 24px 48px;text-align:center;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(139,92,246,0.15) 0%,transparent 70%)}
        .cat-badge{display:inline-block;padding:5px 16px;border-radius:20px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);color:var(--accent);font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px}
        .cat-hero h1{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;letter-spacing:-0.03em;margin-bottom:12px}
        .cat-hero p{color:var(--muted);font-size:1rem;max-width:560px;margin:0 auto 24px}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.8rem;color:var(--muted);justify-content:center;margin-bottom:32px}
        .breadcrumb a{color:var(--accent)}
        .post-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;padding-bottom:80px}
        .post-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;display:flex;flex-direction:column;transition:border-color 0.15s,transform 0.15s}
        .post-card:hover{border-color:var(--accent);transform:translateY(-2px)}
        .post-tag{display:inline-block;padding:3px 10px;border-radius:20px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);color:var(--accent2);font-size:0.68rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:12px}
        .post-card h2{font-size:1rem;font-weight:700;line-height:1.4;margin-bottom:10px}
        .post-card h2 a:hover{color:var(--accent)}
        .post-card p{color:var(--muted);font-size:0.87rem;line-height:1.65;flex:1;margin-bottom:18px}
        .post-footer{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid var(--border)}
        .post-date{font-size:0.72rem;color:var(--muted)}
        .post-link{font-size:0.82rem;color:var(--accent);font-weight:600}
        .empty{text-align:center;padding:80px 0;color:var(--muted)}
        @media(max-width:600px){.post-grid{grid-template-columns:1fr}}
      `}</style>

      <div className="cat-hero">
        <div className="cat-badge">Category</div>
        <h1>{cat.label} Alternatives</h1>
        <p>{cat.desc}</p>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>{cat.label}</span>
        </div>
      </div>

      <div className="container">
        {posts.length === 0 ? (
          <p className="empty">No articles yet — check back soon!</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.keyword && <span className="post-tag">{post.keyword}</span>}
                <h2><a href={`/${post.slug}`}>{post.title}</a></h2>
                <p>{post.description}</p>
                <div className="post-footer">
                  <span className="post-date">{post.date}</span>
                  <a href={`/${post.slug}`} className="post-link">Read →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
