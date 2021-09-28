import React, {useState} from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import AccueilMobile from '../AccueilMobile';
import Category from '../../containers/Category';
import Articles from '../../containers/Articles';
import OneArticle from '../../containers/Articles/OneArticle';
import Footer from '../../containers/FooterMobile';
import Panier from '../../containers/Panier';
import Connexion from '../../containers/Connexion';
import Register from '../Register';
import MonCompte from '../MonCompte';
import PasswordModification from '../../containers/MonCompte/PasswordModification';
import InformationsChange from '../../containers/MonCompte/InformationsChange';
import Facture from '../../containers/Facture';
import ListFacture from '../../containers/ListFacture';
import Header from '../Header';

const App = ({isConnected}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <Switch>
        <Route exact path="/">
          <AccueilMobile />
        </Route>
        <Route exact path="/categories">
          <Category open={open}/>
          <Footer open={open}/>
        </Route>
        <Route exact path="/categories/:slug">
          <Articles open={open}/>
          <Footer open={open}/>
        </Route>
        <Route path="/categories/articles/:id">
          <OneArticle open={open}/>
          <Footer open={open}/>
        </Route>
        <Route path="/panier">
          <Panier open={open}/>
        </Route>
        <Route path="/connexion">
          <Connexion open={open}/>
          <Footer open={open}/>
        </Route>
        <Route path="/register">
          <Register open={open}/>
          <Footer open={open}/>
        </Route>
        <Route path="/moncompte">
          {!isConnected ? <Redirect to="/connexion" /> : <MonCompte />}
          <Footer open={open}/>
        </Route>
        <Route path="/passwordChange">
          {!isConnected ? <Redirect to="/connexion" /> : <PasswordModification open={open}/>}
          <Footer open={open}/>
        </Route>
        <Route path="/informations">
          {!isConnected ? <Redirect to="/connexion" /> : <InformationsChange />}
          <Footer open={open}/>
        </Route>
        <Route path="/facture/:id">
          {!isConnected ? <Redirect to="/connexion" /> : <Facture />}
          <Footer open={open}/>
        </Route>
        <Route path="/mesCommandes">
          {!isConnected ? <Redirect to="/connexion" /> : <ListFacture />}
          <Footer open={open}/>
        </Route>
      </Switch>
    </>
    
  )
}

export default App;