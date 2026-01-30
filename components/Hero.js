
export default function Hero() {
  return (
    <header className="container-wide relative overflow-hidden py-20">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-300/40 blur-3xl" />
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-purple-300/40 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 h-24 w-24 rounded-3xl bg-gradient-to-br from-brand-500 to-purple-500 p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/90 text-2xl font-bold dark:bg-neutral-900/80">SK</div>
        </div>
        <h1 className="text-5xl font-extrabold leading-tight">
          Building <span className="gradient-text">delightful</span> web experiences
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Full Stack Web Developer focused on Java, MySQL, and modern UI. I craft performant, user-centric interfaces with clean design.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/projects" className="rounded-2xl bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-white shadow-soft">View Projects</a>
          <a href="/contact" className="rounded-2xl border border-gray-300 bg-white/70 px-6 py-3 backdrop-blur hover:shadow dark:bg-neutral-900/60">Contact Me</a>
        </div>
      </div>
    </header>
  );
}
