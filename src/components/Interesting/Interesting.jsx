import React from 'react';
import s from './Interesting.module.css';
import InterCards from '../InerCards/InterCards';
import inter from '../../assets/inter.svg';
import Footer from '../Footer/Footer';

const Interesting = () => {
  return (
    <>
    <div className={s.inter}> 
        <h1 className={s.interH1}>Interesting blog to read</h1>
        <div className={s.daavay}>
        <InterCards bigImg={inter} 
         headerT={`More productive with an atmosphere of greenery`}
         longT={`An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...`}
         date={`January 20, 2023`}
         />
         <InterCards bigImg={inter} 
         headerT={`More productive with an atmosphere of greenery`}
         longT={`An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...`}
         date={`January 20, 2023`}
         />
         <InterCards bigImg={inter} 
         headerT={`More productive with an atmosphere of greenery`}
         longT={`An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...`}
         date={`January 20, 2023`}
         />
        </div>
    </div>

    <div style={{display:"flex", width: "100%",justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
      <Footer />
    </div>
    </>
  )
}

export default Interesting;
