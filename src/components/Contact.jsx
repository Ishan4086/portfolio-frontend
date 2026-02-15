import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // for sending emails
import axios from "axios";               // for storing messages in Django DB

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      // 1️⃣ Send email via EmailJS
      await emailjs.send(
        "service_lg6o2wr",    // replace with your EmailJS service ID
        "template_e9agau7",   // replace with your EmailJS template ID
        formData,
        "z6JGpc0HqALo2AD1k"  // replace with your EmailJS public key
      );

      // 2️⃣ Store message in Django backend
      await axios.post("http://127.0.0.1:8000/api/contact/", formData);

      // Success feedback
      setMessageSent(true);
      form.current.reset();
      setTimeout(() => setMessageSent(false), 5000);

    } catch (error) {
      alert("Oops! Something went wrong: " + error);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <div className="contact-wrapper">
        <div className="contact-form-wrapper">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
            {messageSent && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;