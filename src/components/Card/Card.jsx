import React from 'react';
import s from './Card.module.css';
import flower from '../../assets/flower.svg';

const Card = ({back}) => {
  return (
    <div style={{backgroundColor: back === "#fff" ? "#fff" : "#bbb"}} className={s.cardss}> 
        <div>
            <img src={flower} />
            <h4>Quality Product</h4>
            <p>Our flowers are of the highest <br />
            quality, carefully selected <br />
            and sourced from reputable</p>
        </div>
    </div> 
  )
}

export default Card;
