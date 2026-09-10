"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI RouteX",
    category: "AI / ML",
    description:
      "An AI-powered smart logistics and accessibility intelligence platform designed to analyze multiple data sources and support smarter routing decisions.",
    tech: ["Python", "AI/ML", "Data Analytics", "Maps"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 2,
    title: "Real-Time Sentiment Analyzer",
    category: "AI / ML",
    description:
      "A conversational AI application designed to analyze user messages, understand sentiment and provide supportive responses in real time.",
    tech: ["Python", "NLP", "Transformers", "Streamlit"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 3,
    title: "Data Analytics Project",
    category: "DATA",
    description:
      "Exploratory data analysis project using Python and Jupyter Notebook to clean datasets, identify patterns and communicate useful insights.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/",
    demo: "#",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Machine Learning",
  "NLP",
  "Git",
  "GitHub",
  "VS Code",
  "Jupyter Notebook",
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [typedText, setTypedText] = useState("");

  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Data Analyst",
    "AI / ML Enthusiast",
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const interval = setInterval(() => {
      const current = roles[roleIndex];

      if (!deleting) {
        setTypedText(current.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === current.length) {
          deleting = true;
        }
      } else {
        setTypedText(current.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
    }, deleting ? 60 : 110);

    return () => clearInterval(interval);
  }, []);

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main
      className={
        dark
          ? "dark min-h-screen bg-[#050505] text-white transition-colors duration-500"
          : "min-h-screen bg-[#f4f7f8] text-[#101010] transition-colors duration-500"
      }
    >
      {/* BACKGROUND */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-[0.07]" />

        <div className="absolute -top-40 left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute top-[50%] right-[-200px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      {/* NAVBAR */}

      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
        w-[94%] max-w-6xl
        rounded-full border backdrop-blur-xl
        px-5 md:px-7 py-3
        ${
          dark
            ? "border-white/10 bg-black/70"
            : "border-black/10 bg-white/75"
        }`}
      >
        <div className="flex items-center justify-between">

          <a href="#" className="text-xl font-bold tracking-tight">
            AK<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm opacity-60">
            <a href="#about" className="hover:opacity-100 transition">
              About
            </a>

            <a href="#skills" className="hover:opacity-100 transition">
              Skills
            </a>

            <a href="#experience" className="hover:opacity-100 transition">
              Experience
            </a>

            <a href="#work" className="hover:opacity-100 transition">
              Work
            </a>

            <a href="#contact" className="hover:opacity-100 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
            >
              {dark ? "☀" : "☾"}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden sm:block rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-cyan-300 transition"
            >
              Resume ↗
            </a>

          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-6 pt-28">

        <div className="max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-14 items-center">

            <div>

              <div className="flex items-center gap-3 mb-7">

                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-50">
                  Software · Data · Intelligence
                </span>

              </div>

              <h1 className="text-[clamp(3.8rem,9vw,8.5rem)] leading-[.83] font-semibold tracking-[-.07em]">

                ABHISHEK
                <br />

                <span className="opacity-30">
                  KUMAR
                </span>

                <br />

                <span className="text-cyan-400">
                  GUPTA.
                </span>

              </h1>

              <div className="mt-10 text-xl md:text-2xl font-mono">

                <span className="opacity-40">
                  &gt;{" "}
                </span>

                <span className="text-cyan-400">
                  {typedText}
                </span>

                <span className="animate-pulse">_</span>

              </div>

              <p className="max-w-2xl mt-7 text-lg leading-relaxed opacity-50">
                Software Engineer and Full-Stack Developer with a focus
                on Data Analytics, Artificial Intelligence and building
                practical technology solutions.
              </p>

              <div className="flex flex-wrap gap-3 mt-9">

                <a
                  href="#work"
                  className="px-7 py-4 rounded-full bg-white text-black font-medium hover:bg-cyan-300 transition"
                >
                  Explore My Work ↓
                </a>

                <a
                  href="#contact"
                  className="px-7 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                >
                  Let's Connect ↗
                </a>

              </div>

            </div>

            {/* PROFILE */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

                <div className="relative w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">

                  <img
                    src="/profile.jpg"
                    alt="Abhishek Kumar Gupta"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                      Based in Delhi NCR
                    </p>

                    <p className="mt-2 text-lg font-medium">
                      Building with data.
                    </p>

                  </div>

                </div>

                <div className="absolute -right-5 top-10 px-4 py-2 rounded-full border border-cyan-400/30 bg-black/70 backdrop-blur text-xs text-cyan-300">
                  AVAILABLE
                </div>

              </div>

            </div>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-24 border border-white/10">

            {[
              ["03+", "Projects"],
              ["01", "Internship"],
              ["18+", "Technologies"],
              ["∞", "Curiosity"],
            ].map(([number, label]) => (

              <div
                key={label}
                className="bg-[#050505] p-7 hover:bg-white/[.04] transition"
              >

                <div className="text-3xl md:text-4xl font-semibold">
                  {number}
                </div>

                <div className="text-sm opacity-40 mt-2">
                  {label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="section-label">
            / About Me
          </p>

          <div className="grid lg:grid-cols-2 gap-16">

            <h2 className="section-title">
              Turning
              <br />
              <span className="opacity-30">
                ideas into
              </span>
              <br />
              systems.
            </h2>

            <div className="text-lg leading-relaxed opacity-55 space-y-6">

              <p>
                I'm Abhishek Kumar Gupta, a Software Engineer and
                Full-Stack Developer with a strong interest in Data
                Analytics and Artificial Intelligence.
              </p>

              <p>
                I enjoy working with data, developing web applications,
                exploring machine learning and solving practical
                technical problems.
              </p>

              <p>
                My goal is to build scalable, useful and intelligent
                digital products that create real-world impact.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="section-label">
            / Technology
          </p>

          <h2 className="section-title mb-16">
            My
            <br />
            <span className="opacity-30">
              toolkit.
            </span>
          </h2>

          <div className="flex flex-wrap gap-3">

            {skills.map((skill, index) => (

              <div
                key={skill}
                className={`
                px-5 py-3 rounded-full border
                hover:-translate-y-1 transition-all duration-300
                ${
                  index % 5 === 0
                    ? "border-cyan-400/40 text-cyan-300"
                    : "border-white/10 opacity-70"
                }
                `}
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="section-label">
            / Experience
          </p>

          <div className="border border-white/10 rounded-[2rem] p-8 md:p-12">

            <div className="grid md:grid-cols-[180px_1fr_180px] gap-8">

              <div className="text-cyan-400 font-mono">
                07/2026
                <br />
                —
                <br />
                08/2026
              </div>

              <div>

                <p className="text-sm opacity-40 mb-3">
                  DATA ANALYTICS
                </p>

                <h3 className="text-4xl font-medium">
                  Data Analytics Intern
                </h3>

                <p className="text-lg text-cyan-300 mt-2">
                  DecodedLabs
                </p>

                <ul className="mt-8 space-y-4 opacity-55">

                  <li>
                    • Performed Exploratory Data Analysis using
                    Python and Jupyter Notebook.
                  </li>

                  <li>
                    • Cleaned and prepared datasets by handling
                    missing values and checking data quality.
                  </li>

                  <li>
                    • Analyzed distributions, relationships and
                    important trends in datasets.
                  </li>

                  <li>
                    • Created data visualizations to communicate
                    findings and support conclusions.
                  </li>

                  <li>
                    • Documented analysis and insights using
                    Jupyter Notebooks.
                  </li>

                </ul>

              </div>

              <div className="text-sm opacity-40 md:text-right">
                Virtual
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="section-label">
            / Education
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="info-card">

              <p className="text-cyan-400 text-sm">
                2025 — PRESENT
              </p>

              <h3 className="text-3xl mt-8">
                Master of Computer Applications
              </h3>

              <p className="mt-3 opacity-50">
                DCRUST University
              </p>

              <p className="mt-6 text-sm opacity-40">
                CGPA: 7.0+
              </p>

            </div>

            <div className="info-card">

              <p className="text-cyan-400 text-sm">
                2022 — 2025
              </p>

              <h3 className="text-3xl mt-8">
                B.Sc. Mathematics
              </h3>

              <p className="mt-3 opacity-50">
                Banaras Hindu University
              </p>

              <p className="mt-6 text-sm opacity-40">
                CGPA: 7.1
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="work" className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="section-label">
            / Selected Work
          </p>

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-14">

            <h2 className="section-title">
              Things I've
              <br />
              <span className="opacity-30">
                built.
              </span>
            </h2>

            <div className="flex gap-2">

              {["ALL", "AI / ML", "DATA"].map((filter) => (

                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs border transition
                  ${
                    activeFilter === filter
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  {filter}
                </button>

              ))}

            </div>

          </div>

          <div className="space-y-5">

            {filteredProjects.map((project, index) => (

              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card group cursor-pointer"
              >

                <div className="grid md:grid-cols-[90px_1fr_100px] gap-7">

                  <div className="font-mono text-cyan-400">
                    0{index + 1}
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[.25em] opacity-35 mb-4">
                      {project.category}
                    </p>

                    <h3 className="text-4xl md:text-5xl font-medium group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>

                    <p className="max-w-2xl mt-5 opacity-45 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">

                      {project.tech.map((tech) => (

                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 border border-white/10 rounded-full opacity-60"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                  <div className="flex justify-end">

                    <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition">
                      ↗
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECT MODAL */}

      {selectedProject && (

        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-[#0b0b0b] border border-white/10 rounded-[2rem] p-8 md:p-12"
          >

            <div className="flex justify-between">

              <p className="text-cyan-400 text-sm uppercase tracking-widest">
                {selectedProject.category}
              </p>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full border border-white/10"
              >
                ×
              </button>

            </div>

            <h2 className="text-5xl font-semibold mt-8">
              {selectedProject.title}
            </h2>

            <p className="mt-7 opacity-55 leading-relaxed text-lg">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-8">

              {selectedProject.tech.map((tech: string) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm opacity-70"
                >
                  {tech}
                </span>

              ))}

            </div>

            <div className="flex gap-3 mt-10">

              <a
                href={selectedProject.github}
                target="_blank"
                className="px-6 py-3 rounded-full bg-white text-black"
              >
                GitHub ↗
              </a>

              <a
                href={selectedProject.demo}
                target="_blank"
                className="px-6 py-3 rounded-full border border-white/15"
              >
                Live Demo ↗
              </a>

            </div>

          </div>

        </div>

      )}

      {/* CONTACT */}

      <section id="contact" className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="section-label">
            / Contact
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">

            <div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Let's
                <br />
                <span className="opacity-30">
                  connect.
                </span>
              </h2>

              <p className="mt-6 max-w-xl opacity-45 text-lg">
                Want to collaborate, discuss a project or simply connect?
                Choose any platform below.
              </p>
            </div>

            <div className="text-sm opacity-30">
              Tap any card →
            </div>

          </div>


          {/* CONTACT CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            {/* GITHUB */}

            <a
              href="https://github.com/abhishekgupta206"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >

              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.77 1.07.77 2.16v3.2c0 .3.21.65.8.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
              </div>

              <p className="contact-title">
                GITHUB
              </p>

              <p className="contact-value">
                @abhishekgupta206
              </p>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/abhishek-gupta-a83b8938/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >

              <div className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z"/>
                </svg>

              </div>

              <p className="contact-title">
                LINKEDIN
              </p>

              <p className="contact-value">
                Abhishek Gupta
              </p>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/profile.php?id=100018534063238"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >

              <div className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.16 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.98h-1.52c-1.5 0-1.97.94-1.97 1.9v2.24h3.35l-.54 3.49h-2.81V24C19.61 23.16 24 18.1 24 12.07Z"/>
                </svg>

              </div>

              <p className="contact-title">
                FACEBOOK
              </p>

              <p className="contact-value">
                Abhishek Gupta
              </p>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/this_abhi06/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >

              <div className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-8 h-8"
                >

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />

                </svg>

              </div>

              <p className="contact-title">
                INSTAGRAM
              </p>

              <p className="contact-value">
                @this_abhi06
              </p>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>


          {/* EMAIL / PHONE */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">

            <a
              href="mailto:abhishekuptazna@gmail.com"
              className="contact-wide group"
            >

              <div>

                <p className="text-xs uppercase tracking-[.3em] text-cyan-400">
                  Email
                </p>

                <h3 className="text-2xl md:text-3xl mt-4">
                  abhishekuptazna@gmail.com
                </h3>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="tel:+918115382206"
              className="contact-wide group"
            >

              <div>

                <p className="text-xs uppercase tracking-[.3em] text-cyan-400">
                  Phone
                </p>

                <h3 className="text-2xl md:text-3xl mt-4">
                  +91 81153 82206
                </h3>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>

      </section>
      {/* FOOTER */}

      <footer className="border-t border-white/10 py-9 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm opacity-35">

          <span>
            © 2026 Abhishek Kumar Gupta
          </span>

          <span>
            Software · Data · Intelligence
          </span>

          <a href="#top">
            Back to top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}