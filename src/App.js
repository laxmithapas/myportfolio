import React from "react";
import "./App.css"; // Styling file
import laxmiPhoto from "./assets/laxmi_thapa.jpg";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Profile Section */}
      <header className="profile">
        <div className="profile-content">
          <h1>Laxmi Thapa</h1>
          <div className="profile-image">
            <img src={laxmiPhoto} alt="Laxmi Thapa" />
          </div>
          <div className="profile-text">
            <h2>Hello, I'm Laxmi Thapa</h2>
            <p>A Software Engineer</p>
            <div className="buttons">
              {/* Button to download resume */}
              <a 
                href="https://drive.google.com/file/d/1OdoDMoOCKY8Xsz-drt6nqhnmRny0WSUu/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button>Download Resume</button>
              </a>

              {/* Button to open email app */}
              <a href="mailto:shakharthapa2004@gmail.com">
                <button>Contact</button>
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/laxmithapas"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/laxmi-thapa-1a5241252/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p> I am Laxmi, a first-gen Indian and undergraduate student at Assam Downtown University with a passion for cyber security, AI/ML, and Web development. Growing up in a multicultural environment sparked my curiosity early on driving me to explore how technology can break barriers and create opportunities for people everywhere!</p>
          </div>
          <div className="about-image">
            <img src={laxmiPhoto} alt="Laxmi Thapa" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-content">
          <div className="experience-box">
            <input type="checkbox" checked readOnly />
            <label>Web Developer Internship</label>
            <p>Company XYZ | June 2024 - August 2024</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>This Python script allows us to search for movies and fetch detailed information about them using the OMDb API</p>
          <a href="https://github.com/laxmithapas/Imdp-movie-rating" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A simple Python program to securely store and manage your passwords using encryption.</p>
          <a href="https://github.com/laxmithapas/Paasword-Manager" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>A simple, user-friendly journal application where you can record your daily thoughts, save them, and search through your entries</p>
          <a href="https://github.com/laxmithapas/Daily-Journal-Applicatio" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>I'm always excited to work on new opportunities! Feel free to reach out.</p>
        <div className="contact-buttons">
          <a
            href="mailto:shakharthapa2004@gmail.com"
            className="contact-button"
          >
            <i className="fas fa-envelope"></i> Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/laxmi-thapa-1a5241252/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <i className="fab fa-linkedin"></i> Connect on LinkedIn
          </a>
          <a
            href="https://github.com/laxmithapas"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <i className="fab fa-github"></i> Follow on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;