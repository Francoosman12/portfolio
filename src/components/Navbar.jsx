import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top p-3 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white bg-opacity-80"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw-bold" href="#">
          Mi Portafolio
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
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#home"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#skills"
                onClick={() => setIsOpen(false)}
              >
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="d-flex ms-3">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
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
