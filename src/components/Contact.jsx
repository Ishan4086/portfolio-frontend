import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      from_name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setMessageSent(true);
      setErrorMessage("");
      form.current.reset();
      setTimeout(() => setMessageSent(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMessage("Oops! Something went wrong. Please try again.");
      setMessageSent(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Let's connect for internships, mentorship, or collaborations.
      </p>

      <div className="contact-container">
        {/* Left Side: Form */}
        <div className="contact-form-card">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="send-btn">
              Send Message &rarr;
            </button>

            {messageSent && (
              <p className="success-msg">Message sent successfully!</p>
            )}
            {errorMessage && (
              <p className="error-msg">{errorMessage}</p>
            )}
          </form>
        </div>

        {/* Right Side: Info Cards */}
        <div className="contact-info-column">
          <div className="info-card">
            <h4>Email</h4>
            <p>poudelishan911@gmail.com</p>
          </div>

          <div className="info-card">
            <h4>Location</h4>
            <p>Chitwan, Nepal</p>
          </div>

          <div className="info-card">
            <h4>Social Media</h4>
            <div className="social-links-list">
              <a href="https://github.com/Ishan4086">GitHub</a>
              <a href="https://www.linkedin.com/in/ishan-poudel-a3b8b0368/">
                LinkedIn
              </a>
              <a href="https://x.com/IshanPoudel6">
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
