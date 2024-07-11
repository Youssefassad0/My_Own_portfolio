import React, { useState, useEffect } from "react";
import "./service.css";

function Service() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (index) => {
    if (activeModal === index) {
      setActiveModal(null);
    } else {
      setActiveModal(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeModal !== null && !event.target.closest(".services_modal-content")) {
        setActiveModal(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal]);

  const services = [
    {
      title: "Web Development",
      description: "Service with more than 1 year of experience. Providing quality work to clients and companies.",
      details: [
        "I develop the User Interface.",
        "Web Page development.",
        "I create UX element Interactions.",
        "I manage the databases."
      ]
    },
    {
      title: "Mobile Development",
      description: "Service with more than 1 year of experience. Providing quality work to clients and companies.",
      details: [
        "I develop mobile applications.",
        "App UI/UX design.",
        "Performance optimization.",
        "I manage app data storage."
      ]
    },
    {
      title: "UI/UX Design",
      description: "Service with more than 1 year of experience. Providing quality work to clients and companies.",
      details: [
        "I design user-friendly interfaces.",
        "Wireframing and prototyping.",
        "User research and testing.",
        "Interaction design."
      ]
    }
  ];

  return (
    <section className="services">
      <h2 className="service_title">Services</h2>
      <span className="service_subtitle">What I offer</span>
      <div className="services_container">
        {services.map((service, index) => (
          <div className="services_content" key={index}>
            <div>
              <i className="uil uil-service_icon"></i>
              <h3 className="services_title">{service.title}</h3>
            </div>
            <span className="services__title" onClick={() => toggleModal(index)}>
              View More
              <i className="uil uil-arrow-right services-right"></i>
            </span>
            {activeModal === index && (
              <div className="services_modal">
                <div className="services_modal-content">
                  <i className="uil uil-times services_modal-close" onClick={() => toggleModal(index)}></i>
                  <h3 className="services_modal-title">{service.title}</h3>
                  <p className="services_modal-description">{service.description}</p>
                  <ul className="services_modal-services">
                    {service.details.map((detail, idx) => (
                      <li className="services_modal-service" key={idx}>
                        <i className="uil uil-circle services_modal-icon"></i>
                        <p className="services_modal-info">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
