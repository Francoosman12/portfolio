import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Navbar.css";
import logo from "../assets/4-sinfondo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cierra el menú en móviles
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top p-1 ${
        isScrolled ? "navbar-scrolled" : "navbar-default"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="Mi Portafolio" className="navbar-logo" />
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Inicio", id: "home" },
              { name: "Sobre mí", id: "about" },
              { name: "Habilidades", id: "skills" },
              { name: "Proyectos", id: "projects" },
              { name: "Contacto", id: "contact" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <button
                  className="nav-link btn-link"
                  onClick={() => handleScrollToSection(item.id)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Redes sociales */}
          <div className="d-flex ms-3 social-icons">
            <a
              href="https://github.com/Francoosman12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/francoemanuelosm%C3%A1n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
