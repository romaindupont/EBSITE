import React, {useState} from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import AccueilMobile from '../AccueilMobile';
import Menu from '../Menu';
import Category from '../Category';
import Logo from '../../assets/img/logo2.png';

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
        </Route>
      </Switch>
    </>
    
  )
}

export default App;