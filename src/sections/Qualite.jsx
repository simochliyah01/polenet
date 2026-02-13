import './Qualite.css';
import { 
  FaSearchPlus, 
  FaGraduationCap, 
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';

function Qualite() {

  const qualitePoints = [
    {
      icon: <FaSearchPlus />,
      title: "Contrôle Qualité Continu",
      description: "Des inspections régulières pour assurer l'excellence de nos services."
    },
    {
      icon: <FaGraduationCap />,
      title: "Formation du Personnel",
      description: "Nos équipes bénéficient de formations continues sur les dernières techniques et normes de nettoyage."
    },
    {
      icon: <FaRocket />,
      title: "Technologies Innovantes",
      description: "Investissement constant dans des solutions technologiques de pointe pour une efficacité accrue."
    }
  ];

  return (
    <section id="qualite" className="qualite">
      <div className="qualite-container">

        <div className="qualite-content">

          {/* Left Side - Visual */}
          <div className="qualite-visual">
            <div className="visual-box">
              <div className="visual-icon-main">
                <FaCheckCircle />
              </div>
              <div className="visual-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
              <div className="visual-badge">
                <span className="badge-text">QUALITÉ</span>
                <span className="badge-subtext">CERTIFIÉE</span>
              </div>
            </div>
            <div className="visual-stats">
              <div className="visual-stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Conformité</span>
              </div>
              <div className="visual-stat">
                <span className="stat-value">0</span>
                <span className="stat-label">Compromis</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="qualite-text">
            <span className="section-badge">QUALITÉ</span>
            <h2 className="section-title">Des normes de qualité rigoureuses</h2>
            <div className="title-underline-left"></div>
            
            <p className="qualite-intro">
              Chez <strong>POLENET</strong>, la qualité n'est pas qu'un objectif, c'est une 
              exigence constante. Nous adhérons à des protocoles stricts et utilisons des 
              méthodes éprouvées pour garantir des résultats qui non seulement répondent, 
              mais dépassent vos attentes.
            </p>

            <div className="qualite-points">
              {qualitePoints.map((point, index) => (
                <div className="qualite-point" key={index}>
                  <div className="point-icon">
                    {point.icon}
                  </div>
                  <div className="point-content">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-qualite">En savoir plus</a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Qualite;