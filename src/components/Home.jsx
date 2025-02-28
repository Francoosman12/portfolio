import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import imagenDePresentacion from "../assets/THQU1MGPN-U026F1YHZ0F-b17965233ce9-512.jpg";
import { ArrowUp } from "lucide-react";

const Home = () => {
  const [text, setText] = useState("");
  const name = "Franco";
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
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center bg-white text-dark py-5 mt-5 mt-md-0 mt-lg-0"
      style={{ position: "relative" }}
    >
      <div
        className="container d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row w-100">
          <div
            className="col-md-6 d-flex flex-column justify-content-center"
            data-aos="fade-right"
          >
            <h1 className="display-1 fw-bold mb-3">
              Hola, soy <span className="text-black">{text}</span>
            </h1>
            <h2 className="display-6 mb-4">Desarrollador Web Full Stack</h2>
            <p className="lead mb-4" style={{ maxWidth: "600px" }}>
              Transformando ideas en{" "}
              <span className="fw-bold">soluciones web</span> modernas con{" "}
              <span className="fw-bold">React.js</span> y{" "}
              <span className="fw-bold">Node.js</span>.
            </p>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="imagen-presentacion">
              <div
                className="imagen-difuminada"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={imagenDePresentacion}
                  alt="Franco"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#000000",
            color: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            border: "none",
            cursor: "pointer",
          }}
        >
          <ArrowUp size={24} color="white" />
        </button>
      )}
    </section>
  );
};

export default Home;
