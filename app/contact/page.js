
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import { profile } from "../../data/profile";

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <Section title="Contact" subtitle="Let’s build something great">
        <div className="card p-8 max-w-xl">
          <p><strong>Email:</strong> <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="mt-2"><strong>Phone:</strong> <a className="link" href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          <p className="mt-2"><strong>Location:</strong> {profile.location}</p>
          <div className="mt-6 flex gap-4">
            {profile.linkedin && <a href={profile.linkedin} className="link">LinkedIn</a>}
            {profile.github && <a href={profile.github} className="link">GitHub</a>}
            <a href="/resume.pdf" target="_blank" className="link">Resume (PDF)</a>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
