import { skillGroups } from "@/data/portfolio";
import { FiCode, FiDatabase, FiLayers, FiTool } from "react-icons/fi";

import { Container } from "../ui/container";
import styles from "./sections.module.css";

const groupMeta = [
  {
    description:
      "The typed, browser-native foundation behind every interface.",
    icon: FiCode,
  },
  {
    description:
      "Component-driven systems for responsive, production-ready products.",
    icon: FiLayers,
  },
  {
    description:
      "Predictable data flows, resilient forms, and reliable API integration.",
    icon: FiDatabase,
  },
  {
    description:
      "The practices that keep products fast, maintainable, and ready to ship.",
    icon: FiTool,
  },
] as const;

export function SkillsSection() {
  return (
    <section
      aria-labelledby="stack-heading"
      className={styles.skillsSection}
      id="skills"
    >
      <Container>
        <div className={styles.skillsIntro} data-reveal>
          <div>
            <p>Stack & tooling</p>
            <h2 id="stack-heading">Tools I trust in production.</h2>
          </div>

          <span>
            A focused toolkit for building clear interfaces, complex workflows,
            and frontend systems that stay maintainable as products grow.
          </span>
        </div>

        <div className={styles.skillsBento}>
          {skillGroups.map((group, index) => {
            const Icon = groupMeta[index].icon;

            return (
              <article
                className={`${styles.skillCard} ${
                  index === 1 ? styles.featuredSkillCard : ""
                } ${index > 1 ? styles.wideSkillCard : ""}`}
                data-delay={index * 70}
                data-reveal
                key={group.title}
              >
                <header className={styles.skillCardHeader}>
                  <span className={styles.skillCardIcon}>
                    <Icon aria-hidden="true" />
                  </span>

                  <span className={styles.skillCardIndex}>
                    0{index + 1}
                  </span>
                </header>

                <div className={styles.skillCardCopy}>
                  <h3>{group.title}</h3>
                  <p>{groupMeta[index].description}</p>
                </div>

                <ul className={styles.skillPills}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}