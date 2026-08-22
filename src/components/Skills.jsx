const groups = [
  {
    icon: "fab fa-html5",
    title: "Frontend Development",
    items: [
      ["fab fa-html5", "HTML5"],
      ["fab fa-css3-alt", "CSS3"],
      ["fab fa-js", "JavaScript"],
      ["fab fa-react", "React"],
      ["fab fa-js", "TypeScript"],
      ["fas fa-wind", "Tailwind CSS"],
    ],
  },

  {
    icon: "fas fa-layer-group",
    title: "UI & Web Development",
    items: [
      ["fas fa-mobile-alt", "Responsive Design"],
      ["fas fa-route", "React Router"],
      ["fas fa-plug", "REST APIs"],
      ["fas fa-cubes", "Component-Based Development"],
      ["fas fa-sync-alt", "State Management"],
    ],
  },

  {
    icon: "fab fa-wordpress",
    title: "WordPress",
    items: [
      ["fab fa-wordpress", "WordPress"],
      ["fas fa-paint-brush", "Elementor"],
      ["fas fa-palette", "Theme Customization"],
      ["fas fa-store", "WooCommerce"],
      ["fas fa-cube", "Gutenberg"],
    ],
  },

  {
    icon: "fas fa-database",
    title: "Backend & Databases",
    items: [
      ["fab fa-node-js", "Node.js"],
      ["fas fa-server", "Express.js"],
      ["fas fa-project-diagram", "Prisma"],
      ["fas fa-database", "PostgreSQL"],
      
    ],
  },

  {
    icon: "fas fa-tools",
    title: "Tools",
    items: [
      ["fab fa-git-alt", "Git"],
      ["fab fa-github", "GitHub"],
      ["fas fa-code", "VS Code"],
      ["fas fa-palette", "Figma"],
      ["fab fa-npm", "npm"],
      ["fas fa-bolt", "Vite"],
      ["fab fa-chrome", "Chrome DevTools"],
      ["fas fa-rocket", "Netlify"],
      ["fas fa-cloud", "Vercel"],
    ],
  },
];

export default function Skills() {
  return <section className="section" id="skills">
    <h2 className="section-title">My Skills</h2>
    <div className="skills-container">
      {groups.map(group => <div className="skill-card" key={group.title}>
        <div className="skill-header"><div className="skill-icon"><i className={group.icon}></i></div><h3 className="skill-title">{group.title}</h3></div>
        <div className="skill-items">
          {group.items.map(([icon, label]) => <span className="skill-item" key={label}><i className={icon}></i>{label}</span>)}
        </div>
      </div>)}
    </div>
  </section>;
}
