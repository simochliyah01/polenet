import './Avantages.css';
import { 
  FaMedal, 
  FaCogs, 
  FaHandshake, 
  FaClock 
} from 'react-icons/fa';

function Avantages() {

  const avantages = [
    {
      icon: <FaMedal />,
      title: "Une expérience terrain inégalée",
      description: "Forts de nombreuses années d'opérations dans divers secteurs industriels, nous maîtrisons les spécificités de chaque site."
    },
    {
      icon: <FaCogs />,
      title: "Matériel de pointe",
      description: "Nous utilisons des équipements modernes et performants, garantissant des résultats impeccables et une efficacité maximale."
    },
    {
      icon: <FaHandshake />,
      title: "Service fiable et transparent",
      description: "La confiance est au cœur de nos relations. Nous nous engageons à fournir un service transparent et d'une fiabilité exemplaire."
    },
    {
      icon: <FaClock />,
      title: "Respect scrupuleux des délais",
      description: "Nous comprenons l'importance du temps dans l'industrie et nous nous engageons à respecter les calendriers établis, sans compromettre la qualité."
    }
  ];

  return (
    <section id="avantages" className="avantages">
      <div className="avantages-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">AVANTAGES</span>
          <h2 className="section-title">Pourquoi choisir POLENET pour vos besoins ?</h2>
          <div className="title-underline"></div>
        </div>

        {/* Avantages Grid */}
        <div className="avantages-grid">
          {avantages.map((avantage, index) => (
            <div className="avantage-card" key={index}>
              <div className="avantage-number">0{index + 1}</div>
              <div className="avantage-icon">
                {avantage.icon}
              </div>
              <div className="avantage-content">
                <h3 className="avantage-title">{avantage.title}</h3>
                <p className="avantage-description">{avantage.description}</p>
              </div>
              <div className="avantage-line"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="avantages-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction Client</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Disponible</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">+50</span>
            <span className="stat-label">Projets Réalisés</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">+10</span>
            <span className="stat-label">Années d'Expérience</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Avantages;