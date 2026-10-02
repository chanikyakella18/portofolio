import { profileText, skills, experience, snapshot, education, languages } from "../data.js";

function Head({ n, title }) {
  return <h2 className="sec-head"><span>{n}</span>{title}</h2>;
}

function Profile() {
  return (
    <section id="profile" className="sec two-col">
      <div><Head n="01" title="Profile" /><p className="statement">Building with Python, AI and problem-solving.</p></div>
      <p className="body bar">{profileText}</p>
    </section>
  );
}

function SkillMatrix() {
  return (
    <section id="skills" className="sec">
      <Head n="02" title="Tech stack" />
      <table className="matrix">
        <thead><tr><th scope="col">Category</th><th scope="col">Technologies</th></tr></thead>
        <tbody>
          {skills.map((s) => (
            <tr key={s.category} tabIndex="0"><th scope="row">{s.category}</th><td>{s.items.join(" · ")}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="sec">
      <Head n="03" title="Experience" />
      <div className="log">
        <div className="log-year">{experience.year}</div>
        <div>
          <h3>{experience.role}</h3>
          <p className="muted">{experience.company}</p>
          <ol className="steps">
            {experience.entries.map((e) => (
              <li key={e.tag}><span className="tag">{e.tag}</span><p>{e.text}</p></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CareerSnapshot() {
  return (
    <section className="sec">
      <Head n="05" title="Career snapshot" />
      <ul className="snap">
        {snapshot.map((s) => (
          <li key={s.value}><strong>{s.value}</strong><span>{s.label}</span></li>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="sec">
      <Head n="06" title="Education" />
      <ul className="edu">
        {education.map((e) => (
          <li key={e.degree}>
            <span className="gpa">{e.gpa}</span>
            <div><h3>{e.degree}</h3><p className="muted">{e.school}</p><p className="muted small">GPA: {e.gpa}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Languages() {
  return (
    <section className="sec langs">
      <h2 className="label">Languages</h2>
      <ul>{languages.map((l) => <li key={l}>{l}</li>)}</ul>
    </section>
  );
}

function Connect() {
  return (
    <section className="sec connect">
      <h2>Let's connect</h2>
      <p className="body">I'm looking for software development opportunities where I can apply Python, Java and generative AI skills. Professional enquiries are welcome.</p>
    </section>
  );
}

export default { Profile, SkillMatrix, ExperienceTimeline, CareerSnapshot, Education, Languages, Connect };
