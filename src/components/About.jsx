import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="about-container d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row d-flex flex-lg-row flex-column align-items-center">
          {/* Descripción */}
          <div
            className="col-lg-6 text-center text-lg-start"
            data-aos="fade-right"
          >
            <h2 className="display-4 mb-4">Sobre mí</h2>
            <div className="description mx-auto mb-5">
              <p className="lead" data-aos="fade-up" data-aos-delay="200">
                Hola, soy <span className="highlight">Franco</span>, un
                desarrollador web apasionado por crear soluciones digitales
                innovadoras y eficientes. Con experiencia en tecnologías como
                <strong> React.js</strong>, <strong>Node.js</strong> y
                <strong> MongoDB</strong>, me especializo en el desarrollo de
                aplicaciones web modernas, escalables y optimizadas para la
                mejor experiencia de usuario.
              </p>
              <p className="lead" data-aos="fade-up" data-aos-delay="400">
                Mi objetivo es seguir aprendiendo y perfeccionando mis
                habilidades mientras colaboro en proyectos desafiantes e
                innovadores. Me mantengo actualizado con las últimas tendencias
                y mejores prácticas en desarrollo web para ofrecer soluciones de
                alto rendimiento y calidad.
              </p>
            </div>
          </div>

          {/* Habilidades */}
          <div
            className="col-lg-6 d-flex flex-wrap justify-content-center"
            data-aos-delay="600"
          >
            {[
              { name: "React.js", icon: "fab fa-react", color: "skill-react" },
              { name: "Node.js", icon: "fab fa-node", color: "skill-node" },
              { name: "MongoDB", icon: "fab fa-envira", color: "skill-mongo" },
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-card p-3"
                data-aos="flip-left"
                data-aos-delay={800 + index * 200}
              >
                <div
                  className={`rounded-circle ${skill.color} d-flex align-items-center justify-content-center`}
                >
                  <i
                    className={`${skill.icon} text-white`}
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
