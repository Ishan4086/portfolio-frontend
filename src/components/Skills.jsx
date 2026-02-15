function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h4>Programming Languages</h4>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-card">
          <h4>Frameworks & Concepts</h4>
          <ul>
            <li>Django</li>
            <li>React</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-card">
          <h4>AI / ML</h4>
          <ul>
            <li>K-Means</li>
            <li>Logistic Regression</li>
            <li>Data Visualization</li>
          </ul>
        </div>
        <div className="skill-card">
          <h4>Tools & Development</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>MSSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;