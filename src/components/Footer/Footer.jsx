import React from 'react';
import s from './Footer.module.css';
import insta from '../../assets/insta.svg';
import tweet from '../../assets/tweeter.svg';
import facebook from '../../assets/facebook.svg';

const Footer = () => {
  return (
    <div className={s.footer}> 
      <h1>Feel free to contact us</h1>
      <div className={s.contact}>
        <div className={s.cardCont}>
          <img src={insta} />
        </div>
        <div className={s.cardCont}>
          <img src={facebook} />
        </div>
        <div className={s.cardCont}>
          <img src={tweet} />
        </div>
      </div>
      <div className={s.navHeader}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Plants</a>
        <a href="#">Delivery</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
      </div>
      <div className={s.copy}>
          <p>Copyright © 2021 Lush. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer ;
