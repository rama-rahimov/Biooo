import React from 'react';
import oneImg from '../../assets/oneee.png' ;
import twoButInTop from '../../assets/twoButInTop.png' ;
import twoInDownt from '../../assets/twoInDownt.png' ;
import threeInDown from '../../assets/threeInDown.png' ;
import threeButInTop from '../../assets/threeButInTop.png' ;

const Photos = () => {
  return (
    <div>
        <h1 style={{textAlign:"center", color:"#285A43", paddingTop:"40px" }}>Our Gallery View</h1>
    <div style={{display:"flex", paddingTop:"40px" }}>
        <div>
        <img src={oneImg} />
        </div>
        <div>
            <img src={twoButInTop} style={{padding:"0 10px 10px 32px"}}/>
            <img src={threeButInTop} style={{padding:"0 10px 10px 32px"}} />
        </div>
        <div>
            <img src={twoInDownt} style={{padding:"0 10px 10px 10px"}}/>
            <img src={twoInDownt} style={{padding:"0 10px 10px 10px"}}/>
        </div>
    </div>
    </div>
  )
}

export default Photos ;
