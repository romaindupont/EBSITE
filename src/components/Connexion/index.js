import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './style.scss';
import classNames from 'classnames';


const Connexion = ({openPayment, changeValue, login}) => {
  let history = useHistory();
  const changeIt = (e) => {
    changeValue(e.target.changeValue, e.target.name);
  }
  const connect = (e) => {
    e.preventDefault();
    login(e.target.form.email.value,e.target.form.password.value);
    let path = `/categories`; 
    history.push(path);
  }
  return (
    <form type="submit" className={classNames("form-connexion", {"form-connexion--open":openPayment})}>
      <h3 className="form-connexion-title">Me connecter</h3>
      <div className="form-connexion-input">
      <label className="form-connexion-label--email">Identifiant
        <input type="email" placeholder="votre mail" className="form-connexion-input--email" name="email" onChange={changeIt}></input>
      </label>
      <label className="form-connexion-label--password">Mot de passe
        <input type="password" className="form-connexion-input--password" placeholder="votre mot de passe" name="password" onChange={changeIt}></input>
      </label>
      </div>
      <button className="form-connexion-button" onClick={connect}>Me connecter</button>
      <Link to="/register" className="form-connexion-register">Pas encore de compte ?</Link>
      
    </form>
  )
}

export default Connexion;