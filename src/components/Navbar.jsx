import { useState } from "react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <nav>
        <a href="#home" className="logo" onClick={close}>RABBIA</a>
        <div className="nav-links">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
        </div>
        <button className={`mobile-menu-btn ${open ? "active" : ""}`} onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link" onClick={close}>{label}</a>)}
      </div>
    </>
  );
}
