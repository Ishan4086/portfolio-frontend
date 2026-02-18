function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Ishan Poudel</h3>
          <p>
            Computer Engineering Student passionate about building
            innovative digital solutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>

        <div className="footer-connect">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://github.com/Ishan4086">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ishan-poudel-a3b8b0368/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:poudelishan911@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ishan Poudel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
