import React from 'react'

const PodContekst = ({img, bigt, text1, text2, text3}) => {
  return (
    <div style={{width:"100%"}}>
        <img src={img} />
        <h2>{bigt}</h2>
        <p>{text1} <br /> 
        {text2} <br />
        {text3}
        </p>
    </div>
  )
}

export default PodContekst
