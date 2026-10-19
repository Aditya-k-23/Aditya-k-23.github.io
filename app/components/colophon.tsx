import { site } from "../../lib/site";

export function Colophon() {
  return (
    <footer className="colophon row">
      <div className="note">
        <p>Toronto</p>
      </div>
      <div>
        <div className="links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.links.orcid} target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
          <a href={site.links.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} {site.name}. Set in Newsreader and Geist
          Mono.
        </small>
      </div>
    </footer>
  );
}
