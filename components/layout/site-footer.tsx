import { siteConfig } from "@/data/portfolio";

import { SocialLinks } from "../ui/social-links";
import { Container } from "../ui/container";
import styles from "./layout.module.css";

export function SiteFooter() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.footerInner}>
        <p>{siteConfig.name} © {currentYear}</p>
        <p>Designed & built with Next.js</p>
        <SocialLinks className={styles.footerSocials} />
      </Container>
    </footer>
  );
}
