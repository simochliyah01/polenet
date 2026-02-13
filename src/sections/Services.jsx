import './Services.css';
import { 
  FaIndustry, 
  FaWater, 
  FaSwimmingPool, 
  FaRecycle, 
  FaBuilding, 
  FaBroom 
} from 'react-icons/fa';

function Services() {

  const services = [
    {
      icon: <FaIndustry />,
      title: "Nettoyage Industriel",
      description: "Expertise en nettoyage de grandes surfaces, machines et équipements spécifiques."
    },
    {
      icon: <FaWater />,
      title: "Nettoyage des STEP",
      description: "Maintenance et désinfection des Stations d'Épuration des Eaux Usées."
    },
    {
      icon: <FaSwimmingPool />,
      title: "Aspiration Bassins & Réservoirs",
      description: "Vidange et nettoyage en profondeur des bassins et réservoirs de stockage."
    },
    {
      icon: <FaRecycle />,
      title: "Gestion des Déchets Industriels",
      description: "Collecte, tri et traitement responsable des déchets conformément aux réglementations."
    },
    {
      icon: <FaBuilding />,
      title: "Nettoyage Locaux Professionnels",
      description: "Entretien régulier et approfondi des bureaux, commerces et espaces professionnels."
    },
    {
      icon: <FaBroom />,
      title: "Entretien Général",
      description: "Solutions complètes pour maintenir la propreté et l'hygiène de vos installations."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">SERVICES</span>
          <h2 className="section-title">Nos solutions de nettoyage industriel</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Des services professionnels adaptés à tous vos besoins en propreté industrielle
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-icon-bg"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                En savoir plus
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Besoin d'une solution personnalisée ?</h3>
            <p>Contactez-nous pour une étude gratuite de vos besoins</p>
          </div>
          <a href="#contact" className="btn-cta">Demander un devis</a>
        </div>

      </div>
    </section>
  );
}

export default Services;