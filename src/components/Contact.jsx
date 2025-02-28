import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Formulario enviado", formData);
    setTimeout(() => setIsSubmitted(false), 5000); // Oculta el mensaje después de 5 segundos
  };

  return (
    <section
      id="contact"
      className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-white"
    >
      <div className="container">
        {/* Título */}
        <h2 className="display-4 mb-4 text-dark" data-aos="fade-down">
          Contacto
        </h2>

        {/* Descripción breve */}
        <p
          className="lead text-muted mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Si tienes alguna pregunta o quieres saber más sobre mis proyectos, no
          dudes en enviarme un mensaje.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded shadow-lg mx-auto"
          style={{ maxWidth: "600px" }}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="name" className="h5 text-muted">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Tu nombre"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="email" className="h5 text-muted">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="message" className="h5 text-muted">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block mt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Mensaje de confirmación */}
        {isSubmitted && (
          <div
            className="mt-4 alert alert-success fade show"
            role="alert"
            data-aos="fade-in"
            data-aos-delay="800"
          >
            ¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes
            posible.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
