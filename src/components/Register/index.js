import React from 'react';
import './style.scss';
import Field from '../../containers/Register/Field';

const Register = () => {
  return (
    <>
    <form className="register" type="submit">
    <div className="register-div">
      <h2 className="register-title">Inscription</h2>
      <label className="register-label">email
        <Field 
          /* value={} */
          type="email"
          placeholder="votre email"
          inputName="email"
          minLength="0"
          maxLength="50"
        />
      </label>
      <label className="register-label">Password
      <Field 
        /* value={} */
        type="password" 
        placeholder="votre mot de passe"
        inputName="password"
        minLength="8"
        maxLength="50"
      />
      </label>
      <label className="register-label">Password_confirmation
      <Field 
        /* value={} */
        type="password"
        placeholder="Confirmer le mot de passe"
        inputName="password_confirmation"
        minLength="8"
        maxLength="50"
      />
      </label>
      <h3 className="register-title">Mon adresse</h3>
 
      <label className="register-label">Prénom
      <Field 
        /* value={} */
        type="text"
        placeholder="votre prénom"
        inputName="surname"
        minLength="2"
        maxLength="50"
      />
      </label>
      <label className="register-label">Nom
      <Field 
        /* value={} */
        type="text"
        placeholder="votre nom"
        inputName="name"
        minLength="1"
        maxLength="50"
      />
      </label>
      <label className="register-label">Adresse
      <Field 
        /* value={} */
        type="text"
        placeholder="votre adresse"
        inputName="adresse"
        minLength="1"
        maxLength="100"
      />
      </label>
      <label className="register-label">Code Postal
      <Field 
        /* value={} */
        type="text"
        placeholder="votre code Postal"
        inputName="cp"
        minLength="5"
        maxLength="5"
      />
      </label>
      <label className="register-label">Téléphone
      <Field 
        /* value={} */
        type="tel"
        placeholder="votre numéro"
        inputName="tel"
        minLength="10"
        maxLength="10"
      />
      </label>
      <label className="register-label">Ville
      <Field 
        /* value={} */
        type="text"
        placeholder="votre ville"
        inputName="ville"
        minLength="1"
        maxLength="50"
      />
      </label>
      </div>
      <button className="register-button">Valider</button>
    </form>

  </>
  )
}

export default Register;