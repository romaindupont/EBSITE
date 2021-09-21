import React, {useState} from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AccueilMobile from '../AccueilMobile';
import Menu from '../Menu';
import Category from '../../containers/Category';
import Articles from '../../containers/Articles';
import Logo from '../../assets/img/logo2.png';
import OneArticle from '../../containers/Articles/OneArticle';
import Footer from '../../containers/FooterMobile';
import Panier from '../../containers/Panier';

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <img className="accueil-logo" src={Logo} alt=""/>
      <Menu open={open} setOpen={setOpen}/>
      <Switch>
        <Route exact path="/">
          <AccueilMobile />
        </Route>
        <Route exact path="/categories">
          <Category open={open}/>
          <Footer />
        </Route>
        <Route exact path="/categories/:slug">
          <Articles open={open}/>
          <Footer />
        </Route>
        <Route path="/categories/articles/:id">
          <OneArticle open={open}/>
          <Footer />
        </Route>
        <Route path="/panier">
          <Panier />
        </Route>
      </Switch>
    </>
    
  )
}

export default App;