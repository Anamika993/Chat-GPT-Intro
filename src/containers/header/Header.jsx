import React from 'react';
import './Header.css';
import people from '../../assests/people.png';
import ai from '../../assests/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <h1 className='gradient__text'>Let's build something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>

      <div className='gpt3__header-content__input'>
        <input type="email" placeholder='Your Email Address' />
        <button className='button'> Get Started</button>
      </div>
      <div className='gpt3__header-content__people'>
        <img src={people} alt="" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

      <div className='gpt3__header-image'>
        <img  src={ai} alt='ai'/>
      </div>
      
    </div>
  )
}

export default Header
 