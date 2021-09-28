import React from 'react';
import './style.scss';
import Field from '../../containers/Register/Field';
import { passwordAutorisation } from '../../utils/passwordAutorisation';
import ShowPassword from '../../assets/img/show-password.png';
import { PasswordVisibility } from '../../utils/passwordVisibility';
import classNames from 'classnames';

const PasswordModification = ({ changeUserPassword, open }) => {
  const visibility = () => {
    PasswordVisibility()
  }
  const ChangePassword = (e) => {
    let error = document.getElementById('error');
    e.preventDefault();
    if (e.target.form[0].value === e.target.form[1].value) {
      
      if (passwordAutorisation(e.target.form[0].value)) {
        changeUserPassword(e.target.form[0].value);
        error.textContent='Le mot de passe a changé !';
      }
      else {
        error.textContent='Le mot de passe ne respecte pas les règles';
      }
    }
    else {
      error.textContent='Les deux mots de passe ne sont pas identiques';
    }
  }
  return (
    <form className={classNames("monCompte", {"monCompte--openMenu":open})} type="submit">
      <h2>Mon Nouveau Mot de passe</h2>
      <label className="register-label">Nouveau Mot de passe
        <Field 
          type="password" 
          placeholder="votre mot de passe"
          inputName="password"
          minLength="8"
          maxLength="50"
        />
      </label>
      <div className="passwordVisibility" onClick={visibility}><img src={ShowPassword} alt="password" className="image-passwordVisibility"/><span className="tooltip">Afficher/masquer</span></div>
      <label className="register-label">Confirmation du mot de passe
        <Field 
          type="password"
          placeholder="Confirmer le mot de passe"
          inputName="password_confirmation"
          minLength="8"
          maxLength="50"
        />
      </label>
      <button className="form-connexion-button" onClick={ChangePassword}>Confirmer</button>
      <p id="error"></p>
    </form>
  )
}

export default PasswordModification;