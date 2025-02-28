import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const skills = [
  { name: "React.js", icon: "fab fa-react", color: "primary" },
  { name: "Node.js", icon: "fab fa-node-js", color: "success" },
  { name: "MongoDB", icon: "fas fa-database", color: "dark" },
  { name: "JavaScript", icon: "fab fa-js", color: "warning" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "purple" },
  { name: "GitHub", icon: "fab fa-github", color: "secondary" },
  {
    name: "Google Big Query",
    icon: "fa-solid fa-magnifying-glass-chart",
    color: "green",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="py-5 bg-white min-vh-100 d-flex align-items-center"
    >
      <div className="container text-center">
        {/* Título */}
        <h2 className="display-4 mb-4 text-dark" data-aos="fade-down">
          Habilidades Técnicas
        </h2>

        {/* Descripción */}
        <p
          className="lead text-muted mb-5 mx-auto"
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
        >
          Estas son algunas de las tecnologías y herramientas con las que
          trabajo para desarrollar aplicaciones web modernas y escalables.
        </p>

        {/* Grid de Skills */}
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card border-0 shadow h-100 p-4 rounded-4">
                <div className={`text-${skill.color} mb-3`}>
                  <i className={`${skill.icon} fa-3x`}></i>
                </div>
                <h5 className="card-title">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
