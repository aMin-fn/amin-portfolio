import { metrics, siteConfig } from "@/data/portfolio";

import { ArrowIcon } from "../ui/arrow-icon";
import { Container } from "../ui/container";
import { SocialLinks } from "../ui/social-links";
import styles from "./sections.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div aria-hidden="true" className={styles.heroGlow} />
      <Container className={styles.heroInner}>
        <p className={styles.heroKicker} data-reveal>
          <span /> Frontend engineer · {siteConfig.location}
        </p>

        <h1 aria-label={siteConfig.name} className={styles.heroName} data-reveal>
          <span>AMIN</span>
          <span>FOROUZANDEH</span>
        </h1>

        <p className={styles.heroRole} data-reveal>
          {siteConfig.role}
        </p>
        <p className={styles.heroLead} data-reveal>
          I build fast, responsive React and Next.js products — with clean
          architecture for interfaces people use every day.
        </p>
        <p className={styles.heroSublead} data-reveal>
          3+ years across national services, analytical dashboards, AI products,
          and high-traffic B2C experiences.
        </p>

        <div className={styles.heroActions} data-reveal>
          <a className={styles.primaryButton} href="#work">
            See my work <ArrowIcon />
          </a>
          <a className={styles.secondaryButton} href={`mailto:${siteConfig.email}`}>
            Email me
          </a>
          <a className={styles.resumeLink} href={siteConfig.resume} target="_blank">
            Résumé (PDF) <ArrowIcon />
          </a>
        </div>

        <div className={styles.heroMetrics} data-reveal>
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <p className={styles.locationLine} data-reveal>
          {siteConfig.location} · {siteConfig.timezone} · Available for remote collaboration
        </p>
        <SocialLinks className={styles.heroSocials} />
      </Container>
    </section>
  );
}
