import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
  ExternalLink,
  Layers3,
  Database,
  Server,
  MonitorSmartphone,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "React Router",
      "Formik",
      "Yup",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "JWT",
      "OTP Verification",
      "RBAC",
    ],
  },
  {
    title: "Database & ORM",
    icon: Database,
    items: ["MariaDB", "MySQL", "MongoDB", "Redis", "TypeORM", "SQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Layers3,
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "Render",
      "Nginx",
      "PM2",
      "Razorpay",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "Housecaller",
    type: "Live home services platform",
    description:
      "A customer-facing home services platform focused on service discovery and booking. Contributed responsive interfaces and integrated key customer and order workflows.",
    stack: ["React.js", "TypeScript", "REST APIs", "Axios", "Razorpay"],
    url: "https://www.thehousecaller.com",
    label: "Visit website",
    visual: "housecaller",
    points: [
      "Service discovery, category navigation and search",
      "Login, OTP verification and address management",
      "Booking, checkout, payment and invoice workflows",
    ],
  },
  {
    number: "02",
    name: "Freyza Salon",
    type: "Full-stack admin management system",
    description:
      "An administration system for salon operations and website content, with secure access controls and structured management modules.",
    stack: ["React", "TypeScript", "NestJS", "TypeORM", "MariaDB", "JWT"],
    url: "https://guardwelluae.com",
    label: "Visit website",
    visual: "freyza",
    points: [
      "Services, categories, bookings, gallery and blog management",
      "JWT authentication and role-based permissions",
      "REST APIs, relational schemas and image workflows",
    ],
  },
  {
    number: "03",
    name: "Twitter Clone",
    type: "Full-stack social media application",
    description:
      "A social application with authenticated user interactions, media uploads and caching-backed API workflows.",
    stack: ["React", "TypeScript", "NestJS", "MariaDB", "Redis", "Cloudinary"],
    url: "",
    label: "Project details",
    visual: "twitter",
    points: [
      "Tweets, profiles, bookmarks and user interactions",
      "JWT authentication and protected routes",
      "Cloudinary media storage and Redis caching",
    ],
  },
];

const experience = [
  "Develop and maintain web applications using React.js, TypeScript, NestJS, TypeORM and MariaDB.",
  "Contribute to Housecaller, a live home services platform, building responsive service listings, category navigation, search and service detail interfaces.",
  "Integrate REST APIs for authentication, OTP verification, address management, service discovery, bookings and order creation.",
  "Implement checkout workflows with Razorpay payment integration and Cash on Delivery support.",
  "Build features for the Freyza Salon Admin Management System, including service management, bookings, website content, authentication and role-based permissions.",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Education", "#education"],
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Mohd Uvaish home"
        >
          <span className="brand-mark">MU</span>
          <span>Mohd Uvaish</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> FULL-STACK WEB DEVELOPER
            </div>
            <h1>
              Building useful digital experiences,{" "}
              <span>from interface to API.</span>
            </h1>
            <p className="hero-intro">
              I'm Mohd Uvaish, a Full-Stack Web Developer focused on building
              responsive web applications, reliable REST APIs and practical
              product experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-light" href="/resume.pdf" download>
                Download resume <Download size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Dehradun, Uttarakhand
              </span>
              <a href="mailto:mohd.uvaish.malik79@gmail.com">
                <Mail size={15} /> Get in touch
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <div className="hero-card-top">
              <span>PROFILE / 2026</span>
              <Code2 size={19} />
            </div>
            <div className="profile-photo-wrap">
              <div className="monogram">
                MU<span>.</span>
              </div>
              <img
                className="profile-photo"
                src="/images/profile.jpg"
                alt="Portrait of Mohd Uvaish"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="hero-card-bottom">
              <div>
                <strong>Full-Stack</strong>
                <span>Web Developer</span>
              </div>
              <div className="card-line" />
              <p>
                Turning product requirements into thoughtful, production-facing
                web experiences.
              </p>
            </div>
          </aside>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section
          className="section-wrap section-block about-section"
          id="about"
        >
          <div className="section-heading">
            <span className="section-kicker">01 / ABOUT</span>
            <h2>
              A developer who cares about <span>how things work.</span>
            </h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              I build web applications across the frontend and backend, with a
              focus on clear interfaces, maintainable code and dependable
              application workflows.
            </p>
            <div className="about-details">
              <p>
                My experience includes developing live product features,
                integrating REST APIs, modelling relational data and
                implementing authentication, booking and payment workflows.
              </p>
              <p>
                I enjoy working across the stack — understanding the user
                experience while also building the systems that support it.
              </p>
              <a
                className="text-link"
                href="mailto:mohd.uvaish.malik79@gmail.com"
              >
                Connect with me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="stat-strip">
            <div>
              <strong>3</strong>
              <span>Selected projects</span>
            </div>
            <div>
              <strong>Full-stack</strong>
              <span>Development focus</span>
            </div>
            <div>
              <strong>React + NestJS</strong>
              <span>Core stack</span>
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block skills-section"
          id="skills"
        >
          <div className="section-heading">
            <span className="section-kicker">02 / EXPERTISE</span>
            <h2>
              Tools I use to <span>build and ship.</span>
            </h2>
            <p className="section-description">
              A practical toolkit across frontend development, backend
              engineering and data management.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-heading">
                  <Icon size={20} />
                  <h3>{title}</h3>
                </div>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block projects-section"
          id="projects"
        >
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">03 / SELECTED WORK</span>
              <h2>
                Projects built to <span>solve real needs.</span>
              </h2>
            </div>
            <p className="section-description">
              A selection of applications and product work from my development
              experience.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  <img
                    className="project-screenshot"
                    src={`/images/${project.visual}.jpg`}
                    alt={`${project.name} project screenshot`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="visual-window">
                    <div className="window-bar">
                      <i />
                      <i />
                      <i />
                      <span>{project.name}</span>
                    </div>
                    <div className="visual-content">
                      <span className="visual-label">SELECTED PROJECT</span>
                      <strong>{project.name}</strong>
                      <span className="visual-rule" />
                      <span className="visual-sub">{project.type}</span>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-overline">
                    <span>{project.number} / PROJECT</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point}>
                        <Check size={14} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <div className="project-tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {project.url ? (
                      <a
                        className="project-link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.label} <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="project-note">Personal project</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block experience-section"
          id="experience"
        >
          <div className="section-heading">
            <span className="section-kicker">04 / EXPERIENCE</span>
            <h2>
              Where I've <span>made an impact.</span>
            </h2>
          </div>
          <article className="experience-card">
            <div className="experience-top">
              <div className="company-icon">
                <BriefcaseBusiness size={22} />
              </div>
              <div className="experience-title">
                <h3>Full Stack Web Developer</h3>
                <p>Wagzen Technology Pvt. Ltd.</p>
              </div>
              <span className="experience-date">April 2026 — Present</span>
            </div>
            <ul className="experience-list">
              {experience.map((item) => (
                <li key={item}>
                  <span className="bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section
          className="section-wrap section-block education-section"
          id="education"
        >
          <div className="section-heading">
            <span className="section-kicker">05 / EDUCATION</span>
            <h2>
              Learning that shaped <span>my foundation.</span>
            </h2>
          </div>
          <div className="education-grid">
            <article className="education-card">
              <span className="education-year">2022 — 2024</span>
              <h3>Master of Computer Applications</h3>
              <p>Graphic Era University</p>
              <span className="degree-mark">MCA</span>
            </article>
            <article className="education-card">
              <span className="education-year">2018 — 2021</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>CCS University</p>
              <span className="degree-mark">BCA</span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-kicker">06 / CONTACT</span>
            <h2>
              Have a project in mind?
              <br />
              <span>Let's build something useful.</span>
            </h2>
            <p>
              I'm open to connecting about web development opportunities,
              collaborations and interesting projects.
            </p>
            <a
              className="button button-white"
              href="mailto:mohd.uvaish.malik79@gmail.com"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <div className="contact-details">
              <a href="mailto:mohd.uvaish.malik79@gmail.com">
                <Mail size={16} /> mohd.uvaish.malik79@gmail.com
              </a>
              <a href="tel:+917983009043">+91 7983009043</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">MU</span>
          <span>Mohd Uvaish</span>
        </a>
        <span className="footer-copy">
          © {new Date().getFullYear()} Mohd Uvaish. Built with care.
        </span>
        <div className="social-links">
          <a
            href="https://github.com/mohd-uvaish"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-uvaish"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="mailto:mohd.uvaish.malik79@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
