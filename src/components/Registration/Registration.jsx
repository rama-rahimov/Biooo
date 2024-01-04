import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import openEye from '../../assets/open_eye.svg';
import closeEye from '../../assets/close_eye.svg';
import s from './Registration.module.css';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [eye, setEye] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [father_name, setFather_name] = useState("");
  const [role, setRole] = useState("");
  
  const handleChange = (value) => {
  setPhoneNumber(value);
  setValid(validatePhoneNumber(value));
  }

  console.log(role);

  const vpered = () => {
  axios.post("http://localhost:3001/users/register", 
  {name, surname, father_name, password, phone: phoneNumber, email, role})
  .then(ahaa => console.log(ahaa))
  .catch(err => console.log(err));
  }

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{15}$/;
    return phoneNumberPattern.test(phoneNumber);
  }

  return (
    <div className={s.header}>
      <h1 style={{textAlign:"center"}}>Registration</h1>
      <div className={s.podHeader}>
        <div className={s.podPodDiv}>
        <h5 className={s.nameInp}>Name:</h5>
        <input className={s.vvodim} value={name} onChange={(e) => setName(e.target.value)}/>
        <h5 className={s.nameInp}>Surname:</h5>
        <input className={s.vvodim} value={surname} onChange={(e) => setSurname(e.target.value)}/>
        <h5 className={s.nameInp}>Father name:</h5>
        <input className={s.vvodim} value={father_name} onChange={(e) => setFather_name(e.target.value)}/>
        <h5 className={s.nameInp}>Email:</h5>
        <input type="email" value={email} 
        placeholder='email' className={s.vvodim}
        onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={s.podPodDiv}>
        <div style={{position:"relative", width:"250px"}}>
        <h5 className={s.nameInp}>Password:</h5>
        <input type={eye === false ? "password" : "text"} placeholder='password' 
        value={password} onChange={(e) => setPassword(e.target.value)} className={s.vvodim} />
        <img src={eye === false ? closeEye : openEye} 
        style={{width:"30px", height:"30px", position:"absolute", right:"10px"}} onClick={() => {setEye(!eye)}} />
        </div>
        <div className={s.container}>
        <div className={s.phone_input_container}>
        <label className={s.label}>
        Phone Number :
        <PhoneInput
        country={'us'} 
        type="text" 
        className={s.vvodimm}
        value={phoneNumber}
        onChange={handleChange}
        inputProps={{
        required: true
        }}
        />
        </label>
        {/* {!valid && (
        <p className={s.error_message} style={{margin:"0"}}>Please enter a valid 10-light phone number!</p>)} */}
        </div>
        </div>
        <h5 className={s.nameInp}>Role:</h5>
        <select className={s.vvodim} onChange={(e) => setRole(e.target.value)}>
        <option>Choose</option>
        <option>1</option>
        <option>10</option>
        </select>
        </div>
      </div>
      <div style={{textAlign:"center", paddingTop:"30px"}}>
      <button className={s.bttt} onClick={vpered}>Push</button>
      </div>
    </div>
  )
}

export default Registration;
