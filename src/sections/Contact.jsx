import './Contact.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
  FaArrowRight
} from 'react-icons/fa';

function Contact() {

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Téléphone",
      details: ["0644694044"]
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["polynet78@gmail.com"]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      details: ["129 Avenue de Caire APT N°2", "Témara, Maroc"]
    },
    {
      icon: <FaClock />,
      title: "Disponibilité",
      details: ["Lun - Sam: 8h00 - 18h00", "Devis gratuit sous 24h"]
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CONTACT</span>
          <h2 className="section-title">Contactez POLENET dès aujourd'hui</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            N'hésitez pas à nous contacter pour toute demande d'information ou pour 
            obtenir un devis personnalisé. Nous sommes à votre écoute pour répondre 
            à vos besoins spécifiques.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Demander un devis gratuit</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder="06 XX XX XX XX" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="votre@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service souhaité</label>
                <select id="service" name="service" required>
                  <option value="">Sélectionnez un service</option>
                  <option value="industriel">Nettoyage Industriel</option>
                  <option value="step">Nettoyage des STEP</option>
                  <option value="bassins">Aspiration Bassins & Réservoirs</option>
                  <option value="dechets">Gestion des Déchets Industriels</option>
                  <option value="locaux">Nettoyage Locaux Professionnels</option>
                  <option value="entretien">Entretien Général</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Décrivez votre projet..." required></textarea>
              </div>

              <button type="submit" className="btn-submit">
                <FaPaperPlane />
                <span>Envoyer la demande</span>
                <FaArrowRight className="arrow-icon" />
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h4>{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="contact-map">
              <div className="map-overlay">
                <FaMapMarkerAlt className="map-pin" />
                <span>Témara, Maroc</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-content">

            {/* Logo & Description */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-pole">Pole</span>
                <span className="logo-net">net</span>
              </div>
              <p className="footer-slogan">NETTOYAGE</p>
              <p className="footer-description">
                Votre partenaire en propreté industrielle. Solutions complètes et 
                adaptées aux exigences uniques de chaque environnement industriel.
              </p>
              <div className="footer-social">
                <button className="social-link" aria-label="Facebook"><FaFacebookF /></button>
                <button className="social-link" aria-label="Instagram"><FaInstagram /></button>
                <button className="social-link" aria-label="LinkedIn"><FaLinkedinIn /></button>
                <a href="https://wa.me/212644694044" className="social-link whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Liens Rapides</h4>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#valeurs">Valeurs</a></li>
                <li><a href="#avantages">Avantages</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links">
              <h4>Nos Services</h4>
              <ul>
                <li><a href="#services">Nettoyage Industriel</a></li>
                <li><a href="#services">Nettoyage des STEP</a></li>
                <li><a href="#services">Aspiration Bassins</a></li>
                <li><a href="#services">Gestion des Déchets</a></li>
                <li><a href="#services">Locaux Professionnels</a></li>
                <li><a href="#services">Entretien Général</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <FaMapMarkerAlt />
                <span>129 Avenue de Caire APT N°2, Témara</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone />
                <span>0644694044</span>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope />
                <span>polynet78@gmail.com</span>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>&copy; 2024 POLENET. Tous droits réservés.</p>
            <p>Votre partenaire en propreté industrielle au Maroc</p>
          </div>

        </div>
      </footer>

    </section>
  );
}

export default Contact;