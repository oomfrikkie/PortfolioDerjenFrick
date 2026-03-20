import { FaJava, FaDocker, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMariadb,
  SiTailwindcss,
} from "react-icons/si";

import "./techstack.css";

export default function TechStack() {
  return (
    <div className="tech-stack">

      <div className="tech-item">
        <FaJava className="icon" />
        <span className="tech-name">Java</span>
      </div>

      <div className="tech-item">
        <SiJavascript className="icon" />
        <span className="tech-name">JavaScript</span>
      </div>

      <div className="tech-item">
        <SiTypescript className="icon" />
        <span className="tech-name">TypeScript</span>
      </div>

      <div className="tech-item">
        <FaDocker className="icon" />
        <span className="tech-name">Docker</span>
      </div>

      <div className="tech-item">
        <SiPostgresql className="icon" />
        <span className="tech-name">PostgreSQL</span>
      </div>

      <div className="tech-item">
        <SiMariadb className="icon" />
        <span className="tech-name">MariaDB</span>
      </div>

      <div className="tech-item">
        <FaReact className="icon" />
        <span className="tech-name">React</span>
      </div>

      <div className="tech-item">
        <SiTailwindcss className="icon" />
        <span className="tech-name">Tailwind</span>
      </div>

    </div>
  );
}