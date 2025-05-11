import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import imagenDePresentacion from "../assets/THQU1MGPN-U026F1YHZ0F-b17965233ce9-512.jpg";
import { ArrowUp } from "lucide-react";

const Home = () => {
  const [text, setText] = useState("");
  const name = "DevOs";
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    let index = 0;
    const typingInterval = setInterval(() => {
      setText(name.slice(0, index + 1));
      index += 1;
      if (index === name.length) {
        clearInterval(typingInterval);
      }
    }, 300);

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="home" className="home-container">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          {/* Texto y botones */}
          <div className="col-lg-6 text-left" data-aos="fade-right">
            <img src="" alt="" />
            <h1 className="display-1 fw-bold mb-3">
              Hola, soy <span className="highlight">{text}</span>
            </h1>
            <h2 className="display-6 mb-4">Desarrollador Web Full Stack</h2>
            <p className="lead mb-4">
              Transformando ideas en{" "}
              <span className="fw-bold">soluciones digitales </span>
              innovadoras y escalables con{" "}
              <span className="fw-bold">React.js</span> y
              <span className="fw-bold"> Node.js</span>.
            </p>

            {/* Botones */}
            <div className="d-flex gap-3 botones ">
              <button className="btn btn-outline-light">Contrátame</button>
              <button className="btn btn-outline-light">Descargar CV</button>
            </div>

            {/* Redes sociales */}
            <div className="social-container mt-4">
              <p className="follow-text">Sígueme en</p>
              <div className="social-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center"
            data-aos="fade-left"
          >
            <div className="imagen-container">
              <div className="imagen-borde"></div>
              <div className="imagen-presentacion">
                <img
                  src={imagenDePresentacion}
                  alt="Franco"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollButton && (
        <button onClick={scrollToTop} className="scroll-button">
          <ArrowUp size={24} color="white" />
        </button>
      )}
    </section>
  );
};

export default Home;
