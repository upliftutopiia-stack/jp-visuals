"use client";

import { useState } from "react";

const IG = "https://www.instagram.com/jpvisualsmedia/";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="JP Visuals home">
      <span className="logo-icon">JP<span>.</span></span>
      <span className="logo-text">VISUALS<br />MEDIA</span>
    </a>
  );
}

function Orb() {
  return (
    <div className="orb-scene" aria-label="Abstract original visual illustration">
      <div className="orb-cross orb-cross-a" />
      <div className="orb-cross orb-cross-b" />
      <div className="orb-ring orb-ring-a" />
      <div className="orb-ring orb-ring-b" />
      <div className="orb-ring orb-ring-c" />
      <div className="orb-core">
        <div className="orb-core-inner" />
      </div>
      <span className="orb-coordinate top-left">30°16&apos;N</span>
      <span className="orb-coordinate bottom-right">97°44&apos;W</span>
      <span className="orb-caption">VISUAL ENERGY / 001</span>
    </div>
  );
}

function VisualCard({
  number,
  title,
  detail,
  variant,
}: {
  number: string;
  title: string;
  detail: string;
  variant: string;
}) {
  return (
    <a
      className={`visual-card ${variant}`}
      href={IG}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View JP Visuals Instagram portfolio — ${title}`}
    >
      <div className="card-top">
        <span>JPV / {number}</span>
        <Arrow />
      </div>
      <div className="card-art" aria-hidden="true">
        {variant === "visual-a" && (
          <div className="art-disc"><span>JP</span></div>
        )}
        {variant === "visual-b" && (
          <div className="art-type">
            <span>CREATE</span>
            <span>IMPACT</span>
            <span>REPEAT</span>
          </div>
        )}
        {variant === "visual-c" && (
          <div className="art-eye">
            <div className="eye-outer"><div className="eye-inner" /></div>
          </div>
        )}
      </div>
      <div className="card-bottom">
        <div>
          <span className="card-category">CONCEPT ART / PORTFOLIO LINK</span>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
        <span className="card-link">VIEW WORK ↗</span>
      </div>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top">
      <div className="concept">
        INDEPENDENT DESIGN CONCEPT — NOT THE OFFICIAL JP VISUALS WEBSITE
      </div>

      <header className="header">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">WORK</a>
          <a href="#approach">APPROACH</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a
          className="header-cta"
          href={IG}
          target="_blank"
          rel="noopener noreferrer"
        >
          LET&apos;S CREATE <Arrow />
        </a>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {[
          ["WORK", "#work"],
          ["APPROACH", "#approach"],
          ["ABOUT", "#about"],
          ["CONTACT", "#contact"],
        ].map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label} <Arrow />
          </a>
        ))}
        <a href={IG} target="_blank" rel="noopener noreferrer">
          INSTAGRAM <Arrow />
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" />
            AUSTIN, TEXAS / CREATIVE MEDIA
          </div>

          <h1>
            MAKE IT
            <br />
            <span className="outline-text">IMPOSSIBLE</span>
            <br />
            TO <em>IGNORE.</em>
          </h1>

          <div className="hero-lower">
            <p>
              Visual storytelling for a world that never stops scrolling.
              Made to grab attention. Built to leave an impression.
            </p>
            <a className="round-arrow" href="#work" aria-label="Explore work">
              ↓
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-top">
            <span>JPV — VISUAL SYSTEM</span>
            <span>01 / 04</span>
          </div>
          <Orb />
          <div className="hero-visual-bottom">
            <span>FORM / MOTION / IMPACT</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Create something worth watching">
        <div className="ticker-track">
          CREATE SOMETHING WORTH WATCHING <span>✳</span> CREATE SOMETHING
          WORTH WATCHING <span>✳</span> CREATE SOMETHING WORTH WATCHING
          <span>✳</span>
        </div>
      </div>

      <section id="work" className="work section">
        <div className="section-top">
          <span>01 / SELECTED VISUAL DIRECTION</span>
          <span>THE WORK SPEAKS ↘</span>
        </div>

        <div className="work-heading">
          <h2>
            LESS TALK.
            <br />
            <span>MORE IMPACT.</span>
          </h2>
          <p>
            Explore the creative direction — then head to Instagram to see
            JP Visuals&apos; actual projects and recent shoots.
          </p>
        </div>

        <div className="visual-grid">
          <VisualCard
            number="001"
            title="THE ENERGY"
            detail="A bold visual language."
            variant="visual-a"
          />
          <VisualCard
            number="002"
            title="THE ATTENTION"
            detail="Ideas designed to stand out."
            variant="visual-b"
          />
          <VisualCard
            number="003"
            title="THE PERSPECTIVE"
            detail="See things differently."
            variant="visual-c"
          />
        </div>

        <div className="work-note">
          <span>
            GRAPHICS ABOVE ARE ORIGINAL WEBSITE CONCEPT ART — NOT CLIENT WORK.
          </span>
          <a href={IG} target="_blank" rel="noopener noreferrer">
            SEE REAL WORK ON INSTAGRAM <Arrow />
          </a>
        </div>
      </section>

      <section id="approach" className="approach section">
        <div className="section-top section-top-dark">
          <span>02 / THE APPROACH</span>
          <span>BEYOND ORDINARY</span>
        </div>

        <div className="approach-layout">
          <div className="approach-heading">
            <span className="orange-label">THE MINDSET</span>
            <h2>
              GOOD
              <br />
              CONTENT
              <br />
              <span>ISN&apos;T</span>
              <br />
              ENOUGH.
            </h2>
          </div>

          <div className="approach-content">
            <div className="approach-symbol" aria-hidden="true">✳</div>
            <p className="approach-lead">
              It has to <em>make you feel something.</em>
            </p>
            <p>
              In a feed full of noise, a strong visual identity makes the
              difference. This concept is built around the energy of modern
              media — attention, atmosphere, and memorable storytelling.
            </p>
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="line-link"
            >
              DISCOVER JP VISUALS <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="section-top">
          <span>03 / BEHIND THE LENS</span>
          <span>AUSTIN, TX</span>
        </div>

        <div className="about-layout">
          <div className="about-art">
            <div className="about-grid" />
            <div className="about-monogram">JP<span>.</span></div>
            <span className="about-art-label">THE CREATIVE SIDE OF AUSTIN</span>
          </div>

          <div className="about-copy">
            <span className="orange-label">MEET THE CREATIVE</span>
            <h2>
              DIFFERENT
              <br />
              BY <em>DESIGN.</em>
            </h2>
            <p>
              JP Visuals is an Austin-based media creator sharing recent
              projects and booking updates on Instagram.
            </p>
            <p>
              From creative shoots to brand-focused visuals, follow along to
              explore the work and get in touch about a project.
            </p>
            <a
              className="line-link dark-link"
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
            >
              FOLLOW @JPVISUALSMEDIA <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="statement-meta">
          <span>NOT ANOTHER BORING VISUAL.</span>
          <span>JPV / ATX</span>
        </div>
        <div className="statement-word">STAND<span>OUT.</span></div>
        <div className="statement-bottom">
          <span>BE SEEN. BE REMEMBERED.</span>
          <span>✳</span>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="section-top section-top-dark">
          <span>04 / LET&apos;S CONNECT</span>
          <span>YOUR NEXT PROJECT STARTS HERE</span>
        </div>

        <div className="contact-content">
          <div>
            <span className="orange-label">HAVE SOMETHING IN MIND?</span>
            <h2>
              LET&apos;S
              <br />
              MAKE
              <br />
              <em>NOISE.</em>
            </h2>
          </div>
          <div className="contact-right">
            <p>
              Got a shoot or creative project coming up? Reach out directly
              through JP Visuals&apos; Instagram to discuss availability.
            </p>
            <a
              className="contact-button"
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
            >
              GET IN TOUCH ON INSTAGRAM <Arrow />
            </a>
            <span className="contact-small">
              AUSTIN, TEXAS · INQUIRIES VIA INSTAGRAM
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <Logo />
          <div className="footer-links">
            <a href="#work">WORK</a>
            <a href="#approach">APPROACH</a>
            <a href={IG} target="_blank" rel="noopener noreferrer">
              INSTAGRAM ↗
            </a>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JP VISUALS — WEBSITE CONCEPT</span>
          <span>
            INDEPENDENT DEMO · NOT AFFILIATED WITH OR ENDORSED BY JP VISUALS
          </span>
        </div>
      </footer>
    </main>
  );
}