import { FaEnvelope, FaFileLines, FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa6";
import { site } from "../../lib/site";

const links = [
  { label: "Email", href: `mailto:${site.email}`, Icon: FaEnvelope, external: false },
  { label: "LinkedIn", href: site.links.linkedin, Icon: FaLinkedin, external: true },
  { label: "GitHub", href: site.links.github, Icon: FaGithub, external: true },
  { label: "ORCID", href: site.links.orcid, Icon: FaOrcid, external: true },
  { label: "Résumé", href: site.links.resume, Icon: FaFileLines, external: true },
];

export function SocialLinks() {
  return (
      <ul className="icon-links">
        {links.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          </li>
        ))}
      </ul>
  );
}

export function Colophon() {
  return (
    <footer className="colophon">
      <p>
        © {new Date().getFullYear()} {site.name}, Toronto
      </p>
      <SocialLinks />
    </footer>
  );
}
