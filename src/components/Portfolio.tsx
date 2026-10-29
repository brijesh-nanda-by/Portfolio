import { useState, type ReactNode } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Download, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import pipelineImg from '../assets/object-detection-pipeline.png';
import { education, experience, featured, profile, projects, publications, skills, stats, type Project } from '../data/portfolio';
import { useReveal } from '../hooks';
import DetectionVisual from './DetectionVisual';
import Nav from './Nav';

const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const Section = ({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) => (
  <section id={id} className="border-t border-line px-4 py-20 sm:px-6 md:py-28">
    <div className="mx-auto max-w-6xl">
      <Reveal className="mb-12 flex items-baseline gap-4 md:mb-16">
        <span className="font-mono text-xs text-accent">{index}</span>
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </div>
  </section>
);

const Chips = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((s) => (
      <li key={s} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
        {s}
      </li>
    ))}
  </ul>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-accent opacity-[0.07] blur-3xl"
    />
    <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.role} · ICICLE, Ohio State
        </p>
        <h1 className="font-display text-5xl leading-[1.02] tracking-tight [text-wrap:balance] sm:text-6xl md:text-7xl">
          {profile.name.replace(/ (\S+ \S+)$/, ' ')}
          <span className="whitespace-nowrap">{profile.name.split(' ').slice(-2).join(' ')}</span>
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-snug text-fg md:text-2xl">
          {profile.tagline.split('without writing code')[0]}
          <em className="font-display text-accent">without writing code.</em>
        </p>
        <p className="mt-5 max-w-xl text-muted">{profile.summary}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            See selected work <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
          >
            <Download className="h-4 w-4" /> Résumé (PDF)
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.github, label: 'GitHub', icon: Github },
              { href: profile.linkedin, label: 'LinkedIn', icon: Linkedin },
              { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <DetectionVisual />
    </div>

    <dl className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-bg p-5 md:p-6">
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display text-4xl tracking-tight">{s.value}</dd>
          <dd className="mt-1 text-sm text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

const FeaturedProject = ({ project }: { project: Project }) => {
  const [step, setStep] = useState(0);
  const steps = project.steps ?? [];

  return (
    <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.kicker}</p>
          <h3 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">{project.title}</h3>
          <p className="mt-4 text-muted">{project.summary}</p>
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Chips items={project.stack} />
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">How it works</p>
          <ol className="grid grid-cols-5 gap-1.5" role="tablist" aria-label="Pipeline stages">
            {steps.map((s, i) => (
              <li key={s.name} role="presentation">
                <button
                  role="tab"
                  aria-selected={step === i}
                  aria-controls="pipeline-step"
                  onClick={() => setStep(i)}
                  className={`group w-full text-left`}
                >
                  <span
                    className={`block h-1 rounded-full transition-colors ${i <= step ? 'bg-accent' : 'bg-line group-hover:bg-muted'}`}
                  />
                  <span className={`mt-2 block font-mono text-[11px] ${step === i ? 'text-fg' : 'text-muted'}`}>
                    0{i + 1}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div id="pipeline-step" role="tabpanel" className="mt-4 min-h-[112px] rounded-xl border border-line bg-surface-2 p-5">
            <p className="font-medium">{steps[step]?.name}</p>
            <p className="mt-1.5 text-sm text-muted">{steps[step]?.detail}</p>
          </div>
          <figure className="mt-5 overflow-hidden rounded-xl border border-line bg-white">
            <img src={pipelineImg} alt="Diagram of the ICICLE object detection pipeline" className="h-auto w-full" loading="lazy" />
          </figure>
        </div>
      </div>
    </Reveal>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Reveal className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 md:p-8">
    <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.kicker}</p>
    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
    <p className="mt-3 text-sm text-muted">{project.summary}</p>
    <ul className="mt-5 flex-1 space-y-2">
      {project.highlights.map((h) => (
        <li key={h} className="flex gap-3 text-sm">
          <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-line transition-colors group-hover:bg-accent" />
          {h}
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <Chips items={project.stack} />
    </div>
  </Reveal>
);

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-line px-4 py-24 sm:px-6 md:py-32">
      <Reveal className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs text-accent">06</span>
        <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
          Let’s build something <em className="text-accent">useful.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          I’m happy to talk about research collaborations, ML infrastructure, or tooling that makes scientists faster.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-mono text-sm text-muted transition-colors hover:text-fg"
            aria-live="polite"
          >
            {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied!' : profile.email}
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-fg">
            LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-fg">
            GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>
      </Reveal>
    </section>
  );
};

const Portfolio = () => (
  <div className="min-h-screen bg-bg text-fg">
    <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink">
      Skip to content
    </a>
    <Nav />
    <main>
      <Hero />

      <Section id="work" index="01" title="Selected work">
        <FeaturedProject project={featured} />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>

      <Section id="publications" index="02" title="Publications">
        <div className="divide-y divide-line border-y border-line">
          {publications.map((p) => (
            <Reveal key={p.title} className="grid gap-3 py-7 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8">
              <div className="font-mono text-sm">
                <span className="text-accent">{p.venue}</span>
                <span className="block text-xs text-muted">{p.track}</span>
              </div>
              <p className="flex items-start gap-3 text-lg leading-snug md:text-xl">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-muted" />
                {p.title}
              </p>
              <span className="w-fit rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">{p.status}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="experience" index="03" title="Experience">
        <div className="space-y-14">
          {experience.map((job) => (
            <Reveal key={job.company} className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-12">
              <div>
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <p className="text-sm text-muted">{job.location}</p>
              </div>
              <ol className="relative space-y-10 border-l border-line pl-6">
                {job.roles.map((role, i) => (
                  <li key={role.title} className="relative">
                    <span
                      className={`absolute -left-[29.5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg ${
                        i === 0 ? 'bg-accent' : 'bg-muted'
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="text-xl font-medium">{role.title}</h4>
                      <span className="font-mono text-xs text-muted">{role.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {role.highlights.map((h) => (
                        <li key={h} className="text-muted">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="skills" index="04" title="Toolkit">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Reveal key={s.group} className="bg-bg p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">{s.group}</h3>
              <Chips items={s.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="education" index="05" title="Education">
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <Reveal key={e.degree} className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="mt-3 font-display text-3xl tracking-tight">{e.degree}</h3>
              <p className="mt-1 font-medium text-accent">{e.school}</p>
              <p className="mt-4 text-sm text-muted">{e.detail}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactSection />
    </main>

    <footer className="border-t border-line px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span className="font-mono">Built with React, TypeScript & Tailwind</span>
      </div>
    </footer>
  </div>
);

export default Portfolio;
