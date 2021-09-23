import React from 'react';
import './style.scss';
import Field from '../../containers/MonCompte/Field';

const InformationsChange = ({userInfo}) => {
  return (
    <form className="register" type="submit">
    <div className="register-div">
      <h2 className="register-title">Mes informations</h2>
      <label className="register-label">email
        <Field 
          type="email"
          placeholder={userInfo.email}
          name="email"
          minLength="0"
          maxLength="50"
        />
      </label>
      <label className="register-label">Prénom
        <Field 
          type="text"
          placeholder={userInfo.surname}
          name="surname"
          minLength="2"
          maxLength="50"
        />
      </label>
      <label className="register-label">Nom
        <Field 
          type="text"
          placeholder={userInfo.name}
          name="name"
          minLength="1"
          maxLength="50"
        />
      </label>
      <label className="register-label">Adresse
        <Field 
          type="text"
          placeholder={userInfo.adresse}
          name="adresse"
          minLength="1"
          maxLength="100"
        />
      </label>
      <label className="register-label">Code Postal
        <Field 
          type="text"
          placeholder={userInfo.cp}
          name="cp"
          minLength="5"
          maxLength="5"
        />
      </label>
      <label className="register-label">Téléphone
        <Field 
          type="tel"
          placeholder={userInfo.tel}
          name="tel"
          minLength="10"
          maxLength="10"
        />
      </label>
      <label className="register-label">Ville
      <Field 
        type="text"
        placeholder={userInfo.ville}
        inputName="ville"
        minLength="1"
        maxLength="50"
      />
      </label>
      </div>
      <button className="register-button">Valider</button>
    </form>
  )
}

export default InformationsChange;