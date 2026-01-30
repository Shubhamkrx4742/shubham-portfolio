
import Link from "next/link";

export default function Nav() {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur">
      <nav className="container-wide mt-4 mb-2 rounded-3xl border border-white/20 bg-white/60 px-6 py-4 dark:bg-neutral-900/60 dark:border-white/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold gradient-text">Shubham Karsh</Link>
          <div className="flex gap-6 text-sm">
            <Link href="/projects" className="link">Projects</Link>
            <Link href="/experience" className="link">Experience</Link>
            <Link href="/education" className="link">Education</Link>
            <Link href="/contact" className="link">Contact</Link>
            <a href="/resume.pdf" target="_blank" className="link">Resume</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
