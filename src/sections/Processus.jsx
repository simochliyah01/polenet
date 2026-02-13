import './Processus.css';
import { 
  FaClipboardList, 
  FaCalendarCheck, 
  FaWrench, 
  FaChartLine 
} from 'react-icons/fa';

function Processus() {

  const etapes = [
    {
      icon: <FaClipboardList />,
      title: "Évaluation",
      description: "Analyse approfondie de vos besoins et de votre environnement pour une compréhension complète du projet."
    },
    {
      icon: <FaCalendarCheck />,
      title: "Planification",
      description: "Élaboration d'un plan d'action détaillé avec calendrier précis et ressources adaptées."
    },
    {
      icon: <FaWrench />,
      title: "Exécution",
      description: "Mise en œuvre rigoureuse des interventions par nos équipes qualifiées et expérimentées."
    },
    {
      icon: <FaChartLine />,
      title: "Rapports",
      description: "Suivi détaillé et reporting complet pour une transparence totale sur les résultats obtenus."
    }
  ];

  return (
    <section id="processus" className="processus">
      <div className="processus-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">PROCESSUS</span>
          <h2 className="section-title">Notre démarche pour un environnement impeccable</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Notre processus est conçu pour vous offrir une solution de nettoyage industriel 
            fluide et efficace, de l'analyse initiale à l'optimisation continue.
          </p>
        </div>

        {/* Processus Timeline */}
        <div className="processus-timeline">
          {etapes.map((etape, index) => (
            <div className="processus-step" key={index}>
              {/* Connector Line */}
              {index < etapes.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow"></div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="step-card">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">
                  {etape.icon}
                </div>
                <h3 className="step-title">{etape.title}</h3>
                <p className="step-description">{etape.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="processus-cta">
          <div className="cta-box">
            <div className="cta-content">
              <h3>Prêt à commencer ?</h3>
              <p>Contactez-nous pour une évaluation gratuite de vos besoins</p>
            </div>
            <a href="#contact" className="btn-processus">Démarrer un projet</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Processus;