
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import { profile } from "../../data/profile";

export default function ExperiencePage() {
  return (
    <main>
      <Nav />
      <Section title="Experience" subtitle="Where I’ve worked">
        <ol className="relative border-l border-white/30 pl-6">
          {profile.experience.map((e) => (
            <li key={e.company} className="mb-10">
              <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-brand-500 to-purple-500" />
              <article className="card p-6">
                <h3 className="text-xl font-semibold">{e.role} — {e.company}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{e.period}</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 dark:text-gray-300">
                  {e.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Section>
      <Footer />
    </main>
  );
}
