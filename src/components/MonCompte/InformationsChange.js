import React from 'react';
import './style.scss';
import Field from '../../containers/MonCompte/Field';

const InformationsChange = ({userInfo, changeUserInfos}) => {
  const validationData = (e) => {
    e.preventDefault()
    let newEmail = userInfo.email;
    let newName = userInfo.name;
    let newSurname = userInfo.surname;
    let newAdresse = userInfo.adresse;
    let newCp = userInfo.cp;
    let newTel = userInfo.tel;
    let newVille = userInfo.ville;
    if (e.target.form.email.value !== '') {
      newEmail = e.target.form.email.value;
    }
    if (e.target.form.name.value !== '') {
      newName = e.target.form.name.value;
    }
    if (e.target.form.surname.value !== '') {
      newSurname = e.target.form.surname.value;
    }
    if (e.target.form.adresse.value !== '') {
      newAdresse = e.target.form.adresse.value;
    }
    if (e.target.form.cp.value !== '') {
      newCp = e.target.form.cp.value;
    }
    if (e.target.form.tel.value !== '') {
      newTel = e.target.form.tel.value;
    }
    if (e.target.form.ville.value !== '') {
      newVille = e.target.form.ville.value;
    }
    console.log(newEmail,newName,newSurname,newAdresse,newCp,newTel,newVille)
    changeUserInfos(newEmail,newName,newSurname,newAdresse,newCp,newTel,newVille)
  }
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
        name="ville"
        minLength="1"
        maxLength="50"
      />
      </label>
      </div>
      <button className="register-button" onClick={validationData}>Valider</button>
    </form>
  )
}

export default InformationsChange;