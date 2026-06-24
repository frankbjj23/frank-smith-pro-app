import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Printer,
  Rocket,
  Sparkles,
  UserRound,
} from "lucide-react";
import { experience, profile, projects } from "./data/profile";

const navItems = ["Overview", "Projects", "Skills", "Resume", "Contact"];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Portfolio navigation">
        <a className="brand" href="#overview" aria-label="Frank Smith home">
          <span className="brand-mark">FS</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.headline}</small>
          </span>
        </a>

        <nav className="nav-list">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="sidebar-panel">
          <span>Availability</span>
          <strong>{profile.availability}</strong>
        </div>
      </aside>

      <div className="content">
        <section className="hero-section" id="overview">
          <div className="hero-copy">
            <div className="status-line">
              <Sparkles size={16} aria-hidden="true" />
              <span>{profile.headline} based in {profile.location}</span>
            </div>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.pitch}</p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email
              </a>
              <a className="button secondary" href={profile.resumeUrl}>
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
              <button className="button secondary" onClick={() => window.print()}>
                <Printer size={18} aria-hidden="true" />
                Print Resume
              </button>
              <a
                className="icon-button"
                href={profile.github}
                aria-label="GitHub profile"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                className="icon-button"
                href={profile.linkedin}
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label={`${profile.name} professional portrait`}>
            <picture>
              <source srcSet={profile.photoWebp} type="image/webp" />
              <img
                src={profile.photoUrl}
                alt="Frank Smith III in a professional portrait at a desk"
                width="1400"
                height="933"
              />
            </picture>
            <div className="preview-card">
              <UserRound size={20} aria-hidden="true" />
              <span>Full-stack developer + field operations</span>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Portfolio highlights">
          {profile.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <span>Selected Work</span>
            <h2>Projects built around practical workflows</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-image">
                  <picture>
                    {project.imageWebp ? (
                      <source srcSet={project.imageWebp} type="image/webp" />
                    ) : null}
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="1400"
                      height="875"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
                <div className="stack-list" aria-label={`${project.name} stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="link-row">
                  {project.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="section-action">
            <a
              className="button secondary"
              href={profile.projectsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={18} aria-hidden="true" />
              View complete project portfolio
            </a>
          </div>
        </section>

        <section className="split-section" id="skills">
          <div className="section-heading">
            <span>Skill Profile</span>
            <h2>Skills shaped by building and debugging</h2>
          </div>

          <div className="skills-layout">
            <div className="skill-cloud">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="strength-list">
              {profile.strengths.map((strength) => (
                <div className="strength-item" key={strength}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block resume-section" id="resume">
          <div className="section-heading">
            <span>Background</span>
            <h2>Experience, training, and work ethic</h2>
          </div>

          <div className="resume-summary">
            <div className="resume-copy">
              <UserRound size={20} aria-hidden="true" />
              <p>{profile.resumeSummary}</p>
            </div>
            <div className="resume-actions">
              <a className="button secondary" href={profile.resumeUrl}>
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
              <button className="button secondary" onClick={() => window.print()}>
                <Printer size={18} aria-hidden="true" />
                Print as PDF
              </button>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-marker" />
                <div>
                  <span>{item.dates}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="beyond-code" aria-labelledby="beyond-code-title">
          <picture>
            <source
              srcSet="/assets/frank-smith-iii-beyond-code.webp"
              type="image/webp"
            />
            <img
              src="/assets/frank-smith-iii-beyond-code.jpg"
              alt="Frank Smith III carrying a weighted bag on a mountain obstacle course"
              width="960"
              height="663"
              loading="lazy"
            />
          </picture>
          <div>
            <span>Beyond Code</span>
            <h2 id="beyond-code-title">Discipline that carries into the work</h2>
            <p>
              Field operations, Brazilian jiu-jitsu, and obstacle racing have
              reinforced preparation, steady problem-solving, accountability, and
              the value of staying composed under pressure. My main portfolio
              contains the fuller personal story; this resume keeps the focus on
              how those habits support dependable technical work.
            </p>
            <a
              className="inline-link"
              href="https://franksmithlll.com/about-frank-smith-iii-new-jersey"
              target="_blank"
              rel="noreferrer"
            >
              Read my professional background
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <span>Contact</span>
            <h2>Let’s talk about the role</h2>
            <p>
              Reach me directly, review my source code, open the complete portfolio,
              or read the technical notes behind selected projects.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <a
              className="button secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="button secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              className="button secondary"
              href={profile.website}
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={18} aria-hidden="true" />
              Main Portfolio
            </a>
            <a
              className="button secondary"
              href={profile.writingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={18} aria-hidden="true" />
              Technical Writing
            </a>
          </div>
        </section>

        <footer>
          <MapPin size={16} aria-hidden="true" />
          <span>{profile.location}</span>
          <BriefcaseBusiness size={16} aria-hidden="true" />
          <span>{profile.name} recruiter-focused developer resume</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
