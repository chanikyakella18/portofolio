import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <h2 className="sec-head"><span>04</span>Selected work</h2>
      <div className="proj-grid">
        {projects.map((p, i) => (
          <article key={p.name} className={`proj ${p.featured ? "feature" : ""}`} tabIndex="0">
            <div className="proj-top"><span>0{i + 1}</span><span>{p.type}</span><span className="arrow" aria-hidden="true">↗</span></div>
            <h3>{p.name}</h3>
            <p className="area">{p.area}</p>
            {p.points.map((t) => <p key={t} className="desc">{t}</p>)}
          </article>
        ))}
      </div>
    </section>
  );
}
