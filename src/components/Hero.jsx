export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Rabbia Zaheer</h1>
        <p className="hero-subtitle">Frontend Developer | React & WordPress Developer.</p>
        <div className="cta-buttons">
          <a href="#projects" className="cta-button cta-primary">View My Work</a>
          <a href="#contact" className="cta-button cta-secondary">Hire Me</a>
        </div>
        <div className="direct-contact-links">
          <a href="https://wa.me/923099511155" className="direct-contact" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp Direct</a>
          <a href="mailto:rabbiazaheer8@gmail.com" className="direct-contact email-direct"><i className="fas fa-envelope"></i> Email Direct</a>
        </div>
      </div>
      <div className="scroll-down"><span className="scroll-text">SCROLL TO EXPLORE</span><div className="scroll-line"></div></div>
    </section>
  );
}
