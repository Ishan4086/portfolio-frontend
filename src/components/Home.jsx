import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="section home">
      
      <div className="hero-container">

        <div className="hero-text">
          <h1>Hello, I'm <span>Ishan</span></h1>
          <p>Computer Engineering Student | AI Enthusiast</p>
          <div className="btn-container">
               <a href="#projects" className="btn">View My Work</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Ishan" />
        </div>

      </div>

    </section>
  );
}

export default Home;