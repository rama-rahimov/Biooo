import React from 'react' ;
import s from './Contekst.module.css';
import indoorPlan from '../../assets/Indoor_Plant.png' ;
import PodContekst from '../PodConteckst/PodContekst';

const Contekst = () => {
  return (
    <div className={s.headersss}>
      <div className={s.podHeaderss}>
      <h1>We Help choose the most <br /> suitable plants for you</h1>
      <p>Our selection includes a wide variety of flowers, from classic roses to exotic <br />
        orchids, as well as a variety of lush indoor and outdoor plants and also offer <br />
        unique floral arrangements that are perfect for any occasion, whether you're <br />
        looking to brighten up your home or send a thoughtful gift. </p>
      </div>
      <div className={s.threeCard}>
        <div className={s.planns}>
            <PodContekst img={indoorPlan} 
            bigt={"Indoor Plants"}
            text1={"Bring the beauty of nature to your"} 
            text2={"outdoor spaces with our wide"}
            text3={"selection of outdoor plants"} />
        </div>
        <div className={s.planns}>
            <PodContekst img={indoorPlan} 
            bigt={"Indoor Plants"}
            text1={"Bring the beauty of nature to your"} 
            text2={"outdoor spaces with our wide"}
            text3={"selection of outdoor plants"} />
        </div>
      </div>
    </div>
  )
}

export default Contekst
