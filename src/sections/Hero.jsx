import './Hero.css';
import { FaIndustry, FaShieldAlt, FaLeaf } from 'react-icons/fa';

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">POLENET NETTOYAGE</span>
          <h1 className="hero-title">
            Votre partenaire en<br />
            <span className="highlight">propreté industrielle</span>
          </h1>
          
          <p className="hero-description">
            Solutions complètes et adaptées aux exigences uniques de chaque 
            environnement industriel. Notre expertise couvre un large éventail 
            d'interventions, allant des sites industriels complexes aux usines 
            et bâtiments professionnels.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Demander un devis</a>
            <a href="#services" className="btn-secondary">Découvrir nos services</a>
          </div>
        </div>

        <div className="hero-features">
          <div className="hero-feature">
            <div className="feature-icon">
              <FaIndustry />
            </div>
            <div className="feature-text">
              <h3>Expertise Industrielle</h3>
              <p>Sites complexes et usines</p>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <div className="feature-text">
              <h3>Sécurité Garantie</h3>
              <p>Normes strictes respectées</p>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <div className="feature-text">
              <h3>Éco-responsable</h3>
              <p>Produits écologiques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
    </section>
  );
}

export default Hero;