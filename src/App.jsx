import Navbar from "./components/Navbar.jsx";
import ProfileIntro from "./components/ProfileIntro.jsx";
import Sections from "./components/Sections.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#profile">Skip to content</a>
      <Navbar />
      <main>
        <ProfileIntro />
        <Sections.Profile />
        <Sections.SkillMatrix />
        <Sections.ExperienceTimeline />
        <Projects />
        <Sections.CareerSnapshot />
        <Sections.Education />
        <Sections.Languages />
        <Sections.Connect />
      </main>
      <Footer />
    </>
  );
}
