import TechStack from "../../components/techstack/TechStack";
import "./home.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProjectCard from "../../components/projectcard/ProjectCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <div id="about" className="about-me-container">
        <div className="about-me-image-container">
          <img src="me.jpg" alt="" />
        </div>

        <div className="about-me-info-container">
          <div>
            <div>
              <p>
                I’m a full-stack developer who enjoys building complete web
                applications, from the frontend interface to the backend systems
                that power them. I particularly enjoy backend development, where
                I can design APIs, structure databases, and create scalable
                application logic. I have experience working with technologies
                such as JavaScript and TypeScript, and I’m comfortable
                developing backend systems using modern frameworks and tools.
                I’m also knowledgeable in Java and have experience creating and
                managing containerized development environments using Docker. I
                enjoy understanding how systems work as a whole and building
                applications that are both functional and maintainable.
              </p>
            </div>

            <div>
              <TechStack />
            </div>
          </div>
        </div>
      </div>

      <section id="projects">
        <h2>Projects</h2>

        <div className="home-project-cards-container">
                    
          <h3>Personal Projects</h3>
          <p>Below are projects I built for myself and learning purposes</p>

          <ProjectCard
            title="Ecommerce Website"
            description="A mock ecommerce platform built to demonstrate full-stack development, featuring backend-driven product management, order handling, and a functional cart system. It also includes a basic AI chatbot to assist users in finding products."
            image="vite.svg"
            slug="ecommerce-website"
            onClick={() => navigate("/projects/ecommerce-website")}
          />

          <ProjectCard
            title="Task App"
            description="A task management application developed as part of my Personal Development Plan to learn full-stack mobile development. Built with React Native and a backend, it allows users to create, manage, and persist tasks across sessions."
            image="taskapp.png"
            slug="task-app"
            onClick={() => navigate("/projects/task-app")}
          />

          <h3>University Projects</h3>
          <p>Below are projects I had to do in a group for my university</p>

          <ProjectCard
            title="Smart Time Registration"
            description="A system that processes Outlook calendar data to automatically calculate time spent on projects. The application parses imported files and structures the data to provide clear insights into time tracking and productivity."
            image="vite.svg"
            slug="smart-time-registration"
            onClick={() => navigate("/projects/smart-time-registration")}
          />

          <ProjectCard
            title="StreamFlix"
            description="A backend-focused project simulating a streaming platform, built to explore API design, authentication, and data management. It handles users, content, and interactions, demonstrating how streaming services operate behind the scenes."
            image="streamsync.png"
            slug="streamflix"
            onClick={() => navigate("/projects/streamflix")}
          />

          <ProjectCard
            title="Bin there, Done that"
            description="An educational web application designed to teach children about recycling through interactive mini-games. It integrates AI-assisted waste sorting to make learning engaging and accessible."
            image="bintheredonethat.png"
            slug="bin-there-done-that"
            onClick={() => navigate("/projects/bin-there-done-that")}
          />

          <ProjectCard
                      title="NHL Stenden Explorer"
                      description="A tool for students, staff, parents, and visitors to virtually explore the NHL Stenden Emmen campus. The web app offers interactive 360-degree images and important facility information, making campus navigation and discovery easy and accessible."
                      image="vite.svg"
                      slug="nhl-stenden-explorer"
                      onClick={() => navigate("/projects/nhl-stenden-explorer")}
                    />

          <ProjectCard
            title="SSM Product Passport Tracking"
            description="A tool for tracking products and their details through the supply chain."
            image="ssmproduct.png"
            slug="ssm-product-passport-tracking"
            onClick={() => navigate("/projects/ssm-product-passport-tracking")}
          />
        </div>
      </section>

      <section id="background">
        <h2>Background</h2>
        <p>
          I was born and raised in South Africa, and after visiting the
          Netherlands I decided to move there to pursue my studies. At the time
          I was studying game development, which eventually led me to pursue a
          broader path in IT and software development.
        </p>
        <p>
          My interest in programming originally started through gaming and
          curiosity about how games are built. That curiosity later expanded
          into learning how to build software, websites, and applications.
          Outside of development, I’m still a gamer at heart and also enjoy
          playing guitar and piano.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact</h2>

        <p className="contact-description">
          If you'd like to get in touch about opportunities, collaborations, or
          questions about my work, feel free to reach out through any of the
          options below. Email and LinkedIn are usually the fastest ways to
          contact me. You can also explore my work on GitHub or download my CV.
          If you prefer speaking directly, you can reach me at{" "}
          <strong>+31 686133826</strong>.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/oomfrikkie"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>

          <a href="mailto:derjen.frick@gmail.com" className="contact-item">
            <MdEmail className="contact-icon" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/derjen-frick-775714262/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="/Derjen_Frick_cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaFileAlt className="contact-icon" />
            <span>Download CV</span>
          </a>
        </div>
      </section>
    </section>
  );
}