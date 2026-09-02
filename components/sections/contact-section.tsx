import { siteConfig } from "@/data/portfolio";

import { ArrowIcon } from "../ui/arrow-icon";
import { Container } from "../ui/container";
import { SocialLinks } from "../ui/social-links";
import styles from "./sections.module.css";

export function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <Container>
        <div className={styles.contactShell}>
          <div aria-hidden="true" className={styles.contactGlow} />

          <div className={styles.contactCopy} data-reveal>
            <p className={styles.availabilityLabel}>
              <span aria-hidden="true" /> Available for frontend opportunities
            </p>
            <h2>Let&apos;s make a complex product feel simple.</h2>
            <p className={styles.contactLead}>
              Looking for a frontend developer who can own architecture, product UI,
              and delivery? Tell me what you&apos;re building.
            </p>

            <div className={styles.contactQuickFacts}>
              <div>
                <span>Based in</span>
                <strong>{siteConfig.location}</strong>
              </div>
              <div>
                <span>Time zone</span>
                <strong>{siteConfig.timezone}</strong>
              </div>
            </div>
          </div>

          <aside className={styles.contactCard} data-delay="100" data-reveal>
            <span>Preferred contact</span>
            <a className={styles.emailLink} href={`mailto:${siteConfig.email}`}>
              <span>
                <small>Email me</small>
                <strong>{siteConfig.email}</strong>
              </span>
              <i><ArrowIcon /></i>
            </a>

            <a className={styles.phoneLink} href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              <span>Phone</span>
              <strong>{siteConfig.phone}</strong>
            </a>

            <div className={styles.contactDivider} />
            <p className={styles.contactElsewhere}>Or find me here</p>
            <SocialLinks className={styles.contactSocials} withLabels />
          </aside>
        </div>
      </Container>
    </section>
  );
}
