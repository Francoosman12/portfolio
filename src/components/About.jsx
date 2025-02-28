import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-light py-5"
    >
      <div className="container">
        {/* Título */}
        <h2 className="display-4 mb-4 text-dark" data-aos="fade-down">
          Sobre mí
        </h2>

        {/* Descripción */}
        <div
          className="mx-auto mb-5"
          style={{ maxWidth: "800px" }}
          data-aos="fade-up"
        >
          <p className="lead text-dark" data-aos="fade-up" data-aos-delay="200">
            Hola, soy Franco, un desarrollador web con pasión por crear
            soluciones digitales efectivas. Con experiencia en tecnologías como{" "}
            <strong>React.js</strong>, <strong>Node.js</strong> y{" "}
            <strong>MongoDB</strong>, mi enfoque es ofrecer aplicaciones
            modernas, escalables y fáciles de usar.
          </p>
          <p className="lead text-dark" data-aos="fade-up" data-aos-delay="400">
            Mi objetivo es seguir aprendiendo y mejorar mis habilidades,
            mientras colaboro en proyectos desafiantes e innovadores. Siempre me
            esfuerzo por mantenerme actualizado con las últimas tendencias y
            mejores prácticas en desarrollo web.
          </p>
        </div>

        {/* Habilidades */}
        <div
          className="row justify-content-center text-dark"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {[
            { name: "React.js", icon: "fab fa-react", color: "bg-primary" },
            { name: "Node.js", icon: "fab fa-node", color: "bg-success" },
            { name: "MongoDB", icon: "fab fa-envira", color: "bg-dark" },
          ].map((skill, index) => (
            <div
              key={index}
              className="col-4 col-md-2 mb-4"
              data-aos="flip-left"
              data-aos-delay={800 + index * 200}
            >
              <div className="d-flex flex-column align-items-center">
                <div
                  className={`rounded-circle ${skill.color} d-flex align-items-center justify-content-center`}
                  style={{ width: "70px", height: "70px" }}
                >
                  <i
                    className={`${skill.icon} text-white`}
                    style={{ fontSize: "30px" }}
                  ></i>
                </div>
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
