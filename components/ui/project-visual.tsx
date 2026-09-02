import Image from "next/image";

import type { Project } from "@/types/portfolio";

import { ProjectGallery } from "./project-gallery";
import styles from "./ui.module.css";

type ProjectVisualProps = Pick<Project, "title" | "eyebrow" | "tone" | "image" | "images" | "imagePresentation"> & {
  index: number;
};

export function ProjectVisual({ title, eyebrow, tone, image, images, imagePresentation, index }: ProjectVisualProps) {
  if (images?.length) {
    return (
      <div className={`${styles.projectVisual} ${styles.galleryVisual} ${imagePresentation === "mobile" ? styles.mobileGalleryVisual : ""}`}>
        <ProjectGallery images={images} presentation={imagePresentation} title={title} />
      </div>
    );
  }

  if (image) {
    return (
      <div className={`${styles.projectVisual} ${styles[tone]}`}>
        <Image
          alt={image.alt}
          className={styles.projectImage}
          height={image.height}
          sizes="(max-width: 760px) 100vw, 60vw"
          src={image.src}
          width={image.width}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`${styles.projectVisual} ${styles[tone]}`}>
      <div className={styles.visualHeader}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{eyebrow}</span>
      </div>
      <div className={styles.appWindow}>
        <div className={styles.windowTop}>
          <div><span /><span /><span /></div>
          <i />
        </div>
        <div className={styles.windowBody}>
          <aside>
            <strong>{title.slice(0, 1)}</strong>
            <span /><span /><span /><span />
          </aside>
          <div className={styles.dashboard}>
            <div className={styles.dashboardTop}>
              <div><small>Overview</small><strong>{title}</strong></div>
              <b>Live</b>
            </div>
            <div className={styles.chartCard}>
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className={styles.miniCards}>
              <div><small>Users</small><strong>{index === 2 ? "1.4K" : "5K+"}</strong></div>
              <div><small>Uptime</small><strong>99.9%</strong></div>
              <div><small>Speed</small><strong>Fast</strong></div>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.visualCode}>{`0${index + 1} / AF`}</span>
    </div>
  );
}
