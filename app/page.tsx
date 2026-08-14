import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight">
          XPERT
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <Link href="#about" className="transition hover:text-white">
            About
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="#exploring" className="transition hover:text-white">
            What I Do
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-zinc-700 px-5 py-2 text-white transition hover:bg-white hover:text-black"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Welcome to XPERT
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Building things,
            <br />
            learning along the way.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            A personal space for projects, ideas, experiments, and things
            I&apos;m building with technology.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Explore Projects
            </Link>

            <Link
              href="#about"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-500 hover:text-white"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-900"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A little about me.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I&apos;m a developer who enjoys exploring technology,
              building applications, and turning ideas into something
              people can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-900"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Things I&apos;ve built.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="LUMO"
              description="A project focused on creating a simple and useful digital experience."
            />

            <ProjectCard
              title="Portfolio Website"
              description="A personal website designed to showcase my work and experiments."
            />

            <ProjectCard
              title="Training Dashboard"
              description="A dashboard application for managing and presenting training-related information."
            />

            <ProjectCard
              title="Village Digitalization"
              description="A digital platform concept focused on supporting village information and services."
            />
          </div>
        </div>
      </section>

      {/* Exploring */}
      <section
        id="exploring"
        className="border-t border-zinc-900"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            What I Do
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Exploring & Learning.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <SkillCard
              title="Frontend Development"
              description="Building responsive and accessible user interfaces with React, Next.js, and Tailwind CSS."
            />
            <SkillCard
              title="Backend & APIs"
              description="Creating robust APIs and services using Node.js, TypeScript, and PostgreSQL."
            />
            <SkillCard
              title="UI/UX Design"
              description="Crafting clean, intuitive, and user-centered designs with an emphasis on simplicity."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-900"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Feel free to reach out if you want to collaborate on a project,
              discuss technology, or just say hi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
          <span>© 2026 XPERT</span>
          <span>Built with curiosity.</span>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 p-7 transition hover:border-zinc-600">
      <div className="flex min-h-48 flex-col justify-between">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="mt-4 leading-7 text-zinc-400">
            {description}
          </p>
        </div>

        <div className="mt-8 text-sm text-zinc-500 transition group-hover:text-white">
          View project →
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition hover:border-zinc-700">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}