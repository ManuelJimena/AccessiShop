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
                  Bienvenido a AccessiShop. Al utilizar este sitio web, aceptas cumplir con estos términos y condiciones de uso. Si no estás de acuerdo con alguna parte de estos términos, por favor, abstente de utilizar nuestro sitio. El contenido, diseño y logotipos del sitio web son propiedad de AccessiShop. Queda prohibida la reproducción no autorizada.
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
                  El presente Política de Privacidad establece los términos en que AccessiShop usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web.
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
                  Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.
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
