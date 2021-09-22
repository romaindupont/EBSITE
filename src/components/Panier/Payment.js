import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';
import BlueCard from './BlueCard';
import Connexion from '../Connexion';

const Payment = ({isConnected}) => {
  const [openPayment, setOpenPaiment] = useState(false);
  return (
    <div className={classNames("payment", {"payment--open":openPayment})}>
      <div className="checkout" onClick={()=> setOpenPaiment(!openPayment)}></div>
      {isConnected && (<BlueCard openPayment={openPayment}/>)}
      {!isConnected && (<Connexion openPayment={openPayment} />)}
      
      
    </div>
  )
}

export default Payment;