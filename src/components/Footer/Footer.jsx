import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [mostrarCondiciones, setMostrarCondiciones] = useState(false);
  const [mostrarPrivacidad, setMostrarPrivacidad] = useState(false);
  const [mostrarCookies, setMostrarCookies] = useState(false);

  const toggleCondiciones = () => {
    setMostrarCondiciones(!mostrarCondiciones);
  };

  const togglePrivacidad = () => {
    setMostrarPrivacidad(!mostrarPrivacidad);
  };

  const toggleCookies = () => {
    setMostrarCookies(!mostrarCookies);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className='redes-sociales'>
        <ul>
          <li>
            <a href="https://www.facebook.com/?locale=es_ES">
              <i className="fa-brands fa-facebook" aria-label="facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=es">
              <i className="fa-brands fa-x-twitter" aria-label="twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/home">
              <i className="fa-brands fa-linkedin" aria-label="linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <i className="fa-brands fa-youtube" aria-label="youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      <section className='terminos'>
        <div className="politica">
          <button onClick={toggleCondiciones}>Términos y Condiciones</button>
          {mostrarCondiciones && (
            <div className="modal politica-modal">
              <div className="modal-contenido politica-modal-contenido">
                <p>
                 Bienvenido a AccessiShop. Al utilizar este sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, por favor, abstente de usarlo. El contenido, diseño y logotipos del sitio son propiedad de AccessiShop y su reproducción no autorizada está prohibida.
                </p>
                <button onClick={toggleCondiciones}>Cerrar</button>
              </div>
            </div>
          )}
        </div>

        <div className="privacidad">
          <button onClick={togglePrivacidad}>Política de Privacidad</button>
          {mostrarPrivacidad && (
            <div className="modal privacidad-modal">
              <div className="modal-contenido privacidad-modal-contenido">
                <p>
                  En AccessiShop, recogemos y protegemos tu información personal, como nombre y correo electrónico, para mejorar tu experiencia en nuestra tienda de ortopedia. Utilizamos estos datos para ofrecerte mejores productos y promociones, y no los compartiremos con terceros sin tu consentimiento, salvo por requerimiento legal. Puedes controlar el uso de tus datos contactándonos en cualquier momento. Gracias por confiar en AccessiShop.
                </p>
                <button onClick={togglePrivacidad}>Cerrar</button>
              </div>
            </div>
          )}
        </div>

        <div className="cookies">
          <button onClick={toggleCookies}>Cookies</button>
          {mostrarCookies && (
            <div className="modal cookies-modal">
              <div className="modal-contenido cookies-modal-contenido">
              <p>
                Este sitio web utiliza cookies para mejorar tu experiencia de navegación y proporcionarte servicios más personalizados. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio. Nos ayudan a recordar tus preferencias, entender cómo utilizas nuestro sitio y mejorar aspectos de nuestro servicio. Al continuar utilizando nuestro sitio, aceptas el uso de cookies. Para obtener más información, consulta nuestra Política de Privacidad.
              </p>
                <button onClick={toggleCookies}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="imagen-footer">
        <a href='https://portalentodigital.fundaciononce.es/' target='_blanck'>
        <img className="once" src="https://res.cloudinary.com/djnt5pnax/image/upload/v1701114784/oncetrasparente_ixkwrn.webp" alt="once" />
        </a>
        <a href='https://global.thepower.education/' target='_blanck'>
        <img className="thepower" src="https://res.cloudinary.com/djnt5pnax/image/upload/v1701114784/thepowertrasparente_tg9gjy.webp" alt="thepower" />
        </a>
      </div>
      <div className='bordecito'></div>
      <div className='copyright'>
        <h2> © {currentYear} AccessiShop </h2>
      </div>
    </div>
  );
}

export default Footer;
