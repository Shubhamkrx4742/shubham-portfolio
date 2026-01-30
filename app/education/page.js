
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import { profile } from "../../data/profile";

export default function EducationPage() {
  return (
    <main>
      <Nav />
      <Section title="Education" subtitle="Academic background">
        <div className="grid md:grid-cols-3 gap-6">
          {profile.education.map((ed, idx) => (
            <article key={idx} className="card p-6">
              <h3 className="text-xl font-semibold">{ed.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300">{ed.school}</p>
              <p className="text-gray-600 dark:text-gray-400">{ed.period}</p>
              <p className="text-gray-600 dark:text-gray-400">{ed.score}</p>
            </article>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
