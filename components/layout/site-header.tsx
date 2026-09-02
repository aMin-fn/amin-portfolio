"use client";

import { useEffect, useState } from "react";

import { navigation, siteConfig } from "@/data/portfolio";

import { SocialLinks } from "../ui/social-links";
import styles from "./layout.module.css";

export function SiteHeader() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const themeFrame = requestAnimationFrame(() => {
      setDark(document.documentElement.dataset.theme === "dark");
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -62%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      cancelAnimationFrame(themeFrame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    localStorage.setItem("amin-theme", nextDark ? "dark" : "light");
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <SocialLinks className={styles.headerSocials} />

      <nav aria-label="Main navigation" className={styles.navigation}>
        {navigation.map((item) => (
          <a
            aria-current={active === item.href ? "page" : undefined}
            className={active === item.href ? styles.active : ""}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a aria-label="Back to top" className={styles.mobileWordmark} href="#home">
        {siteConfig.shortName}
      </a>

      <div className={styles.headerActions}>
        <a className={styles.hireButton} href={`mailto:${siteConfig.email}`}>
          Hire me
        </a>
        <a aria-label="Back to top" className={styles.wordmark} href="#home">
          {siteConfig.shortName}
        </a>
        <button
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          className={styles.themeButton}
          onClick={toggleTheme}
          type="button"
        >
          {dark ? (
            <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 15.3A8.2 8.2 0 0 1 8.7 4a8.2 8.2 0 1 0 11.3 11.3Z" /></svg>
          )}
        </button>
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <div className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`}>
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <SocialLinks className={styles.mobileSocials} withLabels />
        </div>
      ) : null}
    </header>
  );
}
