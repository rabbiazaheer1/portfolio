import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    const timer = setTimeout(() => {
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => { loader.style.display = "none"; }, 1000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const handlers = [];
    cards.forEach(card => {
      const move = e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const xAxis = (rect.width / 2 - x) / 25;
        const yAxis = (rect.height / 2 - y) / 25;
        card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
      };
      const enter = () => { card.style.transition = "transform 0.1s"; };
      const leave = () => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      handlers.push([card, move, enter, leave]);
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.style.animation = "fadeInUp 0.5s ease forwards";
      });
    }, { threshold: 0.5, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".skill-card").forEach(card => observer.observe(card));
    return () => {
      handlers.forEach(([card, move, enter, leave]) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
      observer.disconnect();
    };
  }, []);

  return <>
    <div id="loader"><div className="logo-loader"><div className="logo-circle"></div><div className="logo-circle"></div><div className="logo-circle"></div><div className="logo-text">RABBIA</div></div></div>
    <div id="particles-js"></div>
    <a href="https://wa.me/923099511155" className="whatsapp-float" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
    <div className="container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
    <Footer />
  </>;
}
