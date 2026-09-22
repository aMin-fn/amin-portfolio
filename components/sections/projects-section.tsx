import { projects, siteConfig } from "@/data/portfolio";

import { ArrowIcon } from "../ui/arrow-icon";
import { Container } from "../ui/container";
import { ProjectVisual } from "../ui/project-visual";
import { SectionHeading } from "../ui/section-heading";
import styles from "./sections.module.css";

export function ProjectsSection() {
  return (
    <section className={`${styles.section} ${styles.projectsSection}`} id="work">
      <Container>
        <SectionHeading
          description="Real product work across student workflows, public services, utility PWAs, data-heavy dashboards, and applied AI."
          eyebrow="Selected projects"
          title="Products & platforms"
        />

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const links =
              project.links ??
              (project.hideAction
                ? []
                : [
                    {
                      label: "Request details",
                      href: `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${project.title} case study`)}`,
                    },
                  ]);

            return (
              <article
                className={`${styles.projectCard} ${project.featured ? styles.featuredProject : ""}`}
                data-delay={(index % 2) * 100}
                data-reveal
                key={project.title}
              >
                <ProjectVisual
                  eyebrow={project.eyebrow}
                  image={project.image}
                  imagePresentation={project.imagePresentation}
                  images={project.images}
                  index={index}
                  priority={index === 0}
                  title={project.title}
                  tone={project.tone}
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectTitleRow}>
                    <div>
                      <p>{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span
                      className={styles.projectStatus}
                      data-status={project.status}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className={styles.projectRole}>
                    <span>Role</span>
                    <strong>{project.role}</strong>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <ul className={styles.projectContributions}>
                    {project.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <strong className={styles.projectOutcome}>{project.outcome}</strong>
                  <ul className={styles.projectTech}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className={styles.projectFooter}>
                    <span>
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                    {links.length > 0 ? (
                      <div className={styles.projectLinks}>
                        {links.map((link) => (
                          <a
                            href={link.href}
                            key={link.href}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                          >
                            {link.label} <ArrowIcon />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
