import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";
import emailjs from "emailjs-com"; // ✅ Importar EmailJS

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

    // ✅ Configurar EmailJS
    emailjs
      .send(
        "default_service", // Reemplaza con tu Service ID de EmailJS
        "template_8u8cz9e", // Reemplaza con tu Template ID de EmailJS
        {
          from_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "PeAZYh_EVqYdC-rv8" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito", response);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error("Error al enviar el correo", error);
        }
      );
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        {/* ✅ Formulario a la izquierda */}
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h2 className="display-4 mb-4">Contacto</h2>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Describe tu problema o lo que buscas automatizar..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Mensaje
          </button>
        </form>

        {/* ✅ Texto explicativo a la derecha */}
        <div className="contact-text">
          <h2 className="display-4 mb-4">¿Cómo puedo ayudarte?</h2>
          <p className="lead">
            Si tienes un problema que necesitas resolver o buscas automatizar un
            proceso, cuéntame más sobre tu situación.
          </p>
          <p className="lead">
            ¿Necesitas una aplicación web? ¿Quieres optimizar tu flujo de
            trabajo? Déjame saber qué necesitas y juntos encontraremos la mejor
            solución.
          </p>
        </div>
      </div>

      {/* ✅ Mensaje de éxito */}
      {isSubmitted && (
        <div
          className="success-message"
          data-aos="fade-in"
          data-aos-delay="800"
        >
          ¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes
          posible.
        </div>
      )}
    </section>
  );
};

export default Contact;
