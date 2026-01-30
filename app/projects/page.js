
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import { profile } from "../../data/profile";

export default function ProjectsPage() {
  return (
    <main>
      <Nav />
      <Section title="Projects" subtitle="A selection of my recent work">
        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((p) => (
            <article key={p.name} className="card overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-brand-300 to-purple-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
                {p.link ? <a href={p.link} className="mt-4 inline-block link">View Project</a> : null}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
