import React from 'react' ;
import s from './Nature.module.css';

const Nature = () => {
  return (
    <div className={s.nature}>
      <div className={s.header}>
        <p>
        Enter your email address for our <br /> mailing Promo or other interesting <br /> things
        </p>

        <form className={s.formRule}>
            <input className={s.inputNature} type="text" placeholder='Enter your email' />
            <button className={s.btnNat}>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Nature;
