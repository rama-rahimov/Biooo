import React from 'react';
import estetika from '../../assets/estetika.svg' ;
import Card from '../Card/Card';
import Photos from '../Photos/Photos';


const Estetika = () => {
  return (
    <>
    <div style={{width:"100%", display:"flex"}}> 
    <div style={{width: "50%"}}>
        <img src={estetika} />
    </div>
    <div style={{width:"50%"}}>
        <div style={{display:"flex"}}>
            <Card back="#fff"/>
            <Card back="#bbb" />
        </div>
        <div style={{display:"flex", width:"100%"}}>
            <Card back="#bbb"/>
            <Card back="#fff"/>
        </div>
    </div>
    </div>
    <div style={{display:"flex", width: "100%",justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
      <Photos />
    </div>
    </>
  )
}

export default Estetika ;
