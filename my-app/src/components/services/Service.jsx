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
      title: "Database Management",
      description: "Over 1 year of experience in managing databases efficiently for clients and companies.",
      details: [
        "Database design and development.",
        "Optimization and performance tuning.",
        "Data migration and integration.",
        "Database security and backup."
      ],
      icon:"icon-database"
    },
    {
      title: "API Development",
      description: "Over 1 year of experience in creating robust and scalable APIs for various applications.",
      details: [
        "Designing RESTful APIs.",
        "API security and authentication.",
        "Integration with front-end and mobile applications.",
        "API documentation and testing."
      ],
      icon:"icon-strapi"

    },
    {
      title: "Back-End Development",
      description: "Specialized in server-side logic and integration with databases and front-end systems.",
      details: [
        "Server setup and management.",
        "Business logic implementation.",
        "Database connectivity.",
        "Performance optimization and scaling."
      ],
      icon:"icon-dev-dot-to"
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
              <i className={service.icon}>

              </i>
              <h3 className="services_title">{service.title}</h3>
            </div>
            <span className="services__title" onClick={() => toggleModal(index)}>
              View More
              <i className="uil uil-arrow-right services-right"></i>
            </span>
            {activeModal === index && (
              <div className="services_modal">
                <div className="services_modal-content">
                  <i className="icon-cross" onClick={() => toggleModal(index)}></i>
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
