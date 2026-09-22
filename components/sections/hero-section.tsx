import Image from "next/image";

import { metrics, projects, siteConfig } from "@/data/portfolio";

import { ArrowIcon } from "../ui/arrow-icon";
import { Container } from "../ui/container";
import { SocialLinks } from "../ui/social-links";
import styles from "./sections.module.css";

const showcase = projects
  .filter((project) => project.images?.[0])
  .slice(0, 3)
  .map((project) => ({
    title: project.title,
    image: project.images![0],
  }));

export function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div aria-hidden="true" className={styles.heroGlow} />
      <Container className={styles.heroInner}>
        <div className={styles.heroCopy}>
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
            I ship production React and Next.js for products people actually
            use — national utilities, multi-tenant government services, and AI
            interfaces.
          </p>
          <p className={styles.heroSublead} data-reveal>
            Sole or lead frontend on architecture, dynamic forms, dashboards,
            and mobile PWAs still running in the wild.
          </p>

          <div className={styles.heroActions} data-reveal>
            <a className={styles.primaryButton} href="#work">
              See my work <ArrowIcon />
            </a>
            <a className={styles.secondaryButton} href={`mailto:${siteConfig.email}`}>
              Email me
            </a>
            <a
              className={styles.resumeLink}
              href={siteConfig.resume}
              rel="noreferrer"
              target="_blank"
            >
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
            {siteConfig.location} · {siteConfig.timezone} · Available for remote
            collaboration
          </p>
          <SocialLinks className={styles.heroSocials} />
        </div>

        <div aria-hidden="true" className={styles.heroStage} data-reveal>
          {showcase.map((item, index) => (
            <figure
              className={styles.heroFrame}
              data-index={index}
              key={item.title}
            >
              <Image
                alt=""
                height={item.image.height}
                priority={index === 0}
                sizes="(max-width: 980px) 70vw, 28rem"
                src={item.image.src}
                width={item.image.width}
              />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
