import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ExternalLink, Github } from "lucide-react";
import pdv from "../assets/pdv.png";
import depie from "../assets/depie.png";
import hermanos from "../assets/3hermanos.png";
import casateka from "../assets/casateka.png";
import devos from "../assets/devos.png";
import rollingames from "../assets/rollingames.png";
import fedra from "../assets/fedra.png";

const projects = [
  {
    title: "Fedra",
    description:
      "App Web destinada a la Federación de Entidades de Discotecas de la República Argentina.",
    imageUrl: fedra,
    link: "https://fedra.ar/",
    codeUrl: "https://github.com/tu-usuario/gimnasio",
  },
  {
    title: "Rolling Gamers",
    description:
      "App Web destinada a Juegos de Pc, fue hecha como modo de práctica.",
    imageUrl: rollingames,
    link: "https://rollingames.netlify.app/",
    codeUrl: "https://github.com/tu-usuario/gimnasio",
  },
  {
    title: "Gimnasio Online",
    description:
      "App Web destinada a ofrecer un servicio de gimnasio online, es decir sus rutinas totalmente personalizadas.",
    imageUrl: depie,
    link: "https://depie-frontend.vercel.app/",
    codeUrl: "https://github.com/tu-usuario/gimnasio",
  },
  {
    title: "Catálogo Online - PDV",
    description: "Aplicación de comercio creada como servicio de muestra.",
    imageUrl: pdv,
    link: "https://pdvcatalogo.netlify.app",
    codeUrl: "https://github.com/Francoosman12/catalogo-pdv.git",
  },
  {
    title: "3H - Mantenimiento",
    description:
      "Landing Page para mostrar los servicios que esta empresa ofrece..",
    imageUrl: hermanos,
    link: "https://3hmantenimiento.netlify.app/",
    codeUrl: "https://github.com/tu-usuario/3h-mantenimiento",
  },
  {
    title: "Casa Teka",
    description:
      "Gestor de tareas con autenticación y base de datos en tiempo real.",
    imageUrl: casateka,
    link: "https://casateka.netlify.app/",
    codeUrl: "https://github.com/tu-usuario/casateka",
  },
  {
    title: "Sistema de Gestión - DevOs",
    description: "Sistema de gestión para pymes.",
    imageUrl: devos,
    link: "https://sistema-devos-frontend.vercel.app/login",
    codeUrl: "https://github.com/tu-usuario/casateka",
  },
];

const ProjectCard = ({ title, description, imageUrl, link, codeUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      data-aos="fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen del proyecto */}
      <div className="image-container">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>

      {/* Contenido que aparece en hover */}
      {isHovered && (
        <div className="card-overlay">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-buttons">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <ExternalLink className="icon" /> Demo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        {/* Texto estático a la izquierda */}
        <div className="projects-text">
          <h2 className="display-4 mb-4" data-aos="fade-down">
            Proyectos Destacados
          </h2>
          <p className="lead mb-5" data-aos="fade-up">
            Descubre algunos de los proyectos en los que he trabajado, donde
            fusiono creatividad y tecnología para desarrollar soluciones
            innovadoras. Explora el código en GitHub o experimenta la
            demostración en vivo para verlos en acción.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
