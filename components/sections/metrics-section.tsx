import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiLighthouse,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { marqueeSkills } from "@/data/portfolio";

import styles from "./sections.module.css";

type SkillName = (typeof marqueeSkills)[number];

const skillVisuals: Record<SkillName, { icon: IconType; color: string }> = {
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  HTML5: { icon: SiHtml5, color: "#e34f26" },
  CSS3: { icon: SiCss, color: "#1572b6" },
  "React.js": { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "var(--ink)" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  "TanStack Query": { icon: SiReactquery, color: "#ff4154" },
  Redux: { icon: SiRedux, color: "#8b6dcc" },
  "React Hook Form": { icon: SiReacthookform, color: "#ec5990" },
  Bootstrap: { icon: SiBootstrap, color: "#7952b3" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  "REST APIs": { icon: SiOpenapiinitiative, color: "#6ba539" },
  Performance: { icon: SiLighthouse, color: "#f44b21" },
};

function SkillItem({ skill }: { skill: SkillName }) {
  const { icon: Icon, color } = skillVisuals[skill];
  const itemStyle = { "--skill-color": color } as CSSProperties;

  return (
    <span className={styles.marqueeItem} role="listitem" style={itemStyle}>
      <i className={styles.skillIcon}>
        <Icon aria-hidden="true" />
      </i>
      <strong>{skill}</strong>
    </span>
  );
}

export function MetricsSection() {
  return (
    <section aria-label="Daily technologies" className={styles.marqueeSection}>
      <p className={styles.bigtext}>Day to day</p>
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup} role="list">
            {marqueeSkills.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
          <div aria-hidden="true" className={styles.marqueeGroup}>
            {marqueeSkills.map((skill) => (
              <SkillItem key={`duplicate-${skill}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
