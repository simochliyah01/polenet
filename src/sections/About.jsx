import './About.css';
import { FaMapMarkerAlt, FaIndustry, FaHandshake, FaAward } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">À PROPOS</span>
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <div className="title-underline"></div>
        </div>

        {/* About Content */}
        <div className="about-content">

          {/* Text Side */}
          <div className="about-text">
            <p className="about-intro">
              <strong>POLENET</strong> est une société marocaine basée à <strong>Témara</strong>, 
              spécialisée dans le nettoyage industriel et les services professionnels associés.
            </p>

            <p>
              Nous offrons des solutions complètes et adaptées aux exigences uniques de chaque 
              environnement industriel. Notre expertise couvre un large éventail d'interventions, 
              allant des sites industriels complexes aux usines et bâtiments professionnels.
            </p>

            <div className="about-highlight">
              <p>
                Notre engagement est de garantir des espaces de travail propres, sûrs et 
                conformes aux normes les plus strictes, contribuant ainsi à l'optimisation 
                de vos opérations.
              </p>
            </div>

            <a href="#contact" className="btn-about">Contactez-nous</a>
          </div>

          {/* Features Side */}
          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="about-feature-content">
                <h3>Basée à Témara</h3>
                <p>Présence locale avec une couverture nationale pour tous vos besoins</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaIndustry />
              </div>
              <div className="about-feature-content">
                <h3>Expertise Industrielle</h3>
                <p>Spécialistes des sites industriels complexes et environnements exigeants</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaHandshake />
              </div>
              <div className="about-feature-content">
                <h3>Solutions Sur Mesure</h3>
                <p>Services adaptés aux exigences uniques de chaque client</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaAward />
              </div>
              <div className="about-feature-content">
                <h3>Normes Strictes</h3>
                <p>Conformité aux standards les plus élevés de qualité et sécurité</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;