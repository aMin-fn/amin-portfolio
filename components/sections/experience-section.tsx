import Image from "next/image";

import { experiences } from "@/data/portfolio";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import styles from "./sections.module.css";

export function ExperienceSection() {
  return (
    <section className={styles.section} id="experience">
      <Container>
        <SectionHeading
          description="Three roles — from learning inside a production team to modernizing high-traffic national platforms."
          eyebrow="Where I’ve worked"
          title="Experience"
        />

        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <article
              className={styles.timelineItem}
              data-delay={index * 80}
              data-reveal
              key={experience.company}
            >
              <div className={styles.timelineIndex}>
                <Image
                  alt={`${experience.company} logo`}
                  className={styles.companyLogo}
                  height={52}
                  src={experience.image}
                  width={52}
                />
              </div>

              <div className={styles.timelineMain}>
                <div className={styles.timelineHeading}>
                  <div>
                    <p>{experience.role}</p>
                    <h3>{experience.company}</h3>

                    {experience.location && (
                      <span>{experience.location}</span>
                    )}
                  </div>

                  <time>{experience.period}</time>
                </div>

                <p className={styles.timelineSummary}>
                  {experience.summary}
                </p>

                <ul className={styles.timelineHighlights}>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className={styles.timelineTags}>
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}