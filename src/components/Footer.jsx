import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        {/* Enlaces de Redes Sociales */}
        <div className="mb-4">
          <a
            href="https://www.linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 h5"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 h5"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        {/* Derechos de autor */}
        <p className="text-muted">
          &copy; 2025 Tu Nombre. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
