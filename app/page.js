
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { profile } from "../data/profile";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Section title="About Me" subtitle="Who I am">
        <div className="card p-6 max-w-3xl">
          <p className="text-gray-700 dark:text-gray-300">{profile.summary}</p>
        </div>
      </Section>
      <Section title="Core Skills" subtitle="Tools & tech I work with">
        <div className="card p-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {profile.skills.map((s) => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
