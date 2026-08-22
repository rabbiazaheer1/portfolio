import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });

  const submit = (e) => {
    e.preventDefault();
    const text = `New Contact Form Submission:\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    window.open(`https://wa.me/923099511155?text=${encodeURIComponent(text)}`, "_blank");
    alert("Opening WhatsApp to send your message directly! Please send the message to complete your inquiry.");
    setForm({ name:"", email:"", subject:"", message:"" });
  };

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  return <section className="section" id="contact">
    <h2 className="section-title">Get In Touch</h2>
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item"><div className="contact-icon"><i className="fas fa-envelope"></i></div><div className="contact-text"><h3>Email</h3><a href="mailto:rabbiazaheer8@gmail.com">rabbiazaheer8@gmail.com</a></div></div>
        <div className="contact-item"><div className="contact-icon"><i className="fas fa-phone-alt"></i></div><div className="contact-text"><h3>Phone / WhatsApp</h3><a href="tel:+923099511155">+92 309 9511155</a></div></div>
        <div className="contact-item"><div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div><div className="contact-text"><h3>Location</h3><p>GujarKhan, Pakistan</p></div></div>
      </div>
      <div className="contact-form">
        <form onSubmit={submit}>
          {[
            ["name","Your Name","text"],["email","Your Email","email"],["subject","Subject","text"]
          ].map(([name,label,type]) => <div className="form-group" key={name}>
            <label className="form-label" htmlFor={name}>{label}</label>
            <input className="form-input" id={name} name={name} type={type} required value={form[name]} onChange={change}/>
          </div>)}
          <div className="form-group"><label className="form-label" htmlFor="message">Your Message</label><textarea className="form-textarea" id="message" name="message" required value={form.message} onChange={change}></textarea></div>
          <button className="submit-btn" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>;
}
