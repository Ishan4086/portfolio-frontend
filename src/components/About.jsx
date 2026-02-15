import profile from "../assets/tech.jpg"; // add your profile image

function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Ishan" />
        </div>

        <div className="about-text">
          <p>Hello! I'm <span>Ishan</span>, a passionate developer and data analyst. I love building interactive web apps, analyzing datasets, and creating games.</p>
          <p>Always exploring new tech and improving my skills to make meaningful projects that solve real problems.</p>
        </div>

      </div>
    </section>
  );
}

export default About;