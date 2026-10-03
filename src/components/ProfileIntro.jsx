import { focus, core } from "../data.js";

export default function ProfileIntro() {
  return (
    <section className="intro" id="top">
      <div className="intro-left">
        <h1>Kella<br />Chanikya</h1>
        <p className="role">Aspiring Software Developer</p>
        <p className="stack">Python | Java | Generative AI</p>
      </div>
      <aside className="panel" aria-label="Developer profile">
        <div className="panel-head"><span>profile.dev</span><span className="status">Open to opportunities</span></div>
        <h2 className="label">Current focus</h2>
        <ul className="rows">{focus.map((f) => <li key={f}>{f}</li>)}</ul>
        <h2 className="label">Core</h2>
        <ul className="chips">{core.map((c) => <li key={c}>{c}</li>)}</ul>
      </aside>
    </section>
  );
}
