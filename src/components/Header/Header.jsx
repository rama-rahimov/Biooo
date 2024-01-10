import React, { useState } from 'react';
import 'react-bootstrap';
import axios from 'axios';
import s from './Header.module.css' ;
import imgLush from '../../assets/Mask group.png' ;
import videoIMg from '../../assets/Vector.png' ;
import arrUp from '../../assets/arrUpp.svg' ;
import arrDown from '../../assets/arrDown.svg' ;
import fr from '../../assets/FR.svg';
import en from '../../assets/EN.svg';
import es from '../../assets/ES.svg';
import yap from '../../assets/JP.svg';
import openEye from '../../assets/open_eye.svg';
import closeOpen from '../../assets/close_eye.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  const [arrow, setArrow] = useState(false);
  const [leng, setLeng] = useState("English");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [select, setSelect] = useState("");

  const login = () => {
  axios.post("http://localhost:3001/users/login", {email, password})
  .then(ahaa => console.log(ahaa))
  .catch(ahaa => console.log(ahaa));
  }

  const changeData = (e) => {
    setPassword(e.target.value);
  }

  return (
  <div  className="page_body page_body_light" style={{width:"100%", height:"100%"}} >
  <div style={{width:"100%", height:"760px"}} className={s.imggggess}>
  <nav className="navbar navbar-expand-lg navbar-light" style={{paddingTop:"50px", paddingBottom:"115px"}}>
  <img className={s.imgLush} src={imgLush} alt="lush" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={s.navvv} id="navbarSupportedContent">
    <div >
    <div className={s.countr} onClick={() => setArrow(e => !e)}>
      <p className={s.lenguege}>{leng}</p>
      {arrow === false 
      ?<img src={arrUp} /> 
      : <img src={arrDown}/> }
    </div>
    <div >
      {arrow === true
      ? <div style={{ height:"0", display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"10px" }}>
      <div className={s.lenguageEvery} onClick={() => setLeng("English")}><img src={en} /> <p>English</p></div>
      <div className={s.lenguageEvery} onClick={() => setLeng("Français")}><img src={fr} /> <p>Français</p></div>
      <div className={s.lenguageEvery} onClick={() => setLeng("Español")}><img src={es} /> <p>Español</p></div>
      <div className={s.lenguageEvery} onClick={() => setLeng("日本語")}><img src={yap} /> <p>日本語</p></div>
      </div>
      : null 
    }
   </div>
   {/* <div>
   <select name="rabotayem" id="at23" onChange={changeData}>
    <option data-hmm="todi" value={"aha"}>aha</option>
    <option data-hmm="ahaaa" value={2}>tutttr</option>
    <option data-hmm="huhu" value={3}>jkllsd</option>
    <option data-hmm="lulu" value={4}>lnkl</option>
   </select>
   </div> */}
    </div>
    <div className={s.unionA}>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Blog</a>
      <Link to="/product">Planters</Link>
      <a href="#">Contact</a>
      <button>Call Us</button>
    </div>
  </div>
</nav>
<div style={{paddingBottom:"40px", 
    paddingLeft:"100px"}}>
<div className={s.typoRegistr}>
  <h5>Log in</h5>
  <input placeholder='email' value={email} 
  onChange={(e) => setEmail(e.target.value)}/>
   <div style={{position:"relative"}}>
  <input type={eye === false ? "password" : "text"} 
  placeholder='password' value={password} onChange={changeData}/>
  <img src={eye === false ? closeOpen : openEye} 
  style={{width:"30px", height:"30px", position:"absolute", right:"10px", top:"5px"}} 
  onClick={() => {setEye(!eye)}}/>
  </div>
  <button onClick={login}>Come on</button>
  <Link to="/registration">Registration</Link>
</div>
</div>
<div className={s.bases}>
  <h1>Nature's Beauty Delivered to You</h1>
  <h3>
  Nature's beauty is just a click away with our online flower and plant shop. We offer 
  <br /> 
  a wide variety of flowers that will bring a touch of nature to your home!
  </h3>
  <div className={s.twoBtn}>
  <button className={s.bookNow}>Book Now</button>
  <button className={s.watchVideo}>
  <img style={{paddingRight: "5px"}} src={videoIMg} alt="imgVideo" />
  Watch Video</button>
  </div>
</div> 
</div>
</div>
)
}

export default Header
