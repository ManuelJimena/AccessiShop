import { useState, useContext, useRef } from 'react';
import { UserContext } from '../../context/userContext';
import "./LoginMenu.css";
import Swal from 'sweetalert2';

const LoginMenu = ({ onCloseModal }) => {
  const { login, register } = useContext(UserContext);
  const [isSignIn, setIsSignIn] = useState(true);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const avatarRef = useRef(null);

  const toggleForm = () => {
    setIsSignIn(prev => !prev);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      let success = false;
      if (isSignIn) {
        success = await login(usernameRef.current.value, passwordRef.current.value);
      } else {
        const formData = new FormData();
        formData.append('username', usernameRef.current.value);
        formData.append('password', passwordRef.current.value);
        formData.append('email', emailRef.current.value);
        formData.append('avatar', avatarRef.current.files[0]);

        success = await register(formData);
      }
      if (success) {
        onCloseModal();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Vaya...',
        text: 'Usuario/Contraseña incorrectos',
      });
    }
  };

  return (
    <div className="overlay">
      <section className={`menu-login-register ${isSignIn ? '' : 'slide'}`}>
        <div className="container">
          <div className="box signin">
            <h2>¿Ya tienes cuenta?</h2>
            <button className="signinBtn" onClick={toggleForm}>
              Sign in
            </button>
          </div>
          <div className="box signup">
            <h2>¿No tienes cuenta?</h2>
            <button className="signupBtn" onClick={toggleForm}>
              Sign up
            </button>
          </div>
          <div className="formBx">
            <div className={`form ${isSignIn ? 'signinform' : 'signupform'}`}>
              <form onSubmit={handleSubmit}>
                <h3>{isSignIn ? 'Sign in' : 'Sign up'}</h3>
                {isSignIn && (
                  <>
                    <input type="text" minLength={3} required ref={usernameRef} placeholder="👥 Usuario" />
                    <input type="password" minLength={8} required ref={passwordRef} placeholder="🔐 Contraseña" />
                  </>
                )}
                {!isSignIn && (
                  <>
                    <input type="email" required ref={emailRef} placeholder="📧 Email" />
                    <input type="text" minLength={3} required ref={usernameRef} placeholder="👥 Usuario" />
                    <input type="password" minLength={8} required ref={passwordRef} placeholder="🔐 Contraseña" />
                    <input type="file" id="avatar" ref={avatarRef} />
                  </>
                )}
                <input type="submit" value={isSignIn ? 'Login' : 'Register'}/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginMenu;
