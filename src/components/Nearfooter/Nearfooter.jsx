import React from 'react';
import s from './Nearfooter.module.css';
import qaraQizEvvelde from '../../assets/qaraqizpapaxsiz.svg' ;
import qaraQizAxirda from '../../assets/qaraqqizaxirda.svg' ;
import gulenQiz from '../../assets/gulenqiz.svg' ;
import Nature from '../Nature/Nature';

const Nearfooter = () => {
  return (
    <>
    <div className={s.header}>
        <h1>What do they say about us</h1>
        <div className={s.unionCommentCards}>
          <div className={s.commentCards} style={{padding:"30px 0 0 30px"}}>
            <div className={s.ahaaaa}><img src={qaraQizEvvelde} /> <h5>Jessica Watson</h5></div>
            <p>"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."</p>
          </div>
          <div className={s.commentCards} style={{padding:"30px 0 0 30px"}}>
            <div className={s.ahaaaa}><img src={gulenQiz} /> <h5>Kate Szu</h5></div>
            <p>"Great service, beautiful flowers, timely delivery. Highly recommend."</p>
          </div>
          <div className={s.commentCards} style={{padding:"30px 0 0 30px"}}>
            <div className={s.ahaaaa}><img src={qaraQizAxirda} /> <h5>Grace</h5></div>
            <p>"I am very happy with my purchase from this website, the plants were healthy and arrived on time."</p>
          </div>
        </div>
    </div>
    <div style={{display:"flex", width: "100%",justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
      <Nature />
    </div>
    </>
  )
}

export default Nearfooter;
