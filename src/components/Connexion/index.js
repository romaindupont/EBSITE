import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './style.scss';
import classNames from 'classnames';
import ShowPassword from '../../assets/img/show-password.png';
import { PasswordVisibility } from '../../utils/passwordVisibility';

const Connexion = ({openPayment, changeValue, login, userList}) => {
  let history = useHistory();
  let error = document.getElementById('error');
  const visibility = () => {
    PasswordVisibility()
  }
  const changeIt = (e) => {
    changeValue(e.target.changeValue, e.target.name);
  }
  const connect = (e) => {
    e.preventDefault();
    login(e.target.form.email.value,e.target.form.password.value);
    const findUser = userList.find((user)=> user.email === e.target.form.email.value & user.password === e.target.form.password.value)
    
    if (findUser === undefined) {
      error.textContent="Les informations saisies sont incorrectes";
    }
    else {
      let path = `/categories`; 
      history.push(path);

    }

  }
  return (
    <form type="submit" className={classNames("form-connexion", {"form-connexion--open":openPayment})}>
      <h3 className="form-connexion-title">Me connecter</h3>
      <div className="form-connexion-input">
      <label className="form-connexion-label--email">Identifiant
        <input type="email" placeholder="votre mail" className="form-connexion-input--email" name="email" onChange={changeIt}></input>
      </label>
      <label className="form-connexion-label--password">Mot de passe
        <input type="password" className="form-connexion-input--password" placeholder="votre mot de passe" id="password" name="password" onChange={changeIt}></input>
      </label>
      <div className="passwordVisibility-connexion" onClick={visibility}><img src={ShowPassword} alt="password" className="image-passwordVisibility-connexion"/><span className="tooltip">Afficher/masquer</span></div>
      </div>
      <button className="form-connexion-button" onClick={connect}>Me connecter</button>
      <Link to="/register" className="form-connexion-register">Pas encore de compte ?</Link>
      <p id="error"></p>
    </form>
  )
}

export default Connexion;