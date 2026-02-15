import todoImg from "../assets/todo.jpg";
import calcImg from "../assets/calculator.jpg";
import datingImg from "../assets/dating.jpg";
import healthImg from "../assets/healthcare.jpg";
import gameImg from "../assets/game.jpg";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <img src={todoImg} alt="To Do App" className="project-image" />
          <h3>TO-DO-APPLICATION</h3>
          <p>A simple web-based To-Do app to add and delete tasks using HTML, CSS, and JavaScript.</p>
          <a href="https://github.com/Ishan4086/To-Do-Application">GitHub</a>
        </div>

        <div className="project-card">
          <img src={calcImg} alt="Calculator" className="project-image" />
          <h3>ARITHMETIC CALCULATOR</h3>
          <p>A web-based calculator performing basic arithmetic operations with a clean, interactive interface.</p>
          <a href="https://github.com/Ishan4086/Calculator">GitHub</a>
        </div>

        <div className="project-card">
          <img src={datingImg} alt="Dating Data Analysis" className="project-image" />
          <h3>DATING DATA ANALYSIS</h3>
          <p>Performed EDA, ETL, K-Means clustering, and logistic regression on a dating dataset.</p>
          <a href="https://github.com/Ishan4086/Data-Science/tree/main/DatingDataAnalysis">GitHub</a>
        </div>

        <div className="project-card">
          <img src={healthImg} alt="Healthcare Data Analysis" className="project-image" />
          <h3>HEALTHCARE DATA ANALYSIS</h3>
          <p>Performed comprehensive healthcare data analysis, including data cleaning, exploratory analysis, visualization, and predictive modeling, to uncover insights and support informed medical decision-making.</p>
          <a href="https://github.com/Ishan4086/Data-Science/tree/main/HelthcareDataAnalysis">GitHub</a>
        </div>

        <div className="project-card">
          <img src={gameImg} alt="2D Platformer Game" className="project-image" />
          <h3>2-D PLATFORMER GAME</h3>
          <p>2D Platformer Game – A side-scrolling game with smooth controls, challenging levels, enemies, and collectibles, built in Unity with engaging gameplay and pixel art visuals.</p>
          <a href="https://github.com/Ishan4086/2-D-Platformer-Game-Unity">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
