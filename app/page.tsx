import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  Building2,
  HeartPulse,
  MapPin,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Evidence before promise",
    copy: "The stronger the claim, the stronger the proof should be. Especially when people, money or safety are involved.",
  },
  {
    number: "02",
    title: "Build for the real environment",
    copy: "A good idea must still work around unreliable networks, uneven infrastructure and the realities people actually live with.",
  },
  {
    number: "03",
    title: "Trust is an operating system",
    copy: "Clear ownership, honest limits and visible decisions are not paperwork. They are how serious businesses are built.",
  },
];

const topics = [
  "Building health technology without hiding the hard questions",
  "What development sites teach you about execution",
  "Founder-led product development from Nigeria",
  "The difference between a bold vision and an unsupported claim",
];

const careerStages = [
  {
    period: "2026–Present",
    title: "Founder & CEO, Maluel Limited",
    copy: "Directing the development of Ornia and building the company across the United Kingdom and Nigeria. Ornia remains in development and is not yet clinically validated or regulator-approved.",
  },
  {
    period: "2023–Present",
    title: "CEO, Marvel Homes",
    copy: "Leading property development, renovation, portfolio management and commercial growth, including more than US$3 million in closed negotiations and sales.",
  },
  {
    period: "2021–2023",
    title: "Operations & Project Manager, Marvel Homes",
    copy: "Managed construction and renovation delivery, budgets, contractors, quality assurance, client communication and coordination with architects and engineers.",
  },
  {
    period: "2015–2020",
    title: "Operations leadership, H-cue Catering",
    copy: "Progressed through Operations Supervisor, Business Development Manager, Customer Service Manager and Operations Manager roles across onshore and offshore locations.",
  },
  {
    period: "2012–2015",
    title: "Camp Manager, Genesis Group",
    copy: "Led offshore camp operations and service delivery across Nigeria and other African markets, including multinational teams and client groups.",
  },
  {
    period: "2012",
    title: "Customer Service, Maersk Line",
    copy: "Supported shipping operations and customer service, including the weekly coordination of more than 200 empty containers back to the terminal.",
  },
  {
    period: "2008–2012",
    title: "Operations & Logistics Coordinator, Tobee Grant",
    copy: "Built the early operating foundation for a career spanning logistics, customer service, offshore delivery, property and technology.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Raphael Eriemo, home">
          <span>R</span>
          <span className="brand-name">Raphael Eriemo</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#thinking">Thinking</a>
          <a href="#about">About</a>
        </nav>
        <div className="header-socials" aria-label="Social profiles">
          <a
            className="header-link"
            href="https://www.instagram.com/raphdegreat/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a
            className="header-link"
            href="https://www.linkedin.com/in/raphaeleriemo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>HealthTech founder</span>
            <span>Systems thinker</span>
            <span>Nigeria ↔ UK</span>
          </div>
          <h1>
            I build high-value solutions where <em>trust</em> cannot be optional.
          </h1>
          <div className="hero-lower">
            <p>
              I&apos;m Raphael G. U. Eriemo, founder of Maluel Limited and the
              builder behind Ornia. My work begins in health technology, then
              extends into property development and business strategy. Different
              sectors, yes. The same discipline sits underneath them: solve the
              real problem, structure the work and earn trust.
            </p>
            <a className="round-link" href="#work" aria-label="Explore my work">
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img
            src="/portraits/raphael-hero-cutout.webp"
            alt="Raphael G. U. Eriemo in a black suit"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
          <figcaption>
            <span>Raphael G. U. Eriemo</span>
            <span>HealthTech founder · Operator · Investor mindset</span>
          </figcaption>
        </figure>
        <div className="hero-index" aria-hidden="true">
          RGE / 01
        </div>
      </section>

      <section className="statement-band" aria-label="Personal positioning">
        <p>HealthTech</p>
        <span>•</span>
        <p>Property Development</p>
        <span>•</span>
        <p>Business Strategy</p>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-label">
          <span>01</span>
          <p>What I am building</p>
        </div>
        <div className="section-intro">
          <h2>Serious problems deserve disciplined solutions.</h2>
          <p>
            I work where the consequence of getting it wrong matters. That means
            staying close to the evidence, the operating reality and the people
            the solution is meant to serve.
          </p>
        </div>

        <div className="venture-grid">
          <article className="venture-card venture-dark venture-featured">
            <div className="venture-topline">
              <HeartPulse aria-hidden="true" />
              <span>Health technology · Primary focus</span>
            </div>
            <div>
              <p className="venture-role">Founder & CEO, Maluel Limited</p>
              <h3>Building infant monitoring technology with honesty built in.</h3>
              <p>
                Maluel is developing Ornia, an infant monitoring platform designed
                around local-first operation and a clear caregiver response chain.
                The technology is in development and is not yet a clinically
                validated or regulator-approved medical device.
              </p>
            </div>
            <div className="venture-links">
              <a href="https://maluel.com" target="_blank" rel="noreferrer">
                Maluel <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a href="https://myornia.com" target="_blank" rel="noreferrer">
                Ornia <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </article>

          <article className="venture-card venture-gold">
            <div className="venture-topline">
              <Building2 aria-hidden="true" />
              <span>Development, renovation & operations</span>
            </div>
            <div>
              <p className="venture-role">CEO, Marvel Homes</p>
              <h3>Developing property. Renovating value. Structuring trust.</h3>
              <p>
                Marvel Homes works across property development, renovation and
                management in Nigeria. We are currently delivering two projects.
                Our next commercial project is a shopping mall, planned to begin
                in late 2026.
              </p>
              <div className="venture-metrics" aria-label="Marvel Homes commercial track record">
                <div>
                  <strong>US$3M+</strong>
                  <span>Business negotiations and sales closed</span>
                </div>
                <div>
                  <strong>₦2B+</strong>
                  <span>Property portfolio under management</span>
                </div>
              </div>
            </div>
            <a href="https://marvelhomespm.com" target="_blank" rel="noreferrer">
              Visit Marvel Homes <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </article>
        </div>
      </section>

      <section id="thinking" className="thinking-section">
        <div className="section-shell">
          <div className="section-label section-label-light">
            <span>02</span>
            <p>How I think</p>
          </div>
          <div className="thinking-heading">
            <p className="eyebrow">A working philosophy</p>
            <h2>Evidence should match the consequence of being wrong.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell notes-section">
        <div className="section-label">
          <span>03</span>
          <p>What I talk about</p>
        </div>
        <div className="notes-layout">
          <div>
            <p className="eyebrow">Founder&apos;s field notes</p>
            <h2>I share the work while it is still becoming.</h2>
            <p className="notes-copy">
              Not a highlight reel. I write about decisions, trade-offs, mistakes
              and the thinking behind the businesses I am building.
            </p>
          </div>
          <ol className="topic-list">
            {topics.map((topic, index) => (
              <li key={topic}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{topic}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="career-section">
        <div className="section-shell">
          <div className="section-label section-label-light">
            <span>04</span>
            <p>Leadership record</p>
          </div>
          <div className="career-layout">
            <figure className="career-portrait">
              <img
                src="/portraits/raphael-career.webp"
                alt="Raphael Eriemo seated in a boardroom"
                width="1254"
                height="1254"
                loading="lazy"
              />
              <figcaption>Built through operations</figcaption>
            </figure>
            <div className="career-content">
              <div className="career-heading">
                <p className="eyebrow">The long view</p>
                <h2>Built across sectors. Accountable for people, revenue and delivery.</h2>
              </div>
              <div className="career-evidence" aria-label="Career scale and commercial responsibility">
                <article>
                  <strong>15+</strong>
                  <span>Years across operations, property and technology</span>
                </article>
                <article>
                  <strong>1,500+</strong>
                  <span>Staff and clients managed cumulatively</span>
                </article>
                <article>
                  <strong>US$4M+</strong>
                  <span>Annual turnover contributed to across real estate and oil-and-gas operations</span>
                </article>
              </div>
              <p className="career-scope">
                My operating experience has included African, Asian, European and
                American staff and client groups across onshore, offshore and
                multi-site environments.
              </p>
              <div className="career-grid">
                {careerStages.map((stage) => (
                  <article key={stage.period}>
                    <p className="career-period">{stage.period}</p>
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-shell">
        <figure className="about-portrait">
          <img
            src="/portraits/raphael-about.webp"
            alt="Raphael Eriemo in a beige suit"
            width="1086"
            height="1448"
            loading="lazy"
          />
          <figcaption aria-hidden="true">05</figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">About Raphael</p>
          <h2>Operator by experience. Builder by instinct.</h2>
          <p>
            My background sits at the intersection of computer science, project
            management and hands-on operations. Before health technology, I spent
            years managing people, properties, suppliers and commercial projects.
            I progressed from Operations and Project Manager into CEO of Marvel
            Homes, where I remain directly involved in property development,
            renovation, negotiations and portfolio management. Health technology
            is now my primary focus. That operating experience shaped how I build:
            start with the real
            problem, assign ownership and keep the promises measurable.
          </p>
          <p>
            I lead Maluel Limited in the United Kingdom and Marvel Homes in
            Nigeria. Through Maluel, I am directing the development of Ornia and
            related research into safer, more transparent home-use technology.
          </p>
          <p>
            I am a hands-on digital builder too. I created the current Marvel
            Homes website with Mobirise, shaping its structure, content and
            deployment around the business it serves.
          </p>
          <div className="location-line">
            <MapPin aria-hidden="true" size={17} />
            Building from Nigeria, connecting globally
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">Follow the journey</p>
          <h2>Let&apos;s build what people can trust.</h2>
        </div>
        <div className="social-links">
          <a
            className="social-button"
            href="https://www.instagram.com/raphdegreat/"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign aria-hidden="true" size={20} />
            @raphdegreat
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <a
            className="social-button"
            href="https://www.linkedin.com/in/raphaeleriemo"
            target="_blank"
            rel="noreferrer"
          >
            <span className="linkedin-mark" aria-hidden="true">in</span>
            LinkedIn
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="footer-base">
          <p>© {new Date().getFullYear()} Raphael G. U. Eriemo</p>
          <p>Built around clarity, evidence and useful work.</p>
        </div>
      </footer>
    </main>
  );
}
