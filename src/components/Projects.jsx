import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "E-commerce Web App",
    description:
      "Aplicación de comercio electrónico con React.js, Node.js y MongoDB.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/400x250?text=E-commerce",
    link: "https://github.com/tu-usuario/ecommerce-web-app",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Mi sitio web personal para mostrar mi portafolio como desarrollador full stack.",
    technologies: ["React.js", "Bootstrap"],
    image: "https://via.placeholder.com/400x250?text=Portfolio",
    link: "https://github.com/tu-usuario/portfolio-website",
    demo: "https://tuportfolio.com",
  },
  {
    title: "Task Manager App",
    description:
      "Gestor de tareas con autenticación y base de datos en tiempo real.",
    technologies: ["React.js", "Firebase"],
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
    link: "https://github.com/tu-usuario/task-manager",
    demo: "https://task-manager-demo.com",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="py-5 bg-light min-vh-100 d-flex align-items-center"
    >
      <div className="container text-center">
        {/* Título */}
        <h2 className="display-4 mb-4 text-dark" data-aos="fade-down">
          Proyectos Destacados
        </h2>

        {/* Descripción breve */}
        <p
          className="lead text-muted mb-5 mx-auto"
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
        >
          Estos son algunos de los proyectos en los que he trabajado. Puedes
          explorar el código en GitHub o ver la demostración en vivo.
        </p>

        {/* Galería de Proyectos */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="card h-100 shadow-lg border-0 rounded-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top rounded-top-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>

                  {/* Tecnologías */}
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-info me-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="mt-auto d-flex justify-content-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
