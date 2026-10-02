import { useState } from "react";
import { navLinks } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">KC.</a>
      <button className="menu-btn" aria-expanded={open} aria-controls="nav-list" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav>
        <ul id="nav-list" className={open ? "open" : ""}>
          {navLinks.map((l) => (
            <li key={l.id}><a href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
