import React from 'react';
import './style.scss';
import Field from '../../containers/Register/Field';

const PasswordModification = () => {
  return (
    <form className="monCompte" type="submit">
      <h2>Mon Nouveau Mot de passe</h2>
      <label className="register-label">Nouveau Mot de passe
        <Field 
          /* value={} */
          type="password" 
          placeholder="votre mot de passe"
          inputName="password"
          minLength="8"
          maxLength="50"
        />
        </label>
        <label className="register-label">Confirmation du mot de passe
        <Field 
          /* value={} */
          type="password"
          placeholder="Confirmer le mot de passe"
          inputName="password_confirmation"
          minLength="8"
          maxLength="50"
        />
        </label>
        <button className="form-connexion-button">Confirmer</button>
    </form>
  )
}

export default PasswordModification;