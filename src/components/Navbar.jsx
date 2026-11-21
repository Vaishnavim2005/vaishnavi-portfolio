
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact"
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">
        Vaishnavi<span> Madheswaran</span>
      </h2>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
