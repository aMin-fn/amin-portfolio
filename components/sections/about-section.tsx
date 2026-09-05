import { siteConfig } from "@/data/portfolio";

import { ArrowIcon } from "../ui/arrow-icon";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import styles from "./sections.module.css";

const strengths = [
  ["Architecture", "Reusable systems that stay maintainable as products grow."],
  ["Product UI", "Responsive workflows that remain clear under real-world complexity."],
  ["Ownership", "From requirements and API integration through polish and delivery."],
] as const;

export function AboutSection() {
  return (
    <section className={`${styles.section} ${styles.aboutSection}`} id="about">
      <Container>
        <SectionHeading
          description="I work best on products where frontend is more than a collection of screens — complex forms, data-heavy workflows, reusable architecture, and interfaces people depend on."
          eyebrow="How I work"
          title="Clear interfaces. Strong foundations."
        />

        <div className={styles.aboutMosaic}>
          <article className={styles.aboutLeadCard} data-reveal>
            <div className={styles.aboutCardLabel}>
              <span>01</span>
              <p>Product mindset</p>
            </div>
            <h3>Complex workflows should still feel obvious.</h3>
            <p>
              I care about the parts users actually feel: how quickly a page becomes
              useful, how naturally a form behaves, and whether the interface stays
              clear when the product gets complicated.
            </p>
            <div className={styles.aboutLocation}>
              <i aria-hidden="true" />
              <span>{siteConfig.location} · Available for remote collaboration</span>
            </div>
          </article>

          <article className={styles.aboutStrengthsCard} data-delay="80" data-reveal>
            <div className={styles.aboutCardLabel}>
              <span>02</span>
              <p>What I bring</p>
            </div>
            <ul>
              {strengths.map(([title, description]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.aboutEducationCard} data-reveal>
            <div className={styles.aboutCardLabel}>
              <span>03</span>
              <p>Education</p>
            </div>
            <strong>B.Sc. Computer Engineering</strong>
            <p>University of Isfahan ,    ,   </p>
            <time>2022 — Present</time>
          </article>

          <article className={styles.aboutOwnershipCard} data-delay="80" data-reveal>
            <div className={styles.aboutCardLabel}>
              <span>04</span>
              <p>Best at</p>
            </div>
            <h3>Production ownership, not just implementation.</h3>
            <p>
              My strongest work sits where product thinking meets frontend engineering:
              multi-tenant architecture, dynamic forms, server-state workflows,
              analytical dashboards, and performance-focused React and Next.js delivery.
            </p>
            <div className={styles.aboutActions}>
              <a className={styles.primaryButton} href={`mailto:${siteConfig.email}`}>
                Let&apos;s talk <ArrowIcon />
              </a>
              <a className={styles.secondaryButton} href={siteConfig.linkedin} rel="noreferrer" target="_blank">
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
