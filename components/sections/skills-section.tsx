import { skillGroups } from "@/data/portfolio";

import { Container } from "../ui/container";
import styles from "./sections.module.css";

export function SkillsSection() {
  return (
    <section aria-labelledby="stack-heading" className={styles.skillsSection} id="skills">
      <Container>
        <div className={styles.skillsHeader} data-reveal>
          <div>
            <p>Stack & tooling</p>
            <h2 id="stack-heading">Built for modern products.</h2>
          </div>
          <span>Focused on maintainability, speed, and clarity.</span>
        </div>
        <div className={styles.skillsGrid}>
          {skillGroups.map((group, index) => (
            <article data-delay={index * 70} data-reveal key={group.title}>
              <p>0{index + 1}</p>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
