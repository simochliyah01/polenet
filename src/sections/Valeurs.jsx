import './Valeurs.css';
import { 
  FaHandshake, 
  FaShieldAlt, 
  FaLeaf, 
  FaUsers, 
  FaBolt 
} from 'react-icons/fa';

function Valeurs() {

  const valeurs = [
    {
      icon: <FaHandshake />,
      title: "Professionnalisme",
      description: "Une approche rigoureuse et des interventions de qualité supérieure pour chaque mission."
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité avant tout",
      description: "Application stricte des normes de sécurité pour la protection de nos équipes et de vos installations."
    },
    {
      icon: <FaLeaf />,
      title: "Respect de l'environnement",
      description: "Utilisation de méthodes et de produits écologiques pour minimiser notre empreinte."
    },
    {
      icon: <FaUsers />,
      title: "Équipe qualifiée",
      description: "Des techniciens formés et expérimentés, prêts à relever tous les défis."
    },
    {
      icon: <FaBolt />,
      title: "Intervention rapide",
      description: "Réactivité et efficacité pour répondre à vos besoins urgents et planifiés."
    }
  ];

  return (
    <section id="valeurs" className="valeurs">
      <div className="valeurs-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">VALEURS</span>
          <h2 className="section-title">Nos engagements, votre garantie</h2>
          <div className="title-underline"></div>
        </div>

        {/* Valeurs Grid */}
        <div className="valeurs-grid">
          {/* Top Row - 3 items */}
          <div className="valeurs-row valeurs-row-top">
            {valeurs.slice(0, 3).map((valeur, index) => (
              <div className="valeur-card" key={index}>
                <div className="valeur-line"></div>
                <div className="valeur-icon">
                  {valeur.icon}
                </div>
                <h3 className="valeur-title">{valeur.title}</h3>
                <p className="valeur-description">{valeur.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 items */}
          <div className="valeurs-row valeurs-row-bottom">
            {valeurs.slice(3, 5).map((valeur, index) => (
              <div className="valeur-card" key={index + 3}>
                <div className="valeur-line"></div>
                <div className="valeur-icon">
                  {valeur.icon}
                </div>
                <h3 className="valeur-title">{valeur.title}</h3>
                <p className="valeur-description">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="valeurs-cta">
          <p>Découvrez comment nos valeurs se traduisent en résultats concrets</p>
          <a href="#contact" className="btn-valeurs">Discutons de votre projet</a>
        </div>

      </div>
    </section>
  );
}

export default Valeurs;