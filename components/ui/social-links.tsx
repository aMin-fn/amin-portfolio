import type { IconType } from "react-icons";
import { FiMail } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

import { siteConfig } from "@/data/portfolio";
import { SlSocialLinkedin } from "react-icons/sl";

type SocialLinksProps = {
  className?: string;
  withLabels?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export function SocialLinks({
  className = "",
  withLabels = false,
}: SocialLinksProps) {
  const links: SocialLink[] = [
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: FiMail,
    },
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: SiGithub,
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: SlSocialLinkedin,
    },
  ];

  return (
    <div aria-label="Social links" className={className}>
      {links.map(({ label, href, icon: Icon }) => {
        const isExternal = href.startsWith("http");

        return (
          <a
            aria-label={label}
            href={href}
            key={label}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
            title={label}
          >
            <Icon aria-hidden="true" focusable="false" />

            {withLabels && <span>{label}</span>}
          </a>
        );
      })}
    </div>
  );
}