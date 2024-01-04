import React from 'react';
import s from './InterCards.module.css';
import kalendar from '../../assets/kalendar.svg';
import arrRight from '../../assets/vectorRigthArr.svg';

const InterCards = ({bigImg, headerT, longT, date}) => {
  return (
    <div className={s.cardUnion}>
    <div className={s.interCards}> 
    <img src={bigImg} />
    <h3>{headerT}</h3>
    <p>{longT}</p>
    <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{display:"flex", alignItems:"center"}}>
            <img src={kalendar}/>
            <p style={{margin:"0" , paddingLeft:"10px"}}>{date}</p>
        </div>
        <div style={{display:"flex", alignItems:"center", cursor:"pointer" }}>
            <p style={{margin:"0", paddingRight:"10px", fontWeight:"bold"}}>Read More</p>
            <img src={arrRight} />
        </div>
    </div>
    </div>
    </div>
  )
}

export default InterCards;
